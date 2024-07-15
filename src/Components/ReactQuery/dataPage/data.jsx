import React from "react";

import { useMutation, useQuery, useQueryClient } from "react-query";
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteData, fetchDatas, updatePost } from "../Apis/apis";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function QueryData() {
  const { data: users, isLoading, error } = useQuery("users", fetchDatas);
  console.log("hello im from  data page", users);
  const queryClient = useQueryClient();


  // for deleting data from dbjson api
  const deleteMutation = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
    console.log(id);
  };

  const updateMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleUpadte = (updatedPost) => {
    const { id, ...updatedpost } = updatedPost;
    updateMutation.mutate({ id, updatedPost });
    console.log(updatedpost);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="app text-center">
      {users && users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="my-3">
            <Link
              to={`/views/${user.id}`}
              className="text-dark mt-2 d-block text-center"
            >
              {user.title}
            </Link>
            <Button
              as="a"
              variant="success"
              className="ml-3"
              onClick={() => handleUpadte(user)}
            >
              Update
            </Button>

            <Button
              variant="danger"
              className="ml-3"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </Button>
          </div>
        ))
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
}

export default QueryData;
