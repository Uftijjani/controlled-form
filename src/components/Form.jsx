import React, { useState } from "react";
import Home from "./Home";

const Form = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [AddUser, setAddUser] = useState([]);
  const [display, setdisplay] = useState(false);
  const handler = () => {
    setdisplay(!display);
  };
  const deleteUser = (id) => {
    const NewUsers = AddUser.filter((user) => user.id !== id);
    setAddUser(NewUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: new Date().getTime().toString(),
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
    };
    setAddUser([...AddUser, newUser]);
    // console.log(newUser);
    console.log(AddUser);
    setInput({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    handler();
  };
  const hndleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  if (display) {
    return <Home AddUser={AddUser} handler={handler} deleteUser={deleteUser} />;
  }

  return (
    <>
      <div className="form-container">
        <h1>Call of duty</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="First Name*"
                name="firstName"
                required
                value={input.firstName}
                onChange={(e) => hndleChange(e)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="Last Name*"
                name="lastName"
                required
                value={input.lastName}
                onChange={(e) => hndleChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <input
              type="email"
              placeholder="Email Address*"
              value={input.email}
              name="email"
              onChange={(e) => hndleChange(e)}
            />
          </div>
          <div className="row">
            <input
              type="password"
              placeholder="Set A Password*"
              name="password"
              value={input.password}
              onChange={(e) => hndleChange(e)}
            />
          </div>
          <div className="row">
            <button>Get Started</button>
          </div>
        </form>
      </div>
      {/* {display && (
        <Home AddUser={AddUser} handler={handler} deleteUser={deleteUser} />
      )} */}
    </>
  );
};

export default Form;
