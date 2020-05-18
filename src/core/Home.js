import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

//Home page of the store

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
    
  //Loading the products

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    //Title and description of the page
    <Base title="Home Page" description="Welcome to the Tshirt Store">
      <div className="row text-center">
        {error ? (
            <h1 className="text-dark">Somthing went wrong. Please, refresh the page</h1>          
          ): (
            <h1 className="text-dark">All the Products:</h1>

          )}
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
