import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SectorCard from '../SectorCard/SectorCard';
import { useSelector, useDispatch } from 'react-redux';

const Alljobs = ({category}) => {
    const [jobs,setJobs]=useState([])  
    //   let info = useSelector((state) =>state.jobs.jobs)
//   const dispatch = useDispatch()

    useEffect(()=>{
fetch(`http://localhost:5000/alljobs?search=${category}`)
.then(res=>res.json())
.then(data=>setJobs(data))
    },[category])

    return (
        <div className='container my-5'>
            <Row xs={1} md={2} className="g-4 mt-3">
           {jobs?.map(job=><SectorCard job={job} key={job._id}/>)}
        </Row>
        </div>
    );
};

export default Alljobs;