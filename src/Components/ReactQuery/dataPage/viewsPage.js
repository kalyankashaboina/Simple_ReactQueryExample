import React from "react";
// import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import { fetchData } from "../Apis/apis";
import { useQuery } from "react-query";

function ViewsPage() {
  const { id } = useParams();
  console.log(id);
  const { data,isLoading,error } = useQuery({ queryKey: ["users", id], queryFn: fetchData });
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && (
        <>
          <p>ids : {data.id}</p>
          <h2>Title: {data.title}</h2>
        </>
      )}
    </div>
  );
}

export default ViewsPage;
