import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { IoIosEye } from "react-icons/io";
import {Link} from 'react-router-dom'
//import { pollDelete } from '../../../api/polls';
import { deletePoll } from '../../../store/actions/pollsAction';


export function PollsListTable() {

    const polls = useSelector(p => p.polls.polls)
    const dispatch = useDispatch();

    // useEffect((id) => {
    //     deletePoll ? 
    //     pollDelete(id).then(r => r.data.filter( r.id !== id)) : null
    // }, []);


    

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th></th>
                    <th>Poll name</th>
                    <th>Is active?</th>
                    <th>Created</th>
                    <th style={{width: '30px'}}>View</th>
                    <th>Delete</th>
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
                                <td><Link to={`polls/${p.id}`}><IoIosEye size='1.5em' type='button'/></Link></td>
                                <td><Button onClick={ ()=> dispatch(deletePoll(p.id))}>del</Button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}