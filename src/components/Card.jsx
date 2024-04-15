import './card.css'
import Logo from '../assets/images/icon-star.svg'
import Accordion from './Accordion'

function Card() {
  return (
    <article className='card'>
        <header className='logo'>
        <img src={Logo} alt="Logo" />
        <h1>FAQs</h1>
        </header>
        <section>
        <Accordion />
        </section>
       
    </article>
  )
}

export default Card