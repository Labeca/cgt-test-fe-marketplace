import { render, screen } from '@testing-library/react';
import { describe, expect, test }  from 'vitest'
import Menu from "./index"
import { BrowserRouter } from 'react-router-dom';

describe('Menu Component', () => {
    test('it should render Menu', () => {
        render(<BrowserRouter><Menu /></BrowserRouter>)

        const element = screen.getByTestId("menu-component");
        expect(element).toBeInTheDocument();
    })
})