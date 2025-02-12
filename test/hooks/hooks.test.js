import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../src/hooks/useCounter';



describe('Pruebas en el hook useCounter', () => {
    
    test('Debe de retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );
        expect( result.current.counter ).toBe(10); 
        const { increment, decrement, reset } = result.current;

        expect(  increment ).toEqual( expect.any(Function) );
        expect(  decrement ).toEqual( expect.any(Function) );
        expect( reset ).toEqual( expect.any(Function) );
        
        
    });

    test('Debe de tener el counter en 100', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        expect( result.current.counter ).toBe(100);        
    });

    test('Debe de incrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act(() => {
            increment();
        });

        expect( result.current.counter ).toBe(11);        
    });

    test('Debe de decrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;

        act(() => {
            decrement();
        });

        expect( result.current.counter ).toBe(9);        
    });

    test('Debe de resetear el counter', () => {
        
        const { result } = renderHook( () => useCounter() );
        const { decrement, reset } = result.current;

        act(() => {
            decrement();
            reset();
        });

        expect( result.current.counter ).toBe(10);        
    });
})