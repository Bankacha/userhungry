import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRestaurant } from "../../../../api/restaurants";
import { EditRestaurant } from "../../Restaurants/EditRestaurant";
import { Meals } from "../../../components/Restaurants/Meals";
import { Button } from "react-bootstrap";

export function Restaurant() {
    const { restId } = useParams();

    const [restaurant, setRestaurant] = useState();
    const [error, setError] = useState(false);
    const [showMeals, setShowMeals] = useState(false);

    const loadRestaurant = () => {
        getRestaurant(restId)
            .then(({ data }) => setRestaurant(data))
            .catch((err) => setError(true))
    }

    useEffect(() => {
        loadRestaurant();
    }, [])

    const handleClick = () => {
        if(showMeals === false) {
            setShowMeals(true)
        } else {
            setShowMeals(false)
        }
    }

    return (
        <div>
            {
                restaurant && !error ? (
                    <div>
                        <h3 className="mb-5 text-center restaurantName">Restaurant: <strong>{restaurant.name}</strong></h3>

                        <EditRestaurant onEdited={() => loadRestaurant()} restaurant={restaurant}></EditRestaurant>
                        <hr />
                        <Button onClick={handleClick} className='w-100 bg-dark mb-3'>MEALS</Button> 
                        {
                            showMeals === true ? (
                                <Meals loadRestaurant={loadRestaurant} id={restaurant.id} meals={restaurant.meals}></Meals>
                            ) : ''
                        }
                    </div>
                ) : 'There is no restaurant with this id.'
            }
        </div>
    )
}