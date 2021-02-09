import { RestaurantsList } from '../../../admin/components/PollPreview/RestaurantsList'
import { getPoll } from '../../../api/polls'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


export function Results() {

    const { pollId } = useParams()

    const [restaurants, setRestaurants] = useState([])
    const [votes, setVotes] = useState([])

    useEffect(() => {
        getPoll(pollId).then((r) => {
            setRestaurants(r.data.restaurants);
            setVotes(r.data.votes)
        })
    }, [pollId])

    console.log(restaurants)

    return (
        <div>
            <h2 className='text-center'>You can see current results below</h2>
            <RestaurantsList votes={votes} restaurants={restaurants}></RestaurantsList>
        </div>
    )

}