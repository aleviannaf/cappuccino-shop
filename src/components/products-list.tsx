"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card"
import styled from "styled-components"

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    justify-content: space-around;
    grid-gap: 32px;
    width: 100%;

    margin-top: 32px;
`

export function ProductList() {
    const { data } = useProducts()
    return (
        <ListContainer>
            {data?.map(product =>
                <ProductCard
                    key={product.id}
                    title={product.name}
                    price={product.price_in_cents}
                    image={product.image_url}
                    id={product.id}
                />)}
        </ListContainer>
    )
}