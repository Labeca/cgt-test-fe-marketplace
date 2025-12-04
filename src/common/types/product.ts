

export interface ProductMetadata {
    [key: string]: string | number | boolean
}

export interface Product {
    id: string
    image_path: string
    title: string
    description: string
    price: number
    metadata: ProductMetadata
}