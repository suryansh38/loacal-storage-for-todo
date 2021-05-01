import React from "react";
import {ListGroup,ListGroupItem} from "reactstrap";
import{FaCheckDouble} from "react-icons/fa";

const todos=({ls_todo,Mmark_flag})=>
{
    return(
        <ListGroup className="mt-5 mb-2 items">
            {
                ls_todo.map(t=>(
                    <ListGroupItem key={t.id}>
                        {t.todoStr}
                        <span className="float-right"
                        onClick={()=>{markComplete(t.id)}}><FaCheckDouble/></span>
                    </ListGroupItem>
                )
                )
            }
        </ListGroup>
    );
}
export default todos;