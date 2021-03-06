import React,{useEffect,useState} from 'react';
import './HomeSidebar.css'
import { Button,ListGroup } from 'react-bootstrap';
import {
    Switch,
      Route,
      Link,
      useRouteMatch
    } from "react-router-dom";
const HomeSidebar = ({selectSector}) => {
  const[sectors,setSectors]=useState([])
  useEffect(()=>{
    fetch('../TestData.json')
    .then(res=>res.json())
    .then(data=>setSectors(data))
        },[])
    

    return (
        <div className='mt-5'>
           <ListGroup>
  {sectors?.map(sector=><ListGroup.Item onClick={()=>{selectSector('g')}}>{sector.title}</ListGroup.Item>)}
</ListGroup>
          </div>
              
    );
};

export default HomeSidebar;