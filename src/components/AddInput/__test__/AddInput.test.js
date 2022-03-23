import { render, screen , fireEvent} from '@testing-library/react';
import AddInput from '../AddInput';

const setTodoMock = jest.fn();

describe('Add Input', () => {
    it('should render input element', () => {
        render(
            <AddInput todos={[]} setTodos={setTodoMock}/>
        )

        const inputEle = screen.getByPlaceholderText('Add a new task here...');
        expect(inputEle).toBeInTheDocument();
    })

    it('should render value of input', () => {
        render(
            <AddInput todos={[]} setTodos={setTodoMock}/>
        )

        const inputEle = screen.getByPlaceholderText('Add a new task here...');
        fireEvent.change(inputEle, { target: { value: 'Hello World'}});
        expect(inputEle.value).toBe('Hello World');
    })

    it('should render empty value when click add task', () => {
        render(
            <AddInput todos={[]} setTodos={setTodoMock}/>
        )

        const inputEle = screen.getByPlaceholderText('Add a new task here...');
        const buttonAdd = screen.getByRole('button', { name: /Add/i})
        fireEvent.click(buttonAdd);
        expect(inputEle.value).toBe("");
    })
});