
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity + amount,
            }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-12 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-800">
        My Cart
      </h1>

      <p className="text-zinc-500 mt-2">
        Review your selected products.
      </p>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-zinc-700">
            Your cart is empty!
          </h2>

          <p className="text-zinc-500 mt-3">
            Add some fresh products to your cart.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 bg-gradient-to-b from-orange-400 to-orange-500 text-white px-7 py-3 rounded-lg hover:scale-105 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Cart Products */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row sm:items-center gap-5 bg-zinc-100 p-5 rounded-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 object-contain mx-auto sm:mx-0"
                />

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl font-semibold text-zinc-800">
                    {product.name}
                  </h2>

                  <p className="text-zinc-600 mt-2">
                    Price: ${product.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                    <button
                      onClick={() => updateQuantity(product.id, -1)}
                      disabled={product.quantity <= 1}
                      className="bg-white border border-zinc-300 w-9 h-9 rounded-lg text-xl disabled:opacity-40"
                    >
                      −
                    </button>

                    <span className="font-semibold">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="bg-orange-500 text-white w-9 h-9 rounded-lg text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <p className="text-lg font-bold text-orange-500">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeProduct(product.id)}
                    className="text-red-500 hover:text-red-700 mt-3"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-zinc-100 rounded-xl p-6 h-fit">
            <h2 className="text-2xl font-bold text-zinc-800">
              Order Summary
            </h2>

            <div className="flex justify-between mt-6 text-zinc-600">
              <span>Items</span>
              <span>
                {cart.reduce(
                  (total, product) => total + product.quantity,
                  0
                )}
              </span>
            </div>

            <div className="flex justify-between mt-4 text-zinc-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mt-4 text-zinc-600">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <div className="border-t border-zinc-300 mt-5 pt-5 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={() =>
                alert("Checkout feature will be added soon!")
              }
              className="w-full mt-6 bg-gradient-to-b from-orange-400 to-orange-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/"
              className="block text-center text-zinc-600 hover:text-orange-500 mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
