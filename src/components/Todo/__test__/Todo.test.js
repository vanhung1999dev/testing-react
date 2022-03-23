import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <Router>
            <Todo />
        </Router>
    )
}

const addTasks = (tasks) => {
    const inputEle = screen.getByPlaceholderText(/Add a new task here/i);
    const buttonEle = screen.getByRole('button', { name: /Add/i});
    tasks.forEach(task => {
        fireEvent.change(inputEle, { target: { value: task}});
        fireEvent.click(buttonEle);
    });
}

describe('Add new task', () => {
    it('should test add new task', () => {
        render(
            <MockTodo />
        )
        const inputEle = screen.getByPlaceholderText(/Add a new task here/i);
        const buttonEle = screen.getByRole('button', { name: /Add/i});

        fireEvent.change(inputEle, { target: { value: 'Learning Testing'}});
        fireEvent.click(buttonEle);

        const layoutTaskEle = screen.getByText(/Learning Testing/i);
        expect(layoutTaskEle).toBeInTheDocument();
    });

    it('should test add more task', () => {
        render(
            <MockTodo />
        )
        const tasks = ['Learning Testing', 'Learning Indexing'];
        addTasks(tasks);
        const layoutTaskEle = screen.getAllByTestId(/taskId/i);
        expect(layoutTaskEle.length).toBe(2);
    });

    it('should render task which not complete', () => {
        render(
            <MockTodo />
        )
        const tasks = ['Learning Testing', 'Learning Indexing'];
        addTasks(tasks);
        const layoutTaskEle = screen.getByText(/Learning Indexing/i);
        expect(layoutTaskEle).not.toHaveClass('todo-item-active');
    });

    it('should render task which complete', () => {
        render(
            <MockTodo />
        )
        const tasks = ['Learning Testing', 'Learning Indexing'];
        addTasks(tasks);
        const layoutTaskEle = screen.getByText(/Learning Indexing/i);
        fireEvent.click(layoutTaskEle);
        expect(layoutTaskEle).toHaveClass('todo-item-active');
    });
});