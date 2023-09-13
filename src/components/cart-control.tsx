"use client"

import { useLocalStorage } from "@/hooks/useLocalStorege";
import { CartIcon } from "./icons/cart-icon";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;

    background-color: var(--delete-color);
    color: white;

    margin-left: -10px;
`

const Container = styled.button`
    position: relative;
    background: transparent;
    list-style: none;
    border: none;

    cursor: pointer;
`

export function CartControl() {
    const { value } = useLocalStorage('cart-items', [])
    const router = useRouter();

    const handleNavidateToCart = () => {
        router.push("/cart")
    }

    return (
        <Container onClick={handleNavidateToCart}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}