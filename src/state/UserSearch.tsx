import React, {useRef, useState, useEffect} from 'react'

interface UserSearchProps {

}

const users = [ 
    {name: "me", age: 20},
    {name: "anotherme", age:30},
    {name: "diditagain", age:40}
];

export const UserSearch: React.FC<UserSearchProps> = ({}) => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name:string; age:number} | undefined>();

useEffect(() => {
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus();
}, []);


    const onClick = () =>{
       const foundUser = users.find((user)=>{
        return user.name === name;});
        setUser(foundUser);
        
     
      
    }

    

        return (<div>
            <h3>User Search</h3>
            <input ref={inputRef} type="text"  value = {name} onChange = {(e) =>{setName(e.target.value)}}/>
            <button onClick = {onClick}>Find User</button>
            <div>{user && user.name}
            {user && user.age}</div>
        </div>);
}