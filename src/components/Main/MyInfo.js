import React from 'react'
import Tasks from './Tasks'
import '../../app.scss';

const MyInfo = () => {
    return (
        <div className="Main-content">
            <h1>Welcome to React</h1>
            <p>Its a new begining to great stuff ahead.</p>
            <div className="Task-box">
                <Tasks />
            </div>
        </div>
    )
}

export default MyInfo
