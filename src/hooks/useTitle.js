import { useEffect, useState } from "react"

const useTitle = (_title) =>{
    const [title, setTitle] = useState()
    useEffect(()=>{setTitle(_title)}, [])
    document.title = title
}

export default useTitle