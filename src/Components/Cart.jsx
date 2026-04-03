import { useDispatch, useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { removeitem } from "../Features/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart.cart);

  const subtotal = Cart.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  return (
    <div className="h-screen bg-center bg-[url(/group.png)] bg-cover flex items-center justify-center">
      <div className="w-[97%] h-[90vh] bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg text-white text-lg font-semibold flex flex-col">

        <div className="flex justify-between">
          <h1 className="text-4xl p-4 font-['Orbitron']">SHOPPING CART</h1>
          <h1 className="text-4xl p-4 font-sans">PRICE</h1>
        </div>
        <hr />

        <div className="flex flex-col gap-4 overflow-y-auto px-6 py-4">
          {Cart.length > 0 ? (
            Cart.map((dip) => (
              <div
                key={dip.id}
                className="flex items-center gap-4 p-4 bg-transparent rounded-lg border-b border-white/30"
              >
                <img
                  className="h-[300px] w-[500px] rounded-lg object-cover"
                  src={dip.image}
                  alt={dip.Title}
                />

                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h1 className="text-2xl font-['Orbitron']">{dip.Title}</h1>
                    <p className="font-sans">{dip.Dis}...</p>
                    <p className="text-[12px]">Eligible for FREE Shipping</p>
                    <p>&copy;vector.pvt</p>
                  </div>

                  <div className="flex gap-6 mt-2">
                    <p className="text-lg">Quantity: {dip.quantity}</p>
                    <p className="text-lg">Price: ₹{(dip.price || 0) * dip.quantity}</p>
                  </div>
                </div>

                <div className="max-h-min w-[150px] mt-3 pt-1 text-center bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg justify-center text-white text-lg font-semibold">
                  <button onClick={() => dispatch(removeitem(dip.id))}>
                    <MdDeleteOutline className="text-2xl hover:scale-150 active:scale-100 transition-transform" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <img src="abandoned-cart.png" alt="cart" className="h-[400px] w-[400px]" />
              <p className="text-center font-[orbitron] text-6xl">OOPS! Your cart is empty!</p>
            </div>
          )}
        </div>

        <div className="h-[50px] w-full text-4xl text-right p-[4px_10px_10px_10px] border-t border-white/30">
          <p>SUBTOTAL: ₹{subtotal}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
