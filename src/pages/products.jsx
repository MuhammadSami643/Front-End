import axios from "axios";
import { useEffect, useState } from "react";
import "../css/product.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]); // All products
  const [searchedProducts, setSearchedProducts] = useState([]); // Filtered products

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data); // Update state with the fetched products
      setSearchedProducts(response.data); // Initialize searchedProducts with all products
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    // Create a new array excluding the product with the given id
    const updatedProducts = products.filter((product) => product.id !== id);
    // Update both states with the new array
    setProducts(updatedProducts);
    setSearchedProducts(updatedProducts);
  };

  const searchHandler = (e) => {
    const userInput = e.target.value;
    const searchResult = products.filter((item) => {
      if (item.title.toLowerCase().includes(userInput.toLowerCase())) {
        return true;
      }
    });
    console.log(searchResult);
    setSearchedProducts(searchResult);
  };

  return (
    <>
      <h1>This Is Products Page</h1>
      <input onChange={searchHandler} placeholder="Search through products" />
      <div className="products-container">
        {searchedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>Price: ${product.price}</h2>
            <p>Title: {product.title}</p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
