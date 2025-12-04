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
        <div className={wrapper_style}>
            <p className={container_style}>
                <button className={button_style} onClick={increase_action}> + </button>
                {quantity}
                <button className={button_style} onClick={decrease_action}> - </button>
            </p>
             <button onClick={remove_action} className={delete_button_style}>
                <DeleteOutlined />
             </button>
        </div>
    )
}

export default ProductQuantity