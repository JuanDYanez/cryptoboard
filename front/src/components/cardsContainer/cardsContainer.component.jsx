import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCryptos } from '../../redux/actions'
import CryptoCard from '../card/card.component'
import Pag from '../pagination/pagination.component'

import s from './cardsContainer.module.css'

export default function CardsContainer () {
  const cryptosPerPage = 10

  const currentPage = useSelector((state) => state.currentPage)

  const lastIndex = currentPage * cryptosPerPage
  const firstIndex = lastIndex - cryptosPerPage

  const dispatch = useDispatch();

  const allCryptos = useSelector((state) => state.allCryptos)
  
  useEffect(() => {
    dispatch(getAllCryptos())

    const interval = setInterval(() => {
      dispatch(getAllCryptos())
    }, 60000)

    return () => clearInterval(interval)
  }, [dispatch])

  return (
    <div className={s.container}>
      <div className={s.cardsContainer}>
        {allCryptos?.map((crypto) => (
          <CryptoCard crypto={crypto} key={crypto.id} />
        )).slice(firstIndex, lastIndex)}
      </div>
      <Pag className={s.paginationContainer} cryptosPerPage={cryptosPerPage}/>
    </div>
  )
}

