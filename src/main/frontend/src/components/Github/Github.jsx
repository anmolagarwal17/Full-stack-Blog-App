import { useEffect, useState } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

export default function Github() {
    let {userName} = useParams();
    const data = useLoaderData();
    // const [data,setData] = useState([]);

    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${userName}`)
    //     .then(res => res.json())
    //     .then((data) => {
    //     setData(data);
    //  })
    // },[]) 

  return (
    <div>Github followers = {data.followers}</div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/Tushit-29`);
    return response.json();
}
