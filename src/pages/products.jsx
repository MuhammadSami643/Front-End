import axios from "axios";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    // Create a new array excluding the product with the given id
    const updatedProducts = products.filter((product) => product.id !== id);
    // Update the state with the new array
    setProducts(updatedProducts);
  };
  return (
    <>
      <h1>This Is Products Page</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt="product" />
            <h2>Price :{product.price}</h2>
            <p>Title :{product.title}</p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
