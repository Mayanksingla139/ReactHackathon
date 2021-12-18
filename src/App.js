import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PeopleToFollow from "./PeopleToFollow";
import Youtube from "./Youtube";
import Blog from "./Blog";
import Error from './Error';
import Home from './Home';
import Communities from './Communities';
import ClubHouseRoom from './ClubHouseRoom';
import {Route, Routes} from "react-router-dom";
import Books from './Books';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/peopletofollow" element={<PeopleToFollow/>} />
        <Route path="/youtube" element={<Youtube/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/clubroom" element={<ClubHouseRoom/>} />
        <Route path="/community" element={<Communities/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App
