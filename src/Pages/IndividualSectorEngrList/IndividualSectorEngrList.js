import React, { useEffect,useState} from 'react';
import { Card,Col,Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const IndividualSectorEngrList = ({favoriteList,setFavoriteList}) => {
    const{sectorId}=useParams()
    const [sectors,setSectors]=useState([])
        useEffect(()=>{
        fetch('../TestData.json')
        .then(res=>res.json())
        .then(data=>setSectors(data))
            },[])
            const singleSector=sectors.find(singleData=>sectorId==singleData.id)
            const addToFavorite=(id)=>{
              const newList=[...favoriteList,id]
              setFavoriteList(newList)
              }
            console.log(favoriteList)
    return (
        <div className='container'>
          {singleSector?.name}
          <Row xs={1} md={3} className="g-4 my-5">
            {singleSector?.engineers?.map(engineer=><Col key={engineer.id}>
      <Card>
        <Card.Body>
          <Card.Title>{engineer.title}</Card.Title>
          <Card.Text>
           {engineer.designation}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
          </div>
          <div className='d-flex justify-content-between'>
          <button className='btn btn-success'onClick={()=>{addToFavorite(engineer)}}>Add To favorite</button>
          <Link to={`apply/${engineer.id}`}>Apply</Link>
          </div>
        </Card.Body>
      </Card>
    </Col>)}
    </Row>
        </div>
    );
};

export default IndividualSectorEngrList;