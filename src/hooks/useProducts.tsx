
import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import {  mountQuery } from "@/utils/graphql-filters";
import { useDeferredValue } from "react";


const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post('http://localhost:3331/', { query })
}

export function useProducts() {
  const { type, priority, search } = useFilter()
  const searchDeferred = useDeferredValue(search)
  const query = mountQuery(type, priority)

  console.log("type: ")
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['product', type, priority],
    staleTime: 1000 * 60 * 5
  });

  const products = data?.data?.data?.allProducts
  const filteredProducts = products?.filter(
    product =>
      product.name
        .toLowerCase()
        .includes(searchDeferred.toLowerCase())
  )
  return {
    data: filteredProducts
  }
}