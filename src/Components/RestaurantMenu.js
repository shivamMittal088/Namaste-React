import { useParams } from "react-router-dom";
import CardPageData from "../DATA/CardPageData";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";


const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const { Id } = useParams();
  console.log(Id);

  const restaurant = CardPageData.find((res) => {
    return (
      res.id === parseInt(Id)
    )
   
  }); // find by id

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  const { name, cuisine, rating, location, description, dishes } = restaurant;

  return (
    <div id="cardPage">
      <div id="name">
        <h2>{name}</h2>
      </div>

      <div id="items">
        <h4>Cuisine: {cuisine}</h4>
        <h4>Rating: {rating}</h4>
        <h4>Location: {location}</h4>
      </div>

      <div id="description">
        <p>{description}</p>
      </div>

      <div id="dishes">
        <h2>Dishes:</h2>
        <ul>
          {dishes.map((dish, id) => (
            <li key={id}>{dish}</li>
          ))}
        </ul>
      </div>

      <div>
        <button id="addItem"
        onClick={()=>{
          console.log("Add item to cart");
          dispatch(addItem(restaurant.dishes[0]));
        }}
        >Add</button>
      </div>
    </div>
  );
};

export default RestaurantMenu;
