import React, {useState, useEffect, Component} from 'react'

const useTest = (url) => {

    const  [ data,setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const result = await response.json();
                setData(result)
                
            }
            catch(error){
                console.log(error)
            }
        }

        fetchData()
    },[url])

    

    return {data}
}

export default useTest
