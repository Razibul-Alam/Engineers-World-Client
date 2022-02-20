import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeHire } from '../Redux-feature/EngineersSlice';
import { Table } from 'react-bootstrap';

const HiredList = () => {
    const hiredList=useSelector(state=>state.engineers.hiredList)
    console.log(hiredList)
    const dispatch=useDispatch()
    return (
        <div className='container'>
      <h4 className='text-center mt-3 mb-2'>The Number of Hired Engineers {hiredList?.length}</h4> 
       {hiredList.length>0&&<Table
        bordered hover responsive variant='light'>
 <thead>
   <tr>
     <th>Name</th>
     <th>Action</th>
   </tr>
 </thead>
 <tbody>

 
{hiredList?.map((hire,index)=><tr key={index}>
 <td>{hire?.name}</td>
 <td><button className='btn btn-danger'onClick={()=>dispatch(removeHire(hire?.id))}>Remove</button></td>
 
</tr>)}



</tbody>
</Table>}
   </div>
    )
};

export default HiredList;