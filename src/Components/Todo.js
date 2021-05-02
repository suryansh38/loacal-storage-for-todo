import React from "react";
import {ListGroup,ListGroupItem} from "reactstrap";
import{FaCheckDouble} from "react-icons/fa";

const Todos=({ls_todo,mark_flag})=>
{
    return(
        <ListGroup className="mt-5 mb-2 items">
            {
                ls_todo.map(t=>(
                    <ListGroupItem key={t.id}>
                        {t.todoStr}
                        <span className="float-right"
                        onClick={()=>{mark_flag(t.id)}}><FaCheckDouble/></span>
                    </ListGroupItem>
                )
                )
            }
        </ListGroup>
    );
}
export default Todos;