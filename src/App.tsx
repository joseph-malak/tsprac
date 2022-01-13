
import React, {useState} from "react";
import Person from "./components/Person";
import { TextField } from "./components/TextField";
import EventComponent from "./events/EventComponents";
import Posts from "./Posts";
import GuestList from "./state/GuestList";
import { UserSearch } from "./state/UserSearch";






const App: React.FC = () => {

  return (
    <div className="App">
   { /*<TextField text="hello" person = {{firstName:"spongebob",lastName:"squarepants" }} /> */}
    <UserSearch />
    </div>
  );
}

export default App;
