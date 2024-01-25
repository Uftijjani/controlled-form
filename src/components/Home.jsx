import React from "react";
import { FaUser } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";

const Home = ({ AddUser, handler, deleteUser }) => {
  return (
    <div className="home">
      <IoArrowBackCircle className="backBtn" onClick={handler} />
      <div className="home-container">
        {/* <img src="./bg-1.png" alt="" /> */}
        <h2 className="welcome">Welcome on Board</h2>
        {AddUser.map((user) => {
          const { id, firstName, lastName, email } = user;
          return (
            <div className="user-container" key={id}>
              <FaUser className="avatar" />
              <div className="content">
                <div className="title">
                  <h4 className="name">{firstName}</h4>
                  <h4 className="name">{lastName}</h4>
                </div>
                <p>{email}</p>
              </div>
              <FaTrash className="deleteBtn" onClick={() => deleteUser(id)} />
            </div>
          );
        })}
        <p className="number">
          No. of New Account <span>{AddUser.length}</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
