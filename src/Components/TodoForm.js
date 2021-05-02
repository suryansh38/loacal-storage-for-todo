import React,{useState} from "react";
import{
    Input,
    IntputGroupAddon,
    Button,
    Form,
    FormGroup,
    Container,
    InputGroup
} from "reactstrap";
import{v4} from "uuid";

const TodoForm=({add})=>
{const [todoStr,setTodoStr]=useState("");
const handlesubmit=e=>{
    e.preventDefault();
    if(todoStr==="")
    return alert("Please fill");
    const todo_x={
        todoStr,
        id :v4()
    };
    add(todo_x);

    setTodoStr("");
}


    return(
<Form onSubmit={handlesubmit}> 
    <FormGroup>
        <InputGroup>
        <Input
        type="text"
        name="todo"
        id="todo"
        placeholder="Your next Todo"
        value={todoStr}
        onChange={e => setTodoStr(e.target.value)}
        />
            <Button color="success">
                Add 
            </Button>
        </InputGroup>
    </FormGroup>
</Form>


);
};

export default TodoForm;