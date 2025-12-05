import { FC } from "react"
import { price_style, size_lg, size_md, size_sm } from "./styles.css"

export interface PriceProps {
    value: number
    size?: 'sm' | 'md' | 'lg'
}

const Price:FC<PriceProps> = ({ value, size = 'sm' }) => {

    const font_size = {
        sm: size_sm,
        md: size_md,
        lg: size_lg
    }
    const dollar_value = value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2})

    return <p className={`${price_style} ${font_size[size]}`} data-testid="price-component" aria-label={dollar_value}>
        {dollar_value}
    </p>
}

export default Price