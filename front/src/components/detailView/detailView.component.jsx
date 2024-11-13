import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import s from './detailView.module.css'
import { isLoading } from "../../redux/actions";

export default function DetailView () {

  const detailCrypto = useSelector((state) => state.detailCrypto)
  const stateIsLoading = useSelector((state) => state.isLoading)

  const dispatch = useDispatch()
  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(isLoading(false))
    }, 1000)

    return () => clearTimeout(timeOut)
  }, [detailCrypto, dispatch])
  
  return (
    <div className={s.detailContainer}>
      {detailCrypto.length == 0
        ? <h2 className={s.noCryptoSelected}>Select a crypto</h2>
        : stateIsLoading 
          ? <img src="../../assets/loading.gif" alt="Loading" className={s.loadingGif}/>
          : <img src={detailCrypto?.image.small} alt="Crypto Logo" />
      }
    </div>
  )
}

