import { FC } from "react"
import { wrapper_style, button_style, container_style, delete_button_style } from "./styles.css"
import { DeleteOutlined } from "@ant-design/icons"

export interface ProductQuantityProps {
    quantity: number
    increase_action: () => void,
    decrease_action: () => void,
    remove_action: () => void
}

const ProductQuantity: FC<ProductQuantityProps> = ({ quantity, increase_action, decrease_action,remove_action }) => {
    return (
        <div className={wrapper_style} data-testid="product-quantity-component">
            <p className={container_style}>
                <button
                    className={button_style}
                    onClick={increase_action}
                    data-testid="product-quantity-btn-increase"
                    aria-label="increase quantity"
                > + </button>
                <span data-testid="product-quantity-value">{quantity}</span>
                <button
                    className={button_style}
                    onClick={decrease_action}
                    data-testid="product-quantity-btn-decrease"
                > - </button>
            </p>
                <button
                    onClick={remove_action}
                    className={delete_button_style}
                    data-testid="product-quantity-btn-remove"
                    aria-label="decrease quantity"
                >
                    <DeleteOutlined />
                </button>
        </div>
    )
}

export default ProductQuantity