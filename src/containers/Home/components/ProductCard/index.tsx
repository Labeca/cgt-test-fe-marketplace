import { FC } from "react";
import {card_wrapper_style, card_container_style, title_link_style, title_style} from './styles.css';
import { useCart } from "@hooks/cart";
import { Product } from "@project_types/product";
import { NavLink } from "react-router-dom";
import Price from "@components/Price";
import Button from "@components/Button";
import Image from "@components/ImageContainer";

export interface ProductCardProps {
    product: Product
}

const ProductCard:FC<ProductCardProps> = ({ product }) => {
    const { addItem } = useCart();

    return (
        <div className={card_wrapper_style} data-testid="product-card-component">
            <div className={card_container_style}>
                <NavLink to={`/product/${product.id}`}>
                    <Image src={product.image_path} alt={product.title} size="md"/>
                </NavLink>
                <h3 className={title_style}>
                    <NavLink to={`/product/${product.id}`} className={title_link_style}>{product.title}</NavLink>
                </h3>
                <Price value={product.price}/>
                <Button onClick={() => addItem(product)} text="Add to cart" />
            </div>
        </div>
    );
} 

export default ProductCard;