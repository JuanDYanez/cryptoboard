import { useEffect } from "react"
import { useSelector } from "react-redux"
import s from './detailView.module.css'

export default function DetailView () {

  const currentPage = useSelector((state) => state.currentPage)

  useEffect(() => {
    console.log(currentPage);
    
  }, [currentPage])
  
  return (
    <div className={s.detailContainer}>
      <h1>{currentPage}</h1>
      <div className={s.noCryptoSelected}>
        <h2>Select a crypto</h2>
      </div>
    </div>
  )
}

