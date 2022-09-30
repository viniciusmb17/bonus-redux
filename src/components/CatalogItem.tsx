import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCartRequest } from '../store/modules/cart/actions'
import { IProduct } from '../store/modules/cart/types'
import { IState } from '../store'

interface ICatalogItemProps {
  product: IProduct
}

export const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id)
  })

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

      {hasFailedStockCheck && (
        <span style={{ color: 'red' }}> Falta de estoque</span>
      )}
    </article>
  )
}
