import SideBar from '../../components/sidebar/sidebar.component'
import DetailView from '../../components/detailView/detailView.component'
import CardsContainer from '../../components/cardsContainer/cardsContainer.component'

import s from './home.module.css'

function Home() {

  return (
    <div className={s.mainContainer}>
      <SideBar></SideBar>
      <CardsContainer/>
      <DetailView></DetailView>
    </div>
  )
}

export default Home