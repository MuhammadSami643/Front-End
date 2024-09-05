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

  return (
    <>
      <h1>This Is Products Page</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt="product" />
            <h2>Price :{product.price}</h2>
            <p>Title :{product.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
