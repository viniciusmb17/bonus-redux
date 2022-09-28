import { Reducer } from 'redux'
import { ICartState } from './types'

const INITIAL_STATE: ICartState = {
  items: [],
}
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      console.log(action.payload)
      return state
    }
    default: {
      return state
    }
  }
}

export default cart
