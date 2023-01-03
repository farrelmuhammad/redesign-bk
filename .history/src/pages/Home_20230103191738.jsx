import React, { useEffect, useState } from 'react'
import Content from '../components/Home/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import supabase from '../utils/clients'

const Home = () => {
  // const [menus, setMenus] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchMenus();
  // }, []);

  // async function fetchMenus() {
  //   let { data, error } = await supabase.from("menus").select("*");
  //   // setMenus(data);
  //   console.log(data);
  // }
  return (
    <>
    <Navbar />
    <Header />
    <Content />
    <Footer />
    </>
  )
}

export default Home