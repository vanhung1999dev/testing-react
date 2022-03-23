import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockToDoFooter = ({task}) => {
    return (
        <Router>
            <TodoFooter numberOfIncompleteTasks={task} />
        </Router>
    )
}

describe('ToDoFooter', () => {
   describe('test with 1 tak', () => {

    it('should render footer task', () => {
        const defaultProps = '1 task left';
        render(
            <MockToDoFooter task={1} />
        );
        const footer = screen.getByText(defaultProps);
        expect(footer).toBeInTheDocument();
    });

   }) 

   describe('test with more than 1 tasks', () => {

    it('should render footer tasks', () => {
        const defaultProps = '5 tasks left';
        render(
            <MockToDoFooter task={5} />
        );
        const footer = screen.getByText(defaultProps);
        expect(footer).toBeInTheDocument();
    });
    
    it('should visible', () => {
        const defaultProps = '5 tasks left';
        render(
            <MockToDoFooter task={5} />
        );
        const footer = screen.getByText(defaultProps);
        expect(footer).toBeVisible();
    });
    
    it('should contain p tag', () => {
        const defaultProps = '5 tasks left';
        render(
            <MockToDoFooter task={5} />
        );
        const footer = screen.getByText(defaultProps);
        expect(footer).not.toHaveTextContent('p');
    });
    
   })
});



