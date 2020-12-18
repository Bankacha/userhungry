import { IoIosArrowForward, IoIosClose } from "react-icons/io";
import { useState } from "react";

export function RestaurantItem(props) {

    const [hovered, setHovered] = useState(false);

    return (
        <li style={{ cursor: 'pointer' }}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={props.onClick}
            className="justify-content-between shadow-sm bg-light my-2 p-2 rounded d-flex">

            {props.title}

            <span>
                {
                    props.type === 'add' ? <IoIosArrowForward /> : ''
                }
                {
                    props.type === 'delete' && hovered ? <IoIosClose /> : ''
                }
            </span>

        </li>
    )
}