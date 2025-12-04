import { Product } from "@project_types/product"
import { FC } from "react"
import { image_container_style, wrapper_style } from "./styles.css"
import ProductQuantity from "../ProductQuantity"
import { useCart } from "@hooks/cart"
import Image from "@components/ImageContainer"
import Price from "@components/Price"

export interface ProductItemProps {
    product: Product,
    quantity: number
}

const ProductItem: FC<ProductItemProps> = ({ product, quantity }) => {
    const { addItem, decreaseItem, removeItem } = useCart();
    return (
        <li className={wrapper_style}>
            <div className={image_container_style}>
                <Image src={product.image_path} alt={product.title} size="sm"/>
            </div>
            <div>
                <h2>{product.title}</h2>
                <Price value={product.price} size="md"/>
                <ProductQuantity
                    quantity={quantity}
                    decrease_action={() => decreaseItem(product.id)}
                    increase_action={() => addItem(product)}
                    remove_action={() => removeItem(product.id)}
                />
            </div>
        </li>
    )
}

export default ProductItem