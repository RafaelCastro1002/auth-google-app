import './styles.css'

const $ = document.querySelector.bind(document)

const renderDetailsUser = (container: HTMLElement) => {
  const userName = localStorage.getItem('userName')
  const phoneNumber = localStorage.getItem('phoneNumber')
  const email = localStorage.getItem('email')
  const userPhotoUrl = localStorage.getItem('photoURL')


  const htmlContent = `
        <div id="details-user-card">
          <h2 id="title-detais-user-card">Detalhes do usuário</h2>
          <img id="user-photo-details" src="${userPhotoUrl}">
          <div id="user-details-info">
            <p> <span class="descrition-field-detais-info">Nome: </span> ${userName} </p>
            <p> <span class="descrition-field-detais-info">Email: </span> ${email}</p>
            ${phoneNumber !== "" ? `<p> <span class="descrition-field-detais-info">Telefone: </span> ${phoneNumber || "-- \\ --"}</p>` : ""}
          </div>
        </div>
    `

  container.innerHTML += htmlContent
}


export default renderDetailsUser
