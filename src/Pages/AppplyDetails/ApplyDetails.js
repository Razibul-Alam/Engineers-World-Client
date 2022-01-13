import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ApplyDetails = () => {
    const [apply,setApply]=useState({})
    const{applyId}=useParams()
        useEffect(()=>{
        fetch(`http://localhost:5000/singleApply/${applyId}`)
        .then(res=>res.json())
        .then(data=>setApply(data[0]))
            },[applyId])
            console.log(applyId,apply)
    return (
        <>
        <div className='row'>
        <div className='container col-lg-10'>
        <Card>
  <Card.Header>{apply?.company}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        {apply?.designation}
        {' '}
      </p>
      <footer className="blockquote-footer">
        {apply?.description} <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</div>
</div>
        </>
    );
};

export default ApplyDetails;