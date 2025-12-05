import { render, screen } from '@testing-library/react';
import { describe, expect, test }  from 'vitest'
import ProductCard from "./index"
import { Product } from '@project_types/product';
import data from '@mocks/data.json'
import { BrowserRouter } from 'react-router-dom';

const product: Product = data[3] as Product;
describe('ProductCard Component', () => {
    test('it should render ProductCard', () => {
        render(<BrowserRouter><ProductCard product={product} /></BrowserRouter>)

        const element = screen.getByTestId("product-card-component");
        expect(element).toBeInTheDocument();
    })
})