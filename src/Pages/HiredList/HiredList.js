import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeHire } from '../Redux-feature/EngineersSlice';

const HiredList = () => {
    const hiredList=useSelector(state=>state.engineers.hiredList)
    console.log(hiredList)
    const dispatch=useDispatch()
    return (
        <div>
            <h3 className='text-center mt-5'>The Number of Hired Enginners {hiredList.length}</h3>
            {hiredList?.map(hire=>{
            return(<>
           <div className='d-flex justify-content-center p-3 mt-4'>
           <h6 className='text-primary text-decoration-none'>{hire.name}</h6>
            <button onClick={()=>dispatch(removeHire(hire.id))} className='text-light bg-danger ms-3'>Delete</button>
           </div>
            </>)}
            
            )}
            
        </div>
    )
};

export default HiredList;