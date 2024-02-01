//import { useEffect, useState } from "react";

import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false);
  //const [resInfo, setResInfo] = useState(null);

  //const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowIndex();
    //setShowItem(!showItem);
    // console.log("Clicked");
  };
  return (
    <div
      className="bg-gray-50 shadow-lg p-4 w-6/12 mx-auto my-2"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <h1 className="font-bold">
          {data.title} ({data.itemCards.length})
        </h1>
        <div>▼</div>
      </div>
      {showItem && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
