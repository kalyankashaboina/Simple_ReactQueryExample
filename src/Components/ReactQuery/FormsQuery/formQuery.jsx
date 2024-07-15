import React, { useState } from "react";
import {useMutation ,useQueryClient } from "react-query";
import { addData, updatePost } from "../Apis/apis";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

function FormQuery() {
  const [user, setUser] = useState({
    id: "",
    title: "",
    views: "",
  });

  const queryClient =useQueryClient()
  const [selectedItem, setSelectedItem] = useState(null); 

  const addItemMutation = useMutation(addData, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const updateMutation=useMutation({
    mutationFn:updatePost,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["users"]})
      setSelectedItem(null);
    }
  })
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
};
console.log(user);



const handleUpdate = (item) => {
  setSelectedItem(item); 
  setUser(item); 
};

const handleSubmit = (e) => {
    e.preventDefault()

    if(selectedItem){
      updateMutation.mutate(user)
    }
      else{
      addItemMutation.mutate(user)
      ;}

    
    setUser({ id: "", title: "", views: "" });
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>user id</label>
          <input
            type="text"
            name="id"
            value={user.id}
            placeholder="enetr id"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label>TITLE</label>
          <input
            type="text"
            name="title"
            value={user.title}
            placeholder="enetr title"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label>ENTER vIEWS</label>
          <input
            type="text"
            name="views"
            value={user.views}
            placeholder="enetr views"
            required
            onChange={handleChange}
          />
        </div>

        <input type="submit" value={"add"} />
      </form>
    </div>
  );
}

export default FormQuery;
