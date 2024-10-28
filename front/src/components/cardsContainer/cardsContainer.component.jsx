import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCryptos, getCryptoByName } from '../../redux/actions'

import CryptoCard from '../card/card.component'

import s from './cardsContainer.module.css'

export default function CardsContainer () {

  const dispatch = useDispatch();

  const allCryptos = useSelector((state) => state.allCryptos)

  useEffect(() => {
    dispatch(getAllCryptos())
  }, [dispatch])
  
  return (
    <div className={s.container}>
      {allCryptos?.map((crypto) => (
        <CryptoCard crypto={crypto} key={crypto.id} />
      ))}
    </div>
  )
}

