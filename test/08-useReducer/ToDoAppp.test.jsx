import { render } from "@testing-library/react"
import { ToDoApp } from "../../src/08-useReducer/ToDoApp"
import { useTodos } from "../../src/hooks"


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
        
        render(<ToDoApp />)

        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    })
})