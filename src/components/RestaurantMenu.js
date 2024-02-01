import Shimmer from "../utils/shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // [resInfo, setresInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log("resinfo", resInfo);
  //if (resInfo != null) {
  const data = resInfo?.data?.cards[0]?.card?.card?.info;
  const { name, cusine } = data;
  console.log("ddd", data);
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      ?.card;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("cat", categories);
  //   console.log("DDD", itemCards[10].card.info.name);
  //}
  //const {} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl py-6">{data.name}</h1>
      <p className="font-bold text-xl">{data.cuisines.join(", ")}</p>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
