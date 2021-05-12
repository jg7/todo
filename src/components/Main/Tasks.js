import React from 'react'
import '../../app.scss'
import { Navbar, Nav } from 'react-bootstrap'
import Task from './Task'
import { useState } from 'react'
import tasksData from './tasksData'
import { Form, FormControl, Button } from 'react-bootstrap'

const Tasks = () => {
    const [tasks, setTasks] = useState(tasksData)
    const [newTask, setNewTask] = useState("")
    const [newSearch, setSearchTask] = useState("")

    const markComplete = (id) => {
        let newTasks = [...tasks]
        newTasks = newTasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task
        })
        setTasks(newTasks)
        console.log("changes", id)
    }

    const addTask = () => {
        let newId = 0
        tasks.map(task => {
            if (task.id > newId) {
                newId = task.id
            }
            return task
        })
        newId = newId + 1
        const obj = { 'id': newId, 'text': newTask, 'completed': false };
        tasks.push(obj);
        console.log(obj)
        setNewTask("")
    }

    const searchTask = () => {
        /* tasks.map(task => {
            if (task.id > newId) {
                newId = task.id
            }
            return task
        }) */
        console.log(newSearch)
        setSearchTask("")
    }

    const clearTasks = () => {
        const newTasks = tasks.filter(item => item.id === 0);
        setTasks(newTasks)
        console.log("clear test")
    }

    const markAllComplete = () => {
        let newTasks = [...tasks]
        newTasks = newTasks.map(task => {
            task.completed = true
            return task
        })
        setTasks(newTasks)
        console.log("markAll test")
    }

    const markAllInComplete = () => {
        let newTasks = [...tasks]
        newTasks = newTasks.map(task => {
            task.completed = false
            return task
        })
        setTasks(newTasks)
        console.log("markAllIn test")
    }

    const taskComponents = tasks.map(item => {
        if (!item.completed) {
            return (
                <Task key={item.id} task={item} markComplete={markComplete} />
            )
        }
        return null
    })

    const taskHideComponents = tasks.map(item => {
        if (item.completed) {
            return (
                <Task key={item.id} task={item} markComplete={markComplete} />
            )
        }
        return null
    })

    return (
        <div>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Add To-Do"
                    className="mr-sm-2"
                    value={newTask}
                    onInput={e => {
                        setNewTask(e.target.value)
                        // return addTask()
                    }}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            addTask()
                        }
                    }} />
                <Button variant="primary" onClick={addTask}>Add</Button>
                <hr />
                <FormControl
                    type="text"
                    placeholder="Search To-Do"
                    className="mr-sm-2"
                    onInput={e => {
                        setSearchTask(e.target.value)
                        // return addTask()
                    }} />
                <Button variant="info" onClick={searchTask}>Search</Button>
            </Form>
            <hr />
            <Form>
                <div key='custom-checkbox' className="mb-3">
                    {taskComponents}
                    {taskHideComponents}
                </div>
            </Form>
            <div>
                <Navbar variant="dark" className="navbar1">
                    <Nav className="mr-auto">
                        <Nav.Link className="Nav-tab1" onClick={clearTasks}>Clear all tasks</Nav.Link>
                        <Nav.Link className="Nav-tab1" onClick={markAllComplete}>Mark all completed</Nav.Link>
                        <Nav.Link className="Nav-tab1" onClick={markAllInComplete}>Unmark all completed</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </div>
    )

}

export default Tasks
