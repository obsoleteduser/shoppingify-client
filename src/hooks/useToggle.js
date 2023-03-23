import { useDispatch, useSelector } from "react-redux"
import { update } from "../redux/slices/componentSlice"


const useToggle = ()=>{

    const dispatch = useDispatch()
    const shopList = useSelector(state => state.componentReducer.shopList)
    const itemAdder = useSelector(state => state.componentReducer.itemAdder)
    const menu = useSelector(state => state.componentReducer.menu)
    const productDetails = useSelector(state => state.componentReducer.productDetails)

    const toggleList = (arg= !shopList) =>{
        dispatch(update({shopList: arg}))
        dispatch(update({itemAdder:false}))
        console.log(shopList)
    }

    const toggleAdder = (arg = !itemAdder) =>{
        dispatch(update({itemAdder: arg}))
        dispatch(update({shopList:false}))
        console.log(itemAdder)
    }

    const toggleMenu = (arg = !menu)=>{
        dispatch(update({menu: arg}))
    }

    const toggleProductDetail = (arg = !productDetails)=>{
        dispatch(update({productDetails: arg}))
    }

    return {toggleList, toggleAdder, toggleMenu, toggleProductDetail}


}

export default useToggle