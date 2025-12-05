import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi }  from 'vitest'
import ProductQuantity from "./index"

describe('ProductQuantity Component', () => {
    const increase_fn = vi.fn();
    const decrease_fn = vi.fn();
    const remove_fn = vi.fn();
    test('it should render ProductQuantity', () => {
        render(
        <ProductQuantity
            quantity={1}
            increase_action={increase_fn}
            decrease_action={decrease_fn}
            remove_action={remove_fn}/>
        )

        const element = screen.getByTestId("product-quantity-component");
        expect(element).toBeInTheDocument();
    })

    test('it should click on increase_action btn - ProductQuantity', () => {
        render(
        <ProductQuantity
            quantity={1}
            increase_action={increase_fn}
            decrease_action={decrease_fn}
            remove_action={remove_fn}/>
        )

        const element = screen.getByTestId("product-quantity-btn-increase");
        fireEvent.click(element)
        expect(increase_fn).toBeCalled();
    })

    test('it should click on decrease_action btn - ProductQuantity', () => {
        render(
        <ProductQuantity
            quantity={1}
            increase_action={increase_fn}
            decrease_action={decrease_fn}
            remove_action={remove_fn}/>
        )

        const element = screen.getByTestId("product-quantity-btn-decrease");
        fireEvent.click(element)
        expect(decrease_fn).toBeCalled();
    })

    test('it should click on remove_action btn - ProductQuantity', () => {
        render(
        <ProductQuantity
            quantity={1}
            increase_action={increase_fn}
            decrease_action={decrease_fn}
            remove_action={remove_fn}/>
        )

        const element = screen.getByTestId("product-quantity-btn-remove");
        fireEvent.click(element)
        expect(remove_fn).toBeCalled();
    })
})