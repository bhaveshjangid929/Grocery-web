
import ProductList from "../ProductList/ProductList";

function Wishlist({ likedProducts = [] }) {
  const wishlistProducts = ProductList.filter((product) =>
    likedProducts.some((id) => Number(id) === Number(product.id))
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Wishlist ❤️</h1>

      {wishlistProducts.length === 0 ? (
        <p>No products liked yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="bg-zinc-100 p-4 rounded-xl">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-contain"
              />
              <h2 className="text-xl font-semibold text-center mt-3">
                {product.name}
              </h2>
              <p className="text-center font-bold">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
