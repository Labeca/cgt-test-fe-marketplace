import { FC } from "react"
import { price_style, size_lg, size_md, size_sm } from "./styles.css"

export interface PriceProps {
    value: number
    size?: 'sm' | 'md' | 'lg'
}

const Price:FC<PriceProps> = ({ value, size = 'sm' }) => {

    const fontSize = {
        sm: size_sm,
        md: size_md,
        lg: size_lg
    }

    return <p className={`${price_style} ${fontSize[size]}`}>
        {
            value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2})
        }
    </p>
}

export default Price