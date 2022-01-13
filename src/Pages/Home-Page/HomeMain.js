import React,{useState} from 'react';
import Alljobs from '../SectorList/Alljobs'
import HomeSidebar from './Home-Sidebar/HomeSidebar';
import './Home-Sidebar/HomeSidebar.css'
const HomeMain = () => {
    const[category,setCategory]=useState('m')
    const selectSector =(category)=>{
        setCategory(category)
            }
    return (
       
        <div className='row'>
            <div className='col-lg-3 sidebar'>
          <HomeSidebar selectSector={selectSector}/>
            </div>
            <div className='col-lg-9'>
            <Alljobs category={category}/>
            </div>
        </div>
        
    );
};

export default HomeMain;