import RestaurantCard from "./RestaurantCard";
import { restaurants } from "./constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(restaurants);
  const [filteredlistofRestaurants, setfilteredlistofRestaurants] =
    useState(restaurants);
  const [searchText, setsearchText] = useState("");
  useState(restaurants);
  const styleCard = {
    // backgroundColor: "#f0f0f0",
  };

  useEffect(() => {
    fetchData();
    // logger();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9691256&lng=77.6274796&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const finalData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(
      //.card?.card?.gridElements
      //.infoWithStyle.restaurants
      //.card.card
      // .gridElements
      //.infoWithStyle.restaurants
      "AA",
      finalData
    );
    setlistofRestaurants(finalData);
    setfilteredlistofRestaurants(finalData);
  };
  // logger = () => {
  //   console.log("KFC");
  // };

  return (
    <div className="body">
      <div className="filter-btn flex items-center px-3">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-300 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText);
              });
              //setlistofRestaurants(filteredRestaurant);
              setfilteredlistofRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-btn">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listofRestaurants.filter((res) => {
                return res.info.avgRating > 4;
              });
              // setlistofRestaurants(filteredList);
              setfilteredlistofRestaurants(filteredList);

              console.log(filteredList);
            }}
          >
            Top Rating
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap px-7" style={styleCard}>
        {filteredlistofRestaurants &&
          filteredlistofRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        {/* <RestaurantCard resData={restaurants[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
