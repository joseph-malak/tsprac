import React, {useState} from 'react'


interface Person{
    firstName: string;
    lastName: string;
}

interface Props {
    text?: string;
    ok?:boolean;
    i?:number;
    fn?: () => number;
    person:Person;
}

interface TextNode{
    text:string;
}


export const TextField: React.FC<Props> = () => {
 
const [count, setCount] = useState<TextNode>({text:"bob"});

setCount({text:"square"})

    return (
        <div>
            <input />
        </div>
    )
}


