import './styles.css'
import logoutIcon from "../../../img/logout-icon.png"

const renderHeader = (container: HTMLElement) => {
  const userPhotoUrl = localStorage.getItem('photoURL')

  const htmlContent = `
      <div class="header">
        <a href="/" class="logo">Firebase Auth</a>
        <div class="header-right">
          <a class="${selectActiveMenuOption('/')}" href="/">Home</a>
          <a class="${selectActiveMenuOption('/details.html')}" href="/details.html">Detalhes</a>
          <img id="user-photo-header" src="${userPhotoUrl}">
          <a id="logout-header" href="logout.html">
            <img id="icon-logout-header" src="${logoutIcon}">
          </a>
        </div>
      </div>
    `

  container.innerHTML = htmlContent
}

const selectActiveMenuOption = (urlOption: string) => {
  const url = window.location.pathname

  return url === urlOption ? "active" : ""
}


export default renderHeader
