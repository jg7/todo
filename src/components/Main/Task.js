import React from 'react'
import Form from 'react-bootstrap/Form'
import '../../app.scss'

const Task = (props) => {
    const completedStyle = {
        color: "#888888",
        // fontFamily: 'monospace',
        fontStyle: 'italic',
        textDecoration: 'line-through dotted blue'
    }

    const incompletedStyle = {
        color: "black",
        fontStyle: 'none',
        textDecoration: 'none',
    }

    return (
        <div>
            <Form.Check
                custom type='checkbox'
                id={props.task.id}
                label={props.task.text || "default"}
                style={props.task.completed ? completedStyle : incompletedStyle}
                onChange={() => {
                    props.markComplete(props.task.id)
                }}
                checked={props.task.completed}
            />
            
            <hr />
        </div>
    )
}

export default Task
