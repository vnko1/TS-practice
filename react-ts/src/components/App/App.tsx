import React from "react";

import { User } from "./App.types";
import { UserEl } from "../User";
import "./App.css";

type Props = { user: User };

function App({ user }: Props) {
  return (
    <div className="App">
      <UserEl
        name={user.name}
        age={user.age}
        initialValue="sds"
        onSave={(value) => {
          console.log(value);
        }}
      >
        <div>gello</div>
      </UserEl>
    </div>
  );
}

export default App;
