import { useEffect, useState } from "react";
import { getMeals } from "../../../api/meals";
import { Table, Button } from 'react-bootstrap';
import { CreateMeal } from "./CreateMeal";
import { IoMdTrash } from "react-icons/io";
import { deleteMeal } from '../../../api/meals'


export function Meals(props) {

    const [err, setErr] = useState(false);

    const handleDelete = (mealId) => {
        deleteMeal(props.id, mealId)
            .then(r => console.log(r.data))
            .catch(() => setErr(true))

        props.loadRestaurant()
    }

    return (
        <div>
            <CreateMeal loadRestaurant={props.loadRestaurant} id={props.id}></CreateMeal>
            <Table className='mt-3' striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Meal name</th>
                        <th>Is available?</th>
                        <th>Price</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (props.meals || []).map((m, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{m.name}</td>
                                    <td>{m.available === true ? 'yes' : 'no'}</td>
                                    <td>{`${m.price} $`}</td>
                                    <td className='text-center'><IoMdTrash onClick={() => handleDelete(m.id)} color='grey' size='1.5em'></IoMdTrash></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}