import { Bag, Minus, Plus, Trash } from "phosphor-react";
import * as Popover from "@radix-ui/react-popover";
import { cartActions } from "../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function ButtonCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger className="p-1">
          <Bag size={24} />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="relative z-50 w-80 top-3 border border-slate-200 flex-col bg-white p-1 shadow-lg rounded-sm">
            <button className="w-full text-center text-lg border-b border-zinc-300 h-8 mb-1 rounded-sm pl-2 text-zinc-500 hover:text-black">
              Cart Shopping
            </button>

            {cartItems.length === 0 ? (
              <h1>No item added </h1>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <Tr item={item} key={index} />
                ))}
              </>
            )}

            <h1 className="text-center py-2 text-lg font-semibold">
              Total Amount: R${totalAmount}
            </h1>

            <button className="flex items-center gap-1 justify-center rounded-md w-full h-10 text-white bg-black">
              Finalizar <Bag />
            </button>

            <Popover.Arrow className="fill-zinc-300" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <div className="flex justify-between mb-4">
      <div className="flex gap-1">
        <div className="w-24 h-24 flex rounded-md overflow-hidden p-1 border border-zinc200">
          <img src={item.imgUrl} alt="" className="w-full object-cover" />
        </div>

        <div className="flex-col">
          <h1 className="font-bold">{item.productName}</h1>
          <p className="font-semibold">R${item.price}</p>

          <div className="flex w-28 mt-3 items-center justify-between gap-1 border border-zinc-300 rounded-md p-1">
            <Plus size={12} className="cursor-pointer h-4 w-4" />x
            {item.quantity}
            <Minus size={12} className="cursor-pointer h-4 w-4 text-black" />
          </div>
        </div>
      </div>

      <div
        onClick={deleteProduct}
        className="px-2 mb-1 flex items-end cursor-pointer"
      >
        <Trash size={24} />
      </div>
    </div>
  );
};

export default ButtonCart;
