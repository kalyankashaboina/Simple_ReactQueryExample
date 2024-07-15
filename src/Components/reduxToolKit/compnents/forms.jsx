import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/todoSlice"
function FormAction() {
  const [id, setId] = useState("");
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch=useDispatch()

  const forms = { id, user, phone, password };
//   const handleChange = (e) => {
//     [e.target.name] = e.target.value;
//   };

  console.log(forms);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodos())
    setId("");
    setUser("");
    setPhone("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>USER ID</label>
          <input
            type="text"
            name="id"
            value={id}
            placeholder="please enter id"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>

        <div>
          <label>USER NAME</label>
          <input
            type="text"
            name="user"
            value={user}
            placeholder="please enter username"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>

        <div>
          <label>USER PHONE</label>
          <input
            type="number"
            name="phone"
            value={phone}
            placeholder="please enter your phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div>
          <label>USER PASSWORD</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="please enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <input type="submit" value={"add"} />
      </form>
    </div>
  );
}

export default FormAction;
