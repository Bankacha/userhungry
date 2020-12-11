import { Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { IoIosEye } from "react-icons/io";
import {PollPreview} from '../views/Poll/PollPreview';
import {Link} from 'react-router-dom'
import {Http} from '../../../api/api'


export function PollsListTable() {

    const polls = useSelector(p => p.polls.polls)

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Poll name</th>
                    <th>Is active?</th>
                    <th>Created</th>
                    <th style={{width: '30px'}}>View</th>
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
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}