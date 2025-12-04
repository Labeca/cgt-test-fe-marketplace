import { FC } from "react"
import { image_container_style, image_container_lg, image_container_md, image_container_sm, image_style_lg,image_style_md,image_style_sm } from "./styles.css"

export interface ImageProps {
    src: string,
    alt: string,
    size?: 'sm' | 'md' | 'lg'
}

const Image:FC<ImageProps> = ({ src, alt, size = 'sm' }) => {
    const container_size = {
        sm: image_container_sm,
        md: image_container_md,
        lg: image_container_lg
    }
    const image_size = {
        sm: image_style_sm,
        md: image_style_md,
        lg: image_style_lg  
    }
    return (
        <div className={`${image_container_style} ${container_size}`}>
            <img src={src} alt={alt} className={image_size[size]} />
        </div>
    )
}

export default Image