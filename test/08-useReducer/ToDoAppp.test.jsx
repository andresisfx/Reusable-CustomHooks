import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp.jsx"
import { useTodos } from "../../src/hooks"

jest.mock('../../src/hooks/useTodos.js')
describe('Pruebas en <ToDoApp />', () => {

   useTodos.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true},
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    })
    
    test('debe de mostrar el componente sin la informacion', () => {
        
        render(<TodoApp />)

        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    })
})