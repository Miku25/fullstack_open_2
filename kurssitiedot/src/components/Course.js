import React from 'react';

const Course = ( {name, parts} ) => {
    return (
      <div>
        <Header name = {name} />
        <Content parts = {parts} />
        <Total parts = {parts} />
      </div>
    )
}

const Header = ( {name} ) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.name} {props.exercises}</p>
        </div>
    )
}

const Content = ( {parts} ) => {
    return (
            parts.map(part => <Part key={part.id} name = {part.name} exercises = {part.exercises} />)
    )
}

const Total = (props) => {
    return (
        <div>
            <p><b>total of {(props.parts.map(value => value.exercises)).reduce((a, b) => a + b, 0)} exercises </b></p>
        </div>
    )
}

export default Course