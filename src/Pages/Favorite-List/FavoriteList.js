import React, { useEffect,useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { removeFavorite } from '../Redux-feature/EngineersSlice';

const FavoriteList = () => {
  // useEffect(()=>{
  //   fetch('http://localhost:5000/getfavorite')
  //   .then(res=>res.json())
  //   .then(data=>setFavorite(data))
  //       },[]) 
// const removeFromFavoriteList=(id)=>{
// const remainList=favorite?.filter(singleFavorite=>id!==singleFavorite.id)
// console.log(remainList)
// }
// useEffect(()=>{
// removeFromFavoriteList()
const dispatch=useDispatch()
// },[])
const favoriteEngineers=useSelector(state=>state.engineers.favoriteList)
console.log(favoriteEngineers)
    return (
        <div className='container'>
             {favoriteEngineers?.length}
            <Table bordered hover responsive variant='dark'>
      <thead>
        <tr>
          <th>SL</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      
     {favoriteEngineers?.map((singleFavorite,index)=><tr key={index}>
      <td>{index+1}</td>
      <td>{singleFavorite?.name}</td>
      <td>{singleFavorite?.email}</td>
      <td>{singleFavorite?.phone}</td>
      <td><button className='btn btn-danger'onClick={()=>dispatch(removeFavorite(singleFavorite?.id))}>Remove</button></td>
      
    </tr>)}
     

  
</tbody>
</Table>
        </div>
    );
};

export default FavoriteList;