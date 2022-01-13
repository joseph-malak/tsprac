import { Component, ReactNode } from "react";



interface UserSearchProps{
    users:{
        name:string;
        age:number;
    }[]
}

interface UserSearchState{
    name:string;
    user: {name: string; age:number} | undefined;
}

export class UserSearch  extends Component{

// state: UserSearchState ={
//     name:''
//     user: undefined
// };

//     render() {
//         this.state.name
//     }
// }
}
