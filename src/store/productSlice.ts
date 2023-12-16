'use client'

import { customData } from '@/const'
import { createSlice } from '@reduxjs/toolkit/react'

interface ProductState {
  category: string
}

const initialState: ProductState = {
  category: customData[0].description,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
  },
})

export const { setCategory } = productSlice.actions
export default productSlice.reducer
