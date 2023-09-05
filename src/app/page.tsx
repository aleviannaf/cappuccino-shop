"use client"

import { FilterBar } from '@/components/filter-bar'
import styles from './page.module.css'
import { styled } from 'styled-components'
import { ProductList } from '@/components/products-list'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {
const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <PageWrapper className={styles.main}>
        <FilterBar />
        <ProductList />
      </PageWrapper>
    </QueryClientProvider>
  )
}