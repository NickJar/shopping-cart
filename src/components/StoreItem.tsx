import { useShoppingCart } from "../context/ShoppingCartContext";
import { FormatCurrency } from "../utilities/FormatCurrency";

type storeItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
};

export function StoreItem({
  id,
  name,
  price,
  description,
  imgUrl,
}: storeItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity;

  return (
    <div className="card card-compact w-96 object-cover bg-white shadow-xl">
      <figure className="h-60">
        <img src={imgUrl} className="object-cover" alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-black">{name}</h2>
          <h2 className="card-title text-black">{FormatCurrency(price)}</h2>
        </div>
        <p className="text-black">{description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary text-white"
            onClick={() => increaseCartQuantity(id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
