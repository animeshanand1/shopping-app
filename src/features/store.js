import {configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlice'

const store=configureStore({
    reducer:{
        key:productReducer,
        
    }
})

export default store