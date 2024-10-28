import s from "./sidebar.module.css"

export default function SideBar () {
  return (
    <div className={s.sidebarContainer}>
      <img src="../../../assets/logo.png" alt="Logo Crypto Board" className={s.logo} />
      <h1>Sidebar</h1>
    </div>
  )
}

