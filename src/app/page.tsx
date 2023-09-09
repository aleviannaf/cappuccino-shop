"use client"

import { FilterBar } from '@/components/filter-bar'
import styles from './page.module.css'
import { styled } from 'styled-components'
import { ProductList } from '@/components/products-list'


const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {
  return (
    <PageWrapper className={styles.main}>
      <FilterBar />
      <ProductList />
    </PageWrapper>
  )
}