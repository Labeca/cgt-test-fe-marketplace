import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi }  from 'vitest'
import Button from "./index"


describe('Button Component', () => {
    test('it should render button component', () => {
        render(<Button text='teste' onClick={() => {}}/>)

        const element = screen.getByTestId("button-component");
        expect(element).toBeInTheDocument();    
        expect(element.innerHTML).toBe('teste');
    })

    test('it should call provided onClick function', () => {
        const func = vi.fn()
        // vi.spyOn(func)
        render(<Button text='teste' onClick={func}/>)

        const element = screen.getByTestId("button-component");
        element.click()
        expect(element).toBeInTheDocument();    
        expect(func).toBeCalled()
    })
})