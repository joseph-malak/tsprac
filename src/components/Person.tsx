import {FC, useState} from 'react';



export interface IPerson{
        name?: string;
        age?: number;
        email?:string
        getName?: (name:string) =>string;
}

const Person = (props: IPerson) =>{//or const Person = ({name,email,age}:IPerson) =>
return(
    <div>
        {props.age}
        {props.email}
        {props.name}
        {props.getName}
        <input placeholder='write down country'>wow</input>
       
    </div>
)
}

export default Person;