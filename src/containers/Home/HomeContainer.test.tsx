import { act, render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, test }  from 'vitest'
import HomeContainer from "./index"
import data from '@mocks/data.json'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '@hooks/cart'

 
describe('HomeContainer Component', () => {
    test('it should completly render HomeContainer', async () => {
        await act(async () => {
            render(<BrowserRouter><HomeContainer /></BrowserRouter>)
        })

        const productCards = screen.getAllByTestId("product-card-component")
        expect(productCards.length).toBe(data.length)
    })

    test('it should update cart content - HomeContainer', async () => {
        await act(async () => {
            render(<BrowserRouter><CartProvider><HomeContainer /></CartProvider></BrowserRouter>)
        })

        const productCards = screen.getAllByTestId("product-card-component")
        await waitFor(() => fireEvent.click(productCards[0]!.firstElementChild!.querySelector('button')!), { timeout: 500})
        expect(productCards.length).toBe(data.length)
        expect(localStorage.getItem('cart')).not.toBe(null);
    })

    test('it should have two items in cart - HomeContainer', async () => {
        await act(async () => {
            render(<BrowserRouter><CartProvider><HomeContainer /></CartProvider></BrowserRouter>)
        })

        const productCards = screen.getAllByTestId("product-card-component")
        await waitFor(() => fireEvent.click(productCards[0]!.firstElementChild!.querySelector('button')!), { timeout: 500})
        await waitFor(() => fireEvent.click(productCards[1]!.firstElementChild!.querySelector('button')!), { timeout: 500})

        const cartMap = new Map<string, any>(JSON.parse(localStorage.getItem('cart') || ''));
        expect(productCards.length).toBe(data.length)
        expect(cartMap.size).toBe(2);
    })
})