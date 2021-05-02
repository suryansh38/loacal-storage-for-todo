import React,{useState,useEffect} from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todos from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
const App=()=>{
    const [x,setX]=useState([]);
        useEffect(()=>{
            const local=localStorage.getItem("x");
            console.log({local});
            if(local)
            {setX(JSON.parse(local));}
        }
        ,[])
        const f1=async y=>{
            setX([...x,y]);
        }
        useEffect(()=>{
        localStorage.setItem("x",JSON.stringify(x));
        } ,[x]);
       const f2=id=>{
           setX(x.filter(t=>t.id!==id));
       }   
    
    return(
        <Container fluid>
            <h1>
                todo working with local storage
            </h1>
            <Todos ls_todo={x} mark_flag={f2} />
            <TodoForm add={f1}/>
        </Container>
    )
}
export default App;