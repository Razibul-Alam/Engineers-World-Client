import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SectorCard from '../SectorCard/SectorCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../Redux-feature/EngineersSlice';

const Alljobs = ({category}) => {
    const [jobs,setJobs]=useState([])  
      let users = useSelector((state) =>state.engineers.allEngineers)
      console.log(users)
  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUser())
// fetch(`http://localhost:5000/alljobs?search=${category}`)
// .then(res=>res.json())
// .then(data=>setJobs(data))

    },[])

    return (
        <div className='container my-5'>
            <Row xs={1} md={2} className="g-4 mt-3">
           {users?.map(user=><SectorCard user={user} key={user.id}/>)}
        </Row>
        </div>
    );
};

export default Alljobs;