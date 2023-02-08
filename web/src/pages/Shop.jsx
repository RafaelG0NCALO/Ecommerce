import { Info, MagnifyingGlass } from "phosphor-react";
import React, { useState, useEffect } from "react";
import CommonSection from "../components/commonSection/CommonSection";

import products from "../assets/data/products";
import ProductList from "../components/CardProduct/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [filterPrice, setFilterPrice] = useState("");

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "All") {
      setProductsData(products);
    }
  };

  const handleFilterPrice = (e) => {
    const filterValue = e.target.value;
    setFilterPrice(filterValue);
  };

  const HandleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  useEffect(() => {
    console.log("mudou");

    if (filterPrice.length > 0) {
      const productsArray = productsData.map((product) => product);
      if (filterPrice === "ascending") {
        productsArray.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (filterPrice === "descending") {
        productsArray.sort((a, b) => {
          return b.price - a.price;
        });
      }

      setProductsData(productsArray);
    } else {
      setProductsData(products);
    }
  }, [filterPrice]);

  return (
    <div className="w-full max-w-7xl m-auto px-2 min-h-screen">
      <CommonSection title="Products" />

      <div className="flex max-md:flex-wrap items-center gap-3 my-8">
        <div className="w-full relative flex items-center overflow-hidden border-2 border-[#0f172a] rounded-sm ">
          <input
            onChange={HandleSearch}
            type="text"
            placeholder="Search"
            className="w-full h-8 p-2 outline-none"
          />
          <MagnifyingGlass className="cursor-pointer absolute right-0 w-9 h-9 p-2 bg-[#0f172a] text-white" />
        </div>

        <div className="w-full flex gap-2 text-center">
          <div className="w-full text-center flex items-center">
            <select
              onChange={handleFilter}
              className="bg-[#0f172a] text-white h-9 w-full text-center pb-1 px-2 flex items-center"
            >
              <option>Filter By Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="All">All</option>
            </select>
          </div>
          <div className="w-full text-center flex items-center">
            <select
              onChange={handleFilterPrice}
              className="bg-[#0f172a] text-white h-9 w-full text-center pb-1 px-2"
            >
              <option className="rounded-none" value="">
                Sort By
              </option>
              <option value="ascending" className="text-center">
                Ascending
              </option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {productsData.length === 0 ? (
            <span className="absolute top-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col justify-center items-center">
                <Info size={32} className="text-red-500" />
                <p className="text-2xl whitespace-nowrap">
                  Produto não encontrado
                </p>
              </div>
            </span>
          ) : (
            <ProductList data={productsData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
