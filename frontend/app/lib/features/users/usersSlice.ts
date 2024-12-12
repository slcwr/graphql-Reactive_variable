// features/usersSlice.ts
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  }
})

export const { increment } = usersSlice.actions
export default usersSlice.reducer