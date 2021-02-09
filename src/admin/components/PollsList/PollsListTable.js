import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { IoIosEye , IoMdTrash} from "react-icons/io";
import { Link } from 'react-router-dom'
import { deletePoll } from '../../../store/actions/pollsAction';


export function PollsListTable() {

    const polls = useSelector(p => p.polls.polls)
    const dispatch = useDispatch();

    return (
        <Table striped bordered hover variant="dark" size="sm">
            <thead className='thead'>
                <tr>
                    <th></th>
                    <th>Poll name</th>
                    <th>Is active?</th>
                    <th>Created</th>
                    <th>View</th>
                    <th className='text-center'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    polls.map((p, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{p.label}</td>
                                <td>{p.active === true ? 'active' : 'no longer active'}</td>
                                <td>{p.created.split('T')[0]}</td>
                                <td className='text-center'><Link to={`polls/${p.id}`}><IoIosEye size='1.5em' color="grey" type='button'/></Link></td>
                                <td className='text-center'><IoMdTrash onClick={ ()=> dispatch(deletePoll(p.id))} size='1.5em' color="grey"></IoMdTrash></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}