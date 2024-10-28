// import { useState } from 'react'
import './App.css'
import SideBar from './components/sidebar/sidebar.component'
import DetailView from './components/detailView/detailView.component'
import CardsContainer from './components/cardsContainer/CardsContainer.component'
import Pagination from './components/pagination/pagination.component'

function App() {

  return (
    <>
      <SideBar></SideBar>
      <DetailView></DetailView>
      <CardsContainer/>
      <Pagination></Pagination>
    </>
  )
}

export default App
