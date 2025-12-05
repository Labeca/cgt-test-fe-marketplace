import { FC } from "react"
import { button_style } from "./styles.css"

export interface ButtonProps {
    text: string,
    onClick: () => void
}

const Button:FC<ButtonProps> = ({ text, onClick }) => {

    return (
        <button className={button_style} onClick={onClick} data-testid="button-component" aria-label={text}>{text}</button>
    )
}

export default Button