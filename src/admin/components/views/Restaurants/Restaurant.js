import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRestaurant } from "../../../../api/restaurants";
import { EditRestaurant } from "../../Restaurants/EditRestaurant";
import { Meals } from "../../../components/Restaurants/Meals";

export function Restaurant() {
    const { restId } = useParams();

    const [restaurant, setRestaurant] = useState();
    const [error, setError] = useState(false);

    const loadRestaurant = () => {
        getRestaurant(restId)
            .then(({ data }) => setRestaurant(data))
            .catch((err) => setError(true))
    }

    useEffect(() => {
        loadRestaurant();
    }, [])


    return (
        <div>
            {
                restaurant && !error ? (
                    <div>
                        <h3 className="mb-5">Restaurant: {restaurant.name}</h3>

                        <EditRestaurant onEdited={() => loadRestaurant()} restaurant={restaurant}></EditRestaurant>
                        <hr />
                        <h3 className="my-4">Meals:</h3>
                        <Meals meals={restaurant.meals}></Meals>
                    </div>
                ) : 'There is no restaurant with this id.'
            }
        </div>
    )
}