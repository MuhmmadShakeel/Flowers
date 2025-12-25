import React from 'react'
import ShopHeader from '../components/Shop/ShopHeader'
import Banquent from '../components/Shop/Banquent'
import PerDayService from '../components/Shop/PerDayService'
import FlowerPacking from '../components/Shop/FlowerPacking'
import EventService from '../components/Shop/EventService'
function Shop() {
  return (
    <div className='overflow-hidden'>
      <ShopHeader />
      <Banquent />
      <PerDayService />
      <FlowerPacking/>
      <EventService/>
    </div>
  )
}

export default Shop
