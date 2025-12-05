import { render, screen } from '@testing-library/react';
import { describe, expect, test }  from 'vitest'
import Image from "./index"
import { image_container_lg, image_container_md, image_container_sm, image_style_lg,image_style_md,image_style_sm } from "./styles.css"


describe('ImageContainer Component', () => {
    test('it should render image sm size', () => {
        render(<Image src='fake.jpg' alt='test' size='sm'/>)

        const element = screen.getByTestId("image-container-component");
        expect(element).toBeInTheDocument();    
        expect(element.className).toContain(image_container_sm);
        expect(element.firstElementChild?.className).toContain(image_style_sm);
    })

    test('it should render image md size', () => {
        render(<Image src='fake.jpg' alt='test' size='md'/>)

        const element = screen.getByTestId("image-container-component");
        expect(element).toBeInTheDocument();    
        expect(element.className).toContain(image_container_md);
        expect(element.firstElementChild?.className).toContain(image_style_md);
    })

    test('it should render image lg size', () => {
        render(<Image src='fake.jpg' alt='test' size='lg'/>)

        const element = screen.getByTestId("image-container-component");
        expect(element).toBeInTheDocument();    
        expect(element.className).toContain(image_container_lg);
        expect(element.firstElementChild?.className).toContain(image_style_lg);
    })
})