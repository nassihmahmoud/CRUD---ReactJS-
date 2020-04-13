import React from 'react'

function About(props) {
    return (
        <div>
            <h2>About</h2>
            {props.match.params.id}
            {props.match.params.name}
        </div>
    )
}
export default About
