import { useState, useEffect } from "react"
import Card from "./Card.jsx"
const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(res => { setData(res), setFilter(res) })
  }, [])

  const filterProduct = (category) => {
    const updatedList = data.filter((x) => x.category === category)
    setFilter(updatedList)
  }
  return (
    <div className="product">
      <div className="searchBar">
        <h2>Products</h2>
        <div className="categories">
          <button onClick={() => setFilter(data)} >All</button>
          <button onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button onClick={() => filterProduct("jewelery")}>Jewelary </button>
          <button onClick={() => filterProduct("electronics")}>Electronic </button>
        </div>
      </div>
      <div className="cards">
        {filter.map((item) =>
          <Card item={item} key={item.id} />
        )}
      </div>
    </div>
  )
}

export default Products