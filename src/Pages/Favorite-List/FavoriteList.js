import React, { useEffect,useState } from 'react';
import { Table } from 'react-bootstrap';

const FavoriteList = () => {
  const[favorite,setFavorite]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/getfavorite')
    .then(res=>res.json())
    .then(data=>setFavorite(data))
        },[]) 
const removeFromFavoriteList=(id)=>{
const remainList=favorite?.filter(singleFavorite=>id!==singleFavorite.id)
console.log(remainList)
}
useEffect(()=>{
removeFromFavoriteList()
},[])
    return (
        <div className='container'>
             {favorite?.length}
            <Table bordered hover responsive variant='dark'>
      <thead>
        <tr>
          <th>SL</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      
     {favorite?.map((singleFavorite,index)=><tr key={index}>
      <td>{index+1}</td>
      <td>{singleFavorite.company}</td>
      <td>{singleFavorite.designation}</td>
      
     
      <td><button className='btn btn-danger'onClick={()=>{removeFromFavoriteList(singleFavorite._id)}}>Remove</button></td>
      
    </tr>)}
     

  
</tbody>
</Table>
        </div>
    );
};

export default FavoriteList;