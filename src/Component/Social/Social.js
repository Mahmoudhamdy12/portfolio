import { TiSocialLinkedin,TiSocialGithub, TiSocialFacebook } from 'react-icons/ti';
import { RiWhatsappFill } from 'react-icons/ri';
import './Social.css'
const Social = () => {
    return (
        <div className="social main">
            <a href='https://www.linkedin.com/in/mahmoud-hamdy-72331a1a1' target='blank'><TiSocialLinkedin className="linkedin"/></a>
            <a href='https://github.com/Mahmoudhamdy12' target='blank'><TiSocialGithub className="github"/></a>
            <a href='https://www.facebook.com/mahmoudhamdy53' target='blank'><TiSocialFacebook className="facebook"/></a>
            <a href='https://wa.me/01210284098' target='blank'><RiWhatsappFill className="whatsapp"/></a>
        </div>
    )
}

export default Social