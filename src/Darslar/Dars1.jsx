import { useEffect, useState, useRef } from "react"
import Card from "./Card"
const apiKey = "wC6RmE5zPz24E2StI7QYvFdUyIuKoaAzfYOiTMNecodhxQuc6O04rOuc"
const Dars1 = () => {



  const [data, setData] = useState([])
  const [search, setSearch] = useState("main")
  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=${search}`, {
      method: "GET", headers: {
        Accept: `application/json`, Authorization: apiKey
      }
    })
      .then(res => res.json())
      .then(res => { setData(res.photos), console.log(res.photos) })
  }, [search])
  const refs = useRef()
  return (
    <div>
      <div className='search' >
        <img src="https://github.com/javohirdev/image-search/blob/main/pexels.png?raw=true" />
        <div>
          <input ref={refs} placeholder="Pexels Image Search" />
          <button onClick={() => setSearch(refs.current.value)} >Search</button>
        </div>
      </div>
      <div className="pexelsImages">
        {data.map(item =>
          <Card key={item.id} item={item} />
        )}
      </div>
    </div>
  )
}

export default Dars1