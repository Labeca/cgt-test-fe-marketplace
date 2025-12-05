import { act, render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi }  from 'vitest'
import ProductContainer from "./index"
import { Params } from 'react-router-dom';
import { CartProvider } from '@hooks/cart'

 
describe('ProductContainer Component', async () => {
    vi.mock('react-router-dom', () => ({
      useParams: (): Readonly<Params<string>> => ({ id: '001' }),
    }));
    beforeEach(() => {
        localStorage.clear();
    })
    test('it should completly render ProductContainer', async () => {
     
        render(<ProductContainer />)
        await waitForElementToBeRemoved(() => screen.getByTestId('product-container-loader'));
        expect(screen.getByTestId('product-container')).toBeInTheDocument();
    })

    test('it should update cart content - ProductContainer', async () => {
        await act(async () => {
            render(<CartProvider><ProductContainer /></CartProvider>)
        })

        await waitFor(() => fireEvent.click(screen.getByTestId("button-component")), { timeout: 500})
        expect(localStorage.getItem('cart')).not.toBe(null);
    })
})