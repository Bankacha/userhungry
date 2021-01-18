import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getRestaurants } from "../../../../api/restaurants";
import '../../../../styles/restaurants.css'

export function Restaurants() {

    const [restaurants, setRestaurants] = useState({});

   
    useEffect(() => {
        getRestaurants().then(r => {
            setRestaurants(r.data)
            console.log(restaurants)
        })
    }, [])

    const list = Object.values(restaurants);
    return (
        <div>
            <h1 className="text-center">Restaurants</h1>
            <Table className='bg-info mt-3'>
                <thead className='thead'>
                    <tr>
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map( (r,i) => {
                            return (
                                <tr key={i}>
                                    <th>{r.name}</th>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}