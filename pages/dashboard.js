import { useEffect, useState } from "react"

const Dashboard = () => {

    const [cookies, setCookies] = useState({})

    useEffect(() => {
        setCookies(JSON.parse(window.localStorage.getItem('cookies')))
    }, [])

    useEffect(() => {
        console.log(`token: ${cookies.token}`)
    }, [cookies])

    return (
        <h1>Dashboard</h1>
    )
}

export default Dashboard