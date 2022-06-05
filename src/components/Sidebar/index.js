import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
<h1 className='h1-tags'>Ravi Aswanth</h1>
            {/* <img className="sub-logo" src={LogoSubtitle} alt="Ravi Aswanth" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

        </nav>
        <ul>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/ravi-aswanth-ramesh-94b79643/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="white" />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/Raviaswanth"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar