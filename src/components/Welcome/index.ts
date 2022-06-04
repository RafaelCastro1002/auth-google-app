import './styles.css'

const $ = document.querySelector.bind(document)

const renderWelcomePanel = (container: HTMLElement) => {
  const userName = localStorage.getItem('userName')

  const htmlContent = `
        <div id="welcome">
            <h1>Olá, ${userName}!</h1>
            <div id="datetime-component">
              <p id="date-component"></p>
              <p id="time-component"></p>
            </div>
        </div>
    `

  container.innerHTML += htmlContent

  renderCurrentDate()
  assignEventUpdateTime()
}

const renderCurrentDate = () => {
  const currentDate = new Date()

  const dateComponent = <HTMLParagraphElement>$("#date-component")

  dateComponent.innerText = currentDate.toLocaleDateString("pt-BR")
}

const assignEventUpdateTime = () => {
  const timeComponent = <HTMLParagraphElement>$("#time-component")

  setInterval(() => {
    const now = new Date();
    const current = now.toLocaleTimeString("pt-BR");
    timeComponent.innerText = current
  }, 10)

}

export default renderWelcomePanel
