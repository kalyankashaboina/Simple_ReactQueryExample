
import React from 'react'
import { fetchDatas } from '../Apis/apis';
import { useQuery } from 'react-query';

function DummmyPro() {
    const { data: users, isLoading, error } = useQuery("users", fetchDatas);
    console.log("hello im from  data page", users);
  return (<>
    <div>DummmyPro</div>



    </>
  )
}

export default DummmyPro