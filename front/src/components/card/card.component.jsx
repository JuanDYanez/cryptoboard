/* eslint-disable react/prop-types */

import { useDispatch } from 'react-redux'
import { getCryptoByID, isLoading } from '../../redux/actions';

import s from './card.module.css'

export default function CryptoCard ({crypto}) {

  const dispatch = useDispatch();

  const {
    id,
    name,
    symbol,
    image,
    current_price,
    price_change_percentage_24h,
    market_cap,
    market_cap_change_percentage_24h
  } = crypto 
  
  const roundedCurrentPrice = (Math.round(current_price * 100) / 100).toLocaleString('en-US')
  const roundedPriceChangePercentage = Math.round(price_change_percentage_24h * 100) / 100
  
  const roundedMarketCapPercentage = Math.round(market_cap_change_percentage_24h * 100) / 100

  function numberFormat(value) {
    if (value >= 1e12) {
      return (value / 1e12).toFixed(2) + 'T';
    } else if (value >= 1e9) {
      return (value / 1e9).toFixed(2) + 'B';
    } else if (value >= 1e6) {
      return (value / 1e6).toFixed(2) + 'M';
    } else if (value >= 1e3) {
      return (value / 1e3).toFixed(2) + 'K';
    } else {
      return value.toLocaleString('en-US');
    }
  }

  const onClick = (id) => {
    dispatch(getCryptoByID(id))
    dispatch(isLoading(true))
  }

  return (
    <div className={s.cardContainer} onClick={()=> onClick(id)}>
      <div className={s.cardInfo}>
        <img className={s.cardImage} src={image} alt="crypto-image" />
        <div className={s.cardTitles}>
          <p className={s.cryptoName}>{name}</p>  
          <p className={s.symbol}>{symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className={s.currentPriceData}>
        <p className={s.description}>Valor Actual</p>
        <p className={s.mainValue}>{roundedCurrentPrice} US$</p>
        <p className={roundedPriceChangePercentage > 0 ? s.percentageGreen : s.percentageRed}>
          {roundedPriceChangePercentage > 0 ? '+'+roundedPriceChangePercentage : roundedPriceChangePercentage}%
        </p>
      </div>
      <div className={s.marketCapData}>
        <p className={s.description}>Market Cap</p>
        <p className={s.mainValue}>{numberFormat(market_cap)} US$</p>
        <p className={roundedMarketCapPercentage > 0 ? s.percentageGreen : s.percentageRed}>
          {roundedMarketCapPercentage > 0 ? '+'+roundedMarketCapPercentage : roundedMarketCapPercentage}%
        </p>
      </div>
    </div>
  )
}

