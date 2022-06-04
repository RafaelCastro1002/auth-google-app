import renderHeader from './components/Header'
import renderWelcomePanel from './components/Welcome'
import './styles.css'

const app = <HTMLDivElement>document.getElementById('app')
const token = localStorage.getItem('token')

if (token) {
  renderHeader(app)
  renderWelcomePanel(app)
} else {
  location.href = 'login.html'
}
