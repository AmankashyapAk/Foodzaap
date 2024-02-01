import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ItemList({ items }) {
  console.log("aa", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  console.log("aa", items[0].card.info.name);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left"
        >
          <div className="flex flex-row-reverse justify-between h-28">
            <div className="w-3/12 relative">
              <img
                className="w-3/4 h-3/4"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.card.info.imageId
                }
              />
              <button
                className="absolute left-1/4 top-12 z-10 p-2 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>

            <div className="flex flex-col py-2 w-9/12 object-cover">
              <span>{item.card.info.name}</span>
              <span>
                Rs-{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
