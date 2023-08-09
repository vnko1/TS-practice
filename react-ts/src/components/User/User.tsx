import React, { useEffect, useRef, useState, FormEvent } from "react";

type Props = {
  name: string;
  age: number;
  children: React.ReactElement;
  initialValue: string;
  onSave: (value: string) => void;
};
type User = { name: string; age: number };
type Status = "loading" | "error";

const UserEl = ({ name, age, children, initialValue, onSave }: Props) => {
  const [state, setState] = useState<number>(2);
  // const [user, setUser] = useState({ name: "Asa", age: 20 } as User);
  const [user] = useState<User>({ name: "Asa", age: 20 });
  const [isLoading] = useState<boolean>(false);
  const [status] = useState<Status>("loading");
  const [value, setValue] = useState(initialValue);

  // const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

  const countRef = useRef<number>(1);

  // setState(4);
  // countRef.current += 1;

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault(); // запобігаємо стандартній поведінці форми (відправці форми)

  //   console.log("Форма була відправлена!");
  // };
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
      <p>{`State is ${state}`}</p>
      <p>{`State is ${user.name}`}</p>
      {children}
      {/* <form onSubmit={handleSubmit}>
        <button type="submit">Відправити</button>
      </form> */}
    </div>
  );
};

// const UserEl: React.FC<Props> = ({ name, age }) => (
//   <div>
//     <p>{`User name is ${name}`}</p>
//     <p>{`User age is ${age}`}</p>
//   </div>
// );

// class UserEl extends React.Component<Props> {
//   render() {
//     const { name, age } = this.props;
//     return (
//       <div>
//         <p>{`User name is ${name}`}</p>
//         <p>{`User age is ${age}`}</p>
//       </div>
//     );
//   }
// }

export { UserEl };
