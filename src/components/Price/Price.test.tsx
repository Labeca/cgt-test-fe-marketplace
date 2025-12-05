import { render, screen } from '@testing-library/react';
import { describe, expect, test }  from 'vitest'
import Price from "./index"
import { size_lg, size_md, size_sm  } from "./styles.css"


describe('Price Component', () => {
    test('it should render price sm size', () => {
        render(<Price value={10.00} size='sm'/>)

        const element = screen.getByTestId("price-component");
        expect(element).toBeInTheDocument();    
        expect(element.className).toContain(size_sm);
        expect(element.innerHTML).toBe('$10.00');
    })

    test('it should render price md size', () => {
        render(<Price value={1500.00} size='md'/>)

        const element = screen.getByTestId("price-component");
        expect(element).toBeInTheDocument();    
        expect(element.className).toContain(size_md);
        expect(element.innerHTML).toBe('$1,500.00');
    })

    test('it should render price lg size', () => {
        render(<Price value={35.93} size='lg'/>)

        const element = screen.getByTestId("price-component");
        expect(element).toBeInTheDocument();    
        expect(element.className).toContain(size_lg);
        expect(element.innerHTML).toBe('$35.93');
    })
})