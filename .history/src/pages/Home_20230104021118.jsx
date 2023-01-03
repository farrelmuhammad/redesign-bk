import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Content from '../components/Home/Content'
import Header from '../components/Home/Header'
import TextScroller from '../components/Home/TextScroller'
import Navbar from '../components/Navbar'
import supabase from '../utils/supabase/clients'

const Home = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenus();
  }, []);

  async function fetchMenus() {
    let { data, error } = await supabase.from("menus").select("*");
    setLoading(false)
    setMenus(data);
  }

  return (
    <>
    <Navbar />
    <Header />
    {/* <TextScroller /> */}
    <Content data={menus} loading={loading} />
    <Footer />
    </>
  )
}

export default Home