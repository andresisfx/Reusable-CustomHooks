import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <HomePage />', () => {
    
    test('debe de mostrar el componente sin la informacion', () => {
        
        render(
        
            <UserContext.Provider value={{ user: null }}>
                <HomePage />)
            </UserContext.Provider>
        )  

       const preElement= screen.getByLabelText('pre');
       expect( preElement.innerHTML ).toBe('null');
    })

    test('debe de mostrar el componente el usuario', () => {

        const user={
            id:1,
            name: 'Fernando',
            
        }
        
        render(
        
            <UserContext.Provider value={{ user:user }}>
                <HomePage />)
            </UserContext.Provider>
        )  

       const preElement= screen.getByLabelText('pre');
       expect( preElement.innerHTML ).toBe(JSON.stringify(user,null, 3 ));''

    })
})