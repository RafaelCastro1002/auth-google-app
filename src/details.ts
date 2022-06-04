import renderDetailsUser from './components/DetailsUser'
import renderHeader from './components/Header'
import './styles.css'

const app = <HTMLDivElement>document.getElementById('app')
const token = localStorage.getItem('token')

if (token) {
  renderHeader(app)
  renderDetailsUser(app)
} else {
  location.href = 'login.html'
}
