import logo from './logo.svg';
import './App.css';
import { Counter } from './Pages/Counter';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Alljobs from './Pages/SectorList/Alljobs';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom"
import HomeMain from './Pages/Home-Page/HomeMain';
import IndividualSectorEngrList from './Pages/IndividualSectorEngrList/IndividualSectorEngrList';
import { useState } from 'react';
import FavoriteList from './Pages/Favorite-List/FavoriteList';
import ApplyDetails from './Pages/AppplyDetails/ApplyDetails';
import JobPost from './Pages/Job-Post/JobPost';
import AuthProvider from './AuthProvider/AuthProvider';

function App() {
  const [favoriteList,setFavoriteList]=useState([])
  return (
    <AuthProvider>
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<HomeMain/>}/>
        <Route path="home" element={<HomeMain/>}/>
        <Route path="post-job" element={<JobPost/>}/>
        <Route path="favorite" element={<FavoriteList favoriteList={favoriteList} setFavoriteList={setFavoriteList}/>}/>
        <Route path="sector/:sectorId" element={<IndividualSectorEngrList  favoriteList={favoriteList} setFavoriteList={setFavoriteList}/>} />
        <Route path="/apply/:applyId" element={<ApplyDetails/>} />
      </Routes>
      <Footer/>
      </Router>
      </AuthProvider>
    
  );
}

export default App;
