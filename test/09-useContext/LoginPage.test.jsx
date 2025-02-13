import {fireEvent, render, renderHook, screen} from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <LoginPage />', () => {
    
    test('debe de mostrar el componente sin el usuario', () => {
        
        render(
        
            <UserContext.Provider value={{ user:null }}>
                <LoginPage />
            </UserContext.Provider>
            )

        const preElement= screen.getByLabelText('pre');
        expect( preElement.innerHTML ).toBe('null');

    })
    test('debe llamarla funcion de setUser cuando se hae click en el boton', () => {
        

        const setUserMock = jest.fn();
        render(
        
            <UserContext.Provider value={{ user:null, setUser:setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
            )
        
        const setuserButton = screen.getByRole('button');
        fireEvent.click(setuserButton);
        expect(setUserMock).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"} );
        
    })
})