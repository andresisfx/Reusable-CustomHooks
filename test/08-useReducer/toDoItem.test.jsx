import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';


describe('Pruebas en <TodoItem />', () => {

    const  onDeleteTodoMock=jest.fn();
    const  onToggleTodoMock=jest.fn();
    const todo={
        id:1,
        description:'Piedra del Alma',
        done:false
    }
    
    test('Debe de mostrar el toDo pendiente', () => {
        
        
        

        render(<TodoItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock } 
                    onToggleTodo={ onToggleTodoMock }
              />);

         const liElement=screen.getByRole('listitem');   

         expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
         const spanElement=screen.getAllByLabelText('span');

         expect( spanElement[0].className ).toContain('align-self-center');
         expect( spanElement[0].className ).not.toContain('text-decoration-line-through');
    })

    test('Debe de mostrar el toDo completado', () => {
        
         todo.done=true;

        render(<TodoItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock } 
                    onToggleTodo={ onToggleTodoMock }

              />);

         const spanElement=screen.getAllByLabelText('span');

         expect( spanElement[0].className ).toContain('text-decoration-line-through');
    }) 
    
    test('Debe de llamar la función de onToggleTodo', () => {
    
        render(<TodoItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock } 
                    onToggleTodo={ onToggleTodoMock }
              />);
            

            const spanElement=screen.getByLabelText('span');
            fireEvent.click( spanElement );
            expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    })
    test('Debe de llamar la función de onDeleteTodo', () => {
        render(<TodoItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock } 
                    onToggleTodo={ onToggleTodoMock }
              />);
            
            const buttonElement=screen.getByRole('button');
            fireEvent.click( buttonElement );
            expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    })
})