import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import s from './detailView.module.css'

export default function DetailView () {

  const detailCrypto = useSelector((state) => state.detailCrypto)

  const [isLoading, setIsLoading] = useState(true)

  console.log(detailCrypto);
  
  useEffect(() => {
    setIsLoading(false)
    const interval = setInterval(() => {
      dispatch(getAllCryptos())
    }, 60000)

    return () => clearInterval(interval)
  }, [detailCrypto])
  
  return (
    <div className={s.detailContainer}>
      {detailCrypto.length == 0
      ? <></>
      : <img src={detailCrypto?.image.small} alt="Crypto Logo" />
      }
      {/* <div className={s.noCryptoSelected}>
        <h2>Select a crypto</h2>
      </div> */}
    </div>
  )
}

