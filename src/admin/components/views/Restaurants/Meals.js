import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMeals } from "../../../../api/meals";
import { Table, Button } from 'react-bootstrap';

export function Meals() {

    const { restID } = useParams();

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getMeals(restID).then(r => {
            setMeals(r.data)
            console.log(meals)
        })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const list = Object.values(meals);
    console.log(meals)

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mealame</th>
                    <th>Is available?</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((m, i) => {
                        return (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{m.name}</td>
                                <td>{m.available === true ? 'yes' : 'no'}</td>
                                <td>{`${m.price} $`}</td>
                                <td><Button></Button></td>
                                <td><Button></Button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>


    )
}