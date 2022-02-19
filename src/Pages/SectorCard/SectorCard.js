import React from 'react';
import { Col,Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addFavorites } from '../Redux-feature/EngineersSlice';

const SectorCard = ({user}) => {
    const{id,name,email}=user;
    const dispatch=useDispatch()
    return (
        <Col className=''>
      <Card>
        {/* <Card.Img variant="top" src={img} className='img-fluid' /> */}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {email}
          </Card.Text>
          <Card.Text>
           {name}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
          </div>
          <div className='d-flex justify-content-between'>
          <button className='btn btn-success'onClick={()=>dispatch(addFavorites(user))}>Add To favorite</button>
          <Link to={`apply/${id}`}>Apply</Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default SectorCard;