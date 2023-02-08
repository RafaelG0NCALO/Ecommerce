import {
  At,
  Check,
  CreditCard,
  Info,
  MapPin,
  Minus,
  Plus,
  Trash,
  User,
} from "phosphor-react";
import React from "react";

import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const frete = [
    {
      img: "https://iguatemi.com.br/marketplace/sites/marketplace/files/2020-01/fedex_logo.png",
      title: "Fedex Delivery",
      subtitle: "Delivery: 2-8 days work",
      price: "Free",
    },
    {
      img: "https://img.elo7.com.br/product/zoom/27BA07B/sedex-sedex.jpg",
      title: "Sedex Delivery",
      subtitle: "Delivery: 2-4 days work",
      price: "R$17,33",
    },
    {
      img: "https://www.tnt.com/_assets/images/tntLogo.png",
      title: "TNT Delivery",
      subtitle: "Delivery: 2-3 days work",
      price: "R$13,20",
    },
  ];

  const Tr = ({ item }) => {
    const dispatch = useDispatch();
    const deleteProduct = () => {
      dispatch(cartActions.deleteItem(item.id));
    };
    return (
      <div className="flex mb-4">
        <div className="max-w-[144px] w-full min-h-full mr-2">
          <img
            src={item.imgUrl}
            alt=""
            className="object-cover w-full h-full border border-gray-300"
          />
        </div>

        <div className="flex flex-col justify-between p-2 w-full">
          <div>
            <p className="font-semibold">{item.productName}</p>
            <h1 className="text-lg font-bold my-1">R$ {item.price}</h1>
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="flex w-24 items-center justify-between border border-gray-300 rounded-md p-1">
              <Plus size={12} className="cursor-pointer h-4 w-4" />
              {item.quantity}
              <Minus size={12} className="cursor-pointer h-4 w-4 text-black" />
            </div>
            <Trash
              onClick={deleteProduct}
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl m-auto px-2 min-h-screen flex flex-wrap">
      <div className="flex-1 w-full min-w-[300px] min-h-full p-2">
        <h1 className="font-bold text-lg">Summary Order</h1>
        <p className="w-80 text-gray-500 pb-4">
          Check your item and select your shipping for better experience
        </p>
        <div className="w-full border border-gray-300 flex-col p-2 rounded-md max-h-[340px] overflow-auto">
          {cartItems.length === 0 ? (
            <h1>No item added </h1>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <Tr key={index} item={item} />
              ))}
            </>
          )}
        </div>

        <h1 className="my-6 text-lg font-semibold">
          Avalieble Shipping Method
        </h1>

        <>
          {frete.map((frete, index) => (
            <div
              className="relative flex items-center justify-between py-2 my-2"
              key={index}
            >
              <input
                type="radio"
                className="absolute appearance-none w-full h-full border border-gray-300 rounded-md focus:border-2
            cursor-pointer
            box-border
            before:rounded-full
            before:border-gray-300
            before:border
            before:absolute
            before:w-6
            before:h-6
            before:right-5
            before:top-[39%]

            after:border
            after:rounded-full
            after:border-gray-300
            focus:after:bg-gray-600
            after:absolute
            after:w-4
            after:h-4
            after:right-6
            after:top-[44%]
           "
              />
              <div className="flex">
                <div className="w-28 overflow-hidden h-20 mx-3 p-2 border border-gray-300 rounded-md">
                  <img
                    src={frete.img}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
                <div>
                  <h1 className="text-base font-semibold whitespace-nowrap">
                    {frete.title}
                  </h1>
                  <p className="text-gray-500 text-sm">{frete.subtitle}</p>
                </div>
              </div>

              <h1 className="text-sm font-semibold mr-12">{frete.price}</h1>
            </div>
          ))}
        </>
      </div>
      <div className="justify-center items-start flex flex-1 w-full min-w-[300px] bg-[#ecf6fb] min-h-full p-4">
        <div className="w-full max-w-md sticky top-[90px]">
          <h1 className="font-bold text-lg">Payment Details</h1>
          <p className="w-80 text-gray-500 pb-4">
            Complete your purchase item by providing your payment details order.
          </p>
          <form action="">
            <div className="flex-col flex mb-3">
              <label htmlFor="" className="font-semibold">
                E-mail
              </label>
              <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden bg-white">
                <At size={22} className="text-gray-300 w-9" />
                <input type="text" className="h-10 outline-none w-full" />
                <Check className="text-gray-800 mr-2 w-5 p-1 h-5 bg-green-200 rounded-full" />
              </div>
            </div>

            <div className="flex-col flex mb-3">
              <label htmlFor="" className="font-semibold">
                Card Detail
              </label>
              <div className="flex border-2 border-gray-300 rounded-md overflow-hidden items-center bg-white">
                <CreditCard size={22} className="text-gray-300 ml-1 w-9" />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="h-10 w-full max-w-[260px] p-1 border-r-2 border-gray-300 outline-none"
                />
                <input
                  type="text"
                  className="h-10 w-full max-w-[90px] p-2 border-r-2 border-gray-300 outline-none"
                  placeholder="MM / YY"
                />
                <input
                  type="text"
                  className="h-10 w-full max-w-[50px] p-2 outline-none"
                  placeholder="CVC"
                />
              </div>
            </div>

            <div className="flex-col flex mb-3">
              <label htmlFor="" className="font-semibold">
                Name
              </label>
              <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden bg-white">
                <User size={22} className="text-gray-300 w-9" />
                <input type="text" className="h-10 outline-none w-full" />
                <Check className="text-gray-800 mr-2 w-5 p-1 h-5 bg-green-200 rounded-full" />
              </div>
            </div>

            <div className="flex-col flex">
              <label htmlFor="" className="font-semibold"></label>
              <div className="flex items-center border border-gray-300 rounded-t-lg overflow-hidden bg-white">
                <MapPin size={22} className="text-gray-300 w-9" />
                <input type="text" className="h-10 outline-none w-full" />
                <Check className="text-gray-800 mr-2 w-5 p-1 h-5 bg-green-200 rounded-full" />
              </div>
              <div className="flex relative w-full">
                <input
                  type="text"
                  className="h-10 p-2 outline-none w-full border border-gray-300 rounded-bl-lg"
                  placeholder="city"
                />
                <input
                  type="text"
                  className="h-10 p-2 outline-none w-full border border-gray-300 rounded-br-lg"
                  placeholder="Number"
                />
              </div>
            </div>
          </form>

          <div className="mt-4 flex justify-between items-center">
            <h1 className="flex items-center font-semibold gap-1">
              Subtotal
              <Info size={15} />
            </h1>
            <p>R${totalAmount}</p>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <h1 className="flex items-center font-bold">Total</h1>
            <p className="font-semibold text-lg">R${totalAmount}</p>
          </div>

          <button className="w-full flex justify-center items-center bg-black text-white h-12 rounded-md mt-4">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
