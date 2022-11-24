import "./home.scss"
import React from 'react'
import { AcUnit } from "@material-ui/icons"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import List from "../../components/list/List"
import Featured from "../../components/featured/Featured"
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type={"movies"} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home