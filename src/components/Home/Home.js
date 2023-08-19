import React from 'react'
import Header from '../Header/Header'
import OurService from '../OurService/OurService'
import ReliableService from '../OurService/ReliableService'


const Home = () => {
  return (
    <div className='pt-[100px] z-10 pl-10 pr-10'>
        <Header />
        <ReliableService />
        <OurService />
    </div>
  )
}

export default Home