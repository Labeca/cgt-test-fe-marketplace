import { Product } from "@project_types/product";
import { FC, useCallback, useEffect, useState } from "react";
import { page_wrapper, page_header, decription_style, title_style, data_container_style, metadata_container_style, metadata_items_style, button_container_style } from "./styles.css";
import { useParams } from "react-router-dom";
import { useCart } from "@hooks/cart";
import Button from "@components/Button";
import Price from "@components/Price";
import Image from "@components/ImageContainer"

const Home:FC = () => {
    const [product, setProduct] = useState<Product>();
    const { id } = useParams()

    const { addItem } = useCart();
    
    const fetchProduct = useCallback (async () => {
        const response = await fetch(`http://fakestoreapi.com/product/${id}`, { method: 'GET' });
        if (!response.ok) {
            throw new Error('Failed to fetch weather');
        }

        setProduct(await response.json())
    }, []);

    useEffect(() => {
        fetchProduct()
    }, [])

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <section className={page_wrapper}>
            <div className={page_header}>
                <Image src={product.image_path} alt={product.title} size="lg"/>
                <div className={data_container_style}>
                    <h1 className={title_style}>{product.title}</h1>
                    <Price value={product.price} size="lg"/>
                    <div className={button_container_style}>
                        <Button onClick={() => addItem(product)} text="Add to cart" />
                    </div>
                    <ul className={metadata_container_style}>
                        {
                            Object.entries(product.metadata).map(([key, value]) => (
                                <li key={key} className={metadata_items_style}>{`${key}: ${value}`}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={decription_style}>
                {product.description}
            </div>
        </section>
    );
}

export default Home;