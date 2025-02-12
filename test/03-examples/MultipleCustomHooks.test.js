import { fireEvent, render,screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => {
    
    const mockIncrement= jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })
   
    useFetch.mockReturnValue({
        data: null,
        isLoading: true,
        hasError: null
    })

    beforeEach(() => {
        jest.clearAllMocks(); //limpiamos cada una de las pruebas antes quese ejecuten por si habiamos llamado antes
    });
    
    test('Debe de mostrar el componente por defecto', () => {
        
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'))
        expect(screen.getByText('BreakingBad Quotes'))

        const nextButton = screen.getByRole('button',{name:'Next quote'});
        expect(nextButton.disabled).toBeTruthy();
        screen.debug()

    });

    test('Debe de mostrar un quote', () => {
        
        useFetch.mockReturnValue({
            data: [{author:'Fernando', quote:'Hola mundo'}],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola mundo')).toBeTruthy();

        expect(screen.getByText('Fernando')).toBeTruthy();

        const nextButton = screen.getByRole('button',{name:'Next quote'});
        expect(nextButton.disabled).toBeFalsy();
        screen.debug()

    });
    test('Debe de llamar la función de increment', () => {
        
        useFetch.mockReturnValue({
            data: [{author:'Fernando', quote:'Hola mundo'}],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button',{name:'Next quote'});
        expect(nextButton.disabled).toBeFalsy();
        
        fireEvent.click(nextButton);

        expect()
    })
});