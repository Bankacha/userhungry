import { useParams } from "react-router-dom"

export function PollVote() {

    const { pollId } = useParams();

    // Use effect to fetch poll data;

    return (
        <h1>Poll Vote Page for Poll with id: {pollId}</h1>
    )
}