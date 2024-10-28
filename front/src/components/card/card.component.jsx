/* eslint-disable react/prop-types */
import s from './card.module.css'

export default function CryptoCard ({crypto}) {
  const {id, name, symbol, image} = crypto 
  
  return (
    <div className={s.cardContainer}>
      <img className={s.cardImage} src={image} alt="crypto-image" />
      <div className={s.cardInfo}>
        <p>{name}</p>  
        <p className={s.symbol}>{symbol.toUpperCase()}</p>
      </div>
    </div>
  )
}

