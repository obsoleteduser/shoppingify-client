import { useEffect, useState } from "react"

const useTitle = (_title, someDependencies) =>{
    const [title, setTitle] = useState()
    useEffect(()=>{setTitle(_title)}, someDependencies)
    document.title = title
}

export default useTitle