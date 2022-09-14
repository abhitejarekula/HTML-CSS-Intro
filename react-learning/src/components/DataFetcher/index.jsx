import React, {useEffect} from 'react'
import axios from 'axios'

const DataFetcher = () => {
    useEffect(() => {
        console.log('step 1: data container mounting, running useEffect to fetch data')
        
       
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(result => {
                console.log('step 3: successfully fetched data', result.data)
            })
            .then(result => console.log('logging second .then'))
            .catch(error => console.log ('api call failed'))

        console.log('step 2: waiting for data to be returned')    

        return () => { 
            console.log('FINAL step: container about to unmount, cleaning up')
}
    }, [])

    return (
        <div>DataFetcher</div>
    )
}

export default DataFetcher