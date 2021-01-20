import { useContext, useState } from "react";
import { TodosContext } from "../App";

const CourseCard = (props) => {
  const {dispatch} = useContext(TodosContext)
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    marginRight : "20px",
    width: '100%',
    padding: '5px',
    color: '#444',
    border: '1px solid #1890ff',
    textAlign: "center",
  }
  return (
    <>
      <p>Course card</p>
      {

      props.todos.map((course)=>{
          return (
            <>
              <tr style = {styles}>
                <td>
                <p>Subject : {course.name}</p>
                <p>Grade : {course.grade}</p>
                <p>Credit : {course.cred}</p>
                </td>
                <td>
                  <button onClick ={()=>{
                    dispatch({
                      type : "DELETE_TODO",
                      payload : course.id
                    })
                  }}>X</button>
                </td>
              </tr>
            </>
          )
        })
        }
    </>
  );
};

export default CourseCard;