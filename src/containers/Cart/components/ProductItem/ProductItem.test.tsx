import { render, screen } from '@testing-library/react';
import { describe, expect, test }  from 'vitest'
import ProductItem from "./index"
import { Product } from '@project_types/product';
import data from '@mocks/data.json'

const product: Product = data[1] as Product;

describe('ProductItem Component', () => {
    test('it should render ProductItem', () => {
        render(<ProductItem product={product} quantity={1} />)

        const element = screen.getByTestId("product-item-component");
        expect(element).toBeInTheDocument();
        expect(element.children.item(1)?.firstElementChild?.innerHTML).toBe(product.title);    
    })
})