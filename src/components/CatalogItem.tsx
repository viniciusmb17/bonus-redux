import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCartRequest } from '../store/modules/cart/actions'
import { IProduct } from '../store/modules/cart/types'

interface ICatalogItemProps {
  product: IProduct
}

export const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddProductToCart = () => {
    dispatch(addProductToCartRequest(product))
  }

  return (
    <article key={product.id}>
      <strong>{product.title}</strong>
      {' - '}
      <span>{product.price}</span>
      {'  '}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  )
}
