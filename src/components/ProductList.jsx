import React, { useEffect, useState, useContext } from "react";
import { Input } from "./ui/input";
import Product from "./Product";
import { CartContext } from "../Pages/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  const { addToCart } = useContext(CartContext);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setProducts(json);
      setCategories(["All", ...new Set(json.map((p) => p.category))]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  let filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
  );

  if (sortOrder === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (loading) return <p className="text-center p-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error.message}</p>;

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 p-6 items-center">
        <Input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full sm:w-1/3"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/3"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category[0].toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/3"
        >
          <option value="default">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <Product
              product={product}
              key={product.id}
              onAddToCart={addToCart}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;
