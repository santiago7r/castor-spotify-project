import axios from "axios"
import { useEffect, useState } from "react"

const useGetItemData = ({ type, id }) => {
    const [response, setResponse] = useState()
      
    useEffect(() => {
      async function getItem() {
        let token = window.localStorage.getItem("token")
        //TODO: redirect to login if no token in session
        const { data } = await axios.get(`https://api.spotify.com/v1/${type}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setResponse(data)
      }
    
      getItem();
    }, [type, id])
    return {data: response}
}

export default useGetItemData