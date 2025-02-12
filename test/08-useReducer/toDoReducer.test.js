import { todoReducer } from "../../src/08-useReducer/todoReducer.js";

describe('Pruebas en toDoReducer', () => {
     
    const initialState= [{
        id: 1,
        todo: '[TODO] demo todo',
        done: false
    }]
    test('debe de retornar el estado por defecto', () => {
        
        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
    })

    test('debe de agregar un todo', () => {

        const action= {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                todo: 'Nuevo todo #2',
                done: false
            }
        }
        
        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect(newState).toContain( action.payload );
    })

    test('debe de borrar un todo', () => {

        const action= {
            type: '[TODO] Remove Todo',
            payload: 2
        }
        
        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 1 );
        
        
    })
    test('debe de cambiar el estado de un todo', () => {

        const action= {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        
        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );
        
        const newState2 = todoReducer( newState, action );
        expect(newState2[0].done).toBe(false);
        
    })
})