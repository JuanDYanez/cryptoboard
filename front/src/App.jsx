import { useState } from 'react'
import './App.css'
import SideBar from './components/sidebar/sidebar.component'
import DetailView from './components/detailView/detailView.component'
import CardsContainer from './components/cardsContainer/CardsContainer.component'
import CryptoCard from './components/card/card.component'

function App() {

  return (
    <>
      <SideBar></SideBar>
      <DetailView></DetailView>
      <CardsContainer></CardsContainer>
      <CryptoCard></CryptoCard>
    </>
  )
}

export default App
