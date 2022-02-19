import React from 'react';
import { useSelector } from 'react-redux';

const HiredList = () => {
    const hiredList=useSelector(state=>state.engineers.hiredList)
    console.log(hiredList)
    return (
        <div>
            <h2 className='text-center mt-5'>The Number of Hired Enginners{hiredList.length}</h2>
            {hiredList?.map(hire=>{
            return(<>
            <p className='text-primary text-center mt-3 me-4'>{hire.name}</p>
            <button className='text-danger'>X</button>
            </>)}
            
            )}
            
        </div>
    )
};

export default HiredList;