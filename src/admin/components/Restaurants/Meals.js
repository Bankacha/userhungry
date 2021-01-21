import { useEffect, useState } from "react";
import { getMeals } from "../../../api/meals";
import { Table, Button } from 'react-bootstrap';
import { CreateMeal } from "./CreateMeal";

export function Meals(props) {

    return (
        <div>
            <CreateMeal></CreateMeal>
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
                        (props.meals || []).map((m, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
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
        </div>
    )
}