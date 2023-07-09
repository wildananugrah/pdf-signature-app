import { useEffect } from "react"

export default () => {
    useEffect(() => {
        window.localStorage.clear()
        window.location.href = "/" 
    })
}