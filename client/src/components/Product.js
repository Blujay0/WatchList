import { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
const Product = () => {
  const [error, setError] = useState(null)
  const [product, setProduct] = useState({})
  const { productId } = useParams();

  useEffect(() => {
    // console.log(productId);
    fetch(`/products/${productId}`)
    .then(resp => {
      if (resp.ok) { // if response is one of 200 status code
        resp.json().then(setProduct); // set product state to response which is a single product
      } else {
        resp.json().then(error => setError(error.message));
      }
    })
    .catch(console.error)
    
  }, [productId])
  
  const { id, maker, model, product_name, product_price, product_description, image } = product

  return (
    <Product id={id}>
      <div>
        <h1>{maker} {product_name}</h1>
        <img src={image} alt={maker} />
        <h3>Model: {model}</h3>
        <h3>Price: {product_price}</h3>
        <p>{product_description}</p>
      </div>
    </Product>
  )
} 

export default Product;