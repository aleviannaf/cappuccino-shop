"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card"
import styled from "styled-components"

const ListConatainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    grid-gap: 32px;
    max-width: 100%;

    margin-top: 32px;
`

export function ProductList() {
    const { data } = useProducts()
    return (
        <ListConatainer>
            {data?.map(product =>
                <ProductCard
                    key={product.id}
                    title={product.name}
                    price={product.price_in_cents}
                    image={product.image_url}
                />)}
        </ListConatainer>
    )
}