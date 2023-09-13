"use client"

import { ProductInCart } from "@/types/product"
import { formatPrice } from "@/utils/format-price"
import { ChangeEvent } from "react"
import styled from "styled-components"

interface CartItemProps {
    product: ProductInCart
    handleUpdateQuantity(id: string, quantity: number): void
}

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 210px;

    border-radius: 8px;
    background-color: white;

    img {
        max-height: 100%;
        width: 256px;
        border-radius: 8px 0 0 8px;
    }

    >div {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: flex-start;
        justify-content: space-around;
        flex-direction: column;
        padding: 16px 24px;
        line-height: 150%;
        color: var(--text-dark-2);

        h4 {
            font-size: 20px;
            font-weight: 300;         
        }

        p {
            font-size: 12px;
            font-weight: 400;
        }

        div {
           display: flex;
           align-items: center;
           justify-content: space-between;
           width: 100%;

            span {
                font-size: 16px;
                font-weight: 600;
                line-height: 150%;
                color: var(--shapes-dark);
            }
        }
    }
`
export default function CartItem({ product, handleUpdateQuantity }: CartItemProps){

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleUpdateQuantity(product.id, Number(e.target.value))
    }

    return(
        <Item>
            <img src={product.image_url}/>
            <div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div>
                    <select value={product.quantity} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                    <span>{formatPrice(product.price_in_cents)}</span>
                </div>
            </div>
        </Item>
    )
}