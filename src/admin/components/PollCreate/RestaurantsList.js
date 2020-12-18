import { BiRestaurant } from "react-icons/bi";
import { RestaurantItem } from './RestaurantItem';

export function RestaurantsList(props) {

    const listStyle = {
        overflow: 'hidden',
        height: '320px',
        overflowY: 'scroll'
    }

    return (
        <div className="p-3 rounded bg-info">
            {props.restaurants.length ? <p className="text-light">{props.title}</p> : ''}
            {
                props.restaurants.length
                    ? (
                        <ul style={listStyle} className="pr-1">
                            {
                                props.restaurants.map((r, i) => {
                                    return (
                                        <RestaurantItem type={props.type} key={i} onClick={() => props.onItemClicked(r)} title={r.name}></RestaurantItem>
                                    )
                                })
                            }
                        </ul>
                    )
                    : (
                        <div>
                            <h1 className="text-center text-light"><BiRestaurant /></h1>
                            <p className="text-center text-light">There is no restaurants</p>
                        </div>
                    )
            }
        </div >

    )
}