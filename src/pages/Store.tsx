import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <div className="flex justify-center items-center p-5">
        <div className="flex flex-wrap gap-4 justify-center">
          {storeItems.map((item) => (
            <div className="">
              <StoreItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
