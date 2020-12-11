import { ListGroup } from 'react-bootstrap';


export function RestaurantsList(props) {


    const countVotes = (restId) => {
        let count = 0;
        for(let vote of props.votes) {
            if(restId === vote.restaurantId) {
                count += 1
            }
        }
        return count;
    }


    return (
        <div>
            <h3 className='my-4'>Restaurants</h3>
            <ListGroup>
                {
                    props.restaurants.map((r, i) => {
                        return (

                            <ListGroup.Item key={i}>{r.name} - {countVotes(r.id)} votes</ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>

    )
}