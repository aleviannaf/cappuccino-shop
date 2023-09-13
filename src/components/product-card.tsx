import { formatPrice } from "@/utils/format-price"
import { useRouter } from "next/navigation"
import { styled } from "styled-components"
import { Divider } from "./diveder"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id: string
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border: none;

    width: 256px;

    cursor: pointer;

    img {
        width: 256px;
        height: 300px;
        border-radius: 8px 8px  0px 0px;
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--shape-dark);
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 12px;
        width: 100%;
    }

    &:hover{
        opacity: 0.7;
        transform: scale(1.08);
    }
`

export function ProductCard(props: ProductCardProps) {
    const router = useRouter()
    const price = formatPrice(props.price)

    const handleNavigate = () =>{
        router.push("/product?id=" + props.id)
    }

    return (
        <Card onClick={handleNavigate}>
            <img src={props.image} alt="imagem do produto"/>
            <div>
                <h3>{props.title}</h3>
                <Divider/>
                <p>{price}</p>
            </div>
        </Card>
    )
}