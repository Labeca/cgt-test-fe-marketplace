import { act, render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi }  from 'vitest'
import CartContainer from "./index"
import data from '@mocks/data.json'
import { CartProvider } from '@hooks/cart'

 
describe('CartContainer Component', async () => {
    beforeEach(() => {
        localStorage.clear();
    })

    test('it should completly render CartContainer', async () => {
        render(<CartContainer />)
        expect(screen.getByTestId('cart-container')).toBeInTheDocument();
    })

    test('it should update cart content - CartContainer', async () => {
        const mockCart = new Map<string, any>([
            [data[0]!.id, { product: {...data[0], price: 1}, quantity: 2 }],
            [data[1]!.id, { product: {...data[0], price: 2}, quantity: 1 }],
        ]);
        await act(async () => {
            render(<CartProvider data={mockCart}><CartContainer /></CartProvider>)
        })

        const cartPriceElement = screen.getAllByTestId("price-component").pop()

        const productItems = screen.getAllByTestId("product-item-component")
        expect(productItems.length).toBe(2);
        expect(localStorage.getItem('cart')).not.toBe(null);
        expect(cartPriceElement!.textContent).toBe('$4.00');
    })

    test('it should update increase item quantity by 1 - CartContainer', async () => {
        const mockCart = new Map<string, any>([
            [data[0]!.id, { product: {...data[0], price: 1}, quantity: 2 }],
            [data[1]!.id, { product: {...data[0], price: 2}, quantity: 1 }],
        ]);
        await act(async () => {
            render(<CartProvider data={mockCart}><CartContainer /></CartProvider>)
        })

        const cartPriceElement = screen.getAllByTestId("price-component").pop()
        const productQuantity = screen.getAllByTestId("product-quantity-value")
        const productItemsBtnIncresa = screen.getAllByTestId("product-quantity-btn-increase")
        await fireEvent.click(productItemsBtnIncresa[0]!)

        expect(productQuantity[0]!.textContent).toBe('3');
        expect(localStorage.getItem('cart')).not.toBe(null);
        expect(cartPriceElement!.textContent).toBe('$5.00');
    })

    test('it should update decrease item quantity by 1 - CartContainer', async () => {
        const mockCart = new Map<string, any>([
            [data[0]!.id, { product: {...data[0], price: 1}, quantity: 2 }],
            [data[1]!.id, { product: {...data[0], price: 2}, quantity: 1 }],
        ]);
        await act(async () => {
            render(<CartProvider data={mockCart}><CartContainer /></CartProvider>)
        })

        const cartPriceElement = screen.getAllByTestId("price-component").pop()
        const productQuantity = screen.getAllByTestId("product-quantity-value")
        const productItemsBtnIncresa = screen.getAllByTestId("product-quantity-btn-decrease")
        await fireEvent.click(productItemsBtnIncresa[0]!)

        expect(productQuantity[0]!.textContent).toBe('1');
        expect(localStorage.getItem('cart')).not.toBe(null);
        expect(cartPriceElement!.textContent).toBe('$3.00');
    })

    test('it should remove item - CartContainer', async () => {
        const mockCart = new Map<string, any>([
            [data[0]!.id, { product: {...data[0], price: 1}, quantity: 2 }],
            [data[1]!.id, { product: {...data[0], price: 2}, quantity: 1 }],
        ]);
        await act(async () => {
            render(<CartProvider data={mockCart}><CartContainer /></CartProvider>)
        })

        const cartPriceElement = screen.getAllByTestId("price-component").pop()
        const productItemsBtnIncresa = screen.getAllByTestId("product-quantity-btn-remove")
        await fireEvent.click(productItemsBtnIncresa[0]!)

        const productItems = screen.getAllByTestId("product-item-component")
        expect(productItems.length).toBe(1);
        expect(localStorage.getItem('cart')).not.toBe(null);
        expect(cartPriceElement!.textContent).toBe('$2.00');
    })
})