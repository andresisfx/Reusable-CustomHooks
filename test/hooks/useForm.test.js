import { renderHook , act} from '@testing-library/react-hooks';
import {useForm} from '../../src/hooks/useForm';
import { useFormState } from 'react-dom';


const initialForm={
    name:'jose',
    email:'jose@jose'
}

describe('Pruebas en el hook useCounter', () => {

    
    
    test('debe retornar los valores por defecto', ()=>{

        const {result}=renderHook(()=>useForm(initialForm));
        console.log(result.current);
        expect(result.current).toEqual({
            formState:initialForm,
            name:initialForm.name,
            email:initialForm.email,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })

       
    })

    test('Debe cambiar el nombre del formulario',()=>{

        const {result }= renderHook(()=>useForm(initialForm));
        const newValue='Fernando';
        const {onInputChange}=result.current;

        act(()=>{
            onInputChange({
                target:{
                    name:'name',
                    value:newValue
                }
            })
        })
        expect(result.current.name).toBe(newValue);
    })

    test('Debe reestablecer el formulario',()=>{

        const {result }= renderHook(()=>useForm(initialForm));
        const newValue='Fernando';
        const {onInputChange, onResetForm}=result.current;

        act(()=>{
            onInputChange({
                target:{
                    name:'name',
                    value:newValue
                }
            })
            onResetForm();
        })
        expect(result.current.name).toBe(initialForm.name);
    })    
    
})