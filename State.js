
import { useState } from "react"

const State = () => {
    const [persons, setPersons] = useState([
        {name: "dan", age: "33"},
        {name: "ben", age: "12"}
    ])

const [bool, setBool] = useState(false)

const logger = () => {
    console.log("logged")
}


    const handleClick = (data) => {
        alert(data)
    }

    return (
        <div>
            <person
                name={persons[0].name}
                age={persons[0].age}
                magic={handleClick}
            />
        </div>
    )
}

const Person = (props) => {
    return (
        <div>
            <h1 onClick={props.magic}>{props.name}</h1>
            <h2 onClick={props.magic}>{props.age}</h2>
        </div>
    )
}