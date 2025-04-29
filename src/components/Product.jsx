import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Make sure the import path is correct

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-2"
            />
            <CardTitle className="text-base">{product.title}</CardTitle>
            <CardDescription>{product.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm line-clamp-3">{product.description}</p>
          </CardContent>
          <CardFooter className="justify-between">
            <span className="font-semibold text-green-600">${product.price}</span>
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Product;
