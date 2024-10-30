import { useDispatch, useSelector } from "react-redux";
import s from "./pagination.module.css";
import Pagination from '@mui/material/Pagination'

import { specificPage } from "../../redux/actions.js";

function Pag() {

  const dispatch = useDispatch()
  const cryptosPerPage = 10;

  const currentPage = useSelector((state) => state.currentPage)
  const allCryptos = useSelector((state) => state.allCryptos)
  const totalCryptos = allCryptos.length;
  const totalPages = totalCryptos / cryptosPerPage;
  
  const onSpecificPage = (event, value) => {
    dispatch(specificPage(value))
  }

  return (
    <div className={s.pagination}>
      <Pagination count={totalPages} page={currentPage} onChange={onSpecificPage}/>
    </div>
  );
}

export default Pag;
