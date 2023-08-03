import Link from 'next/link'
import relabIconYellow from '../../public/uploads/relabIconYellow.svg'
import linkedinIcon from '../../public/uploads/linkedinIcon.png'
import twitterIcon from '../../public/uploads/twitterIcon.png'
import instagramIcon from '../../public/uploads/instagramIcon.png'
/*
import labIcon from '../../public/uploads/labIcon.png'
import jesuitasIcon from '../../public/uploads/jesuitasIcon.png'
import unisinosIcon from '../../public/uploads/unisinosIcon.png'
<img src='../../public/uploads/labIcon.png'/>
                    <img src='../../public/uploads/jesuitasIcon.png'/>
                    <img src='../../public/uploads/unisinosIcon.png'/>
*/

import styles from '../styles/footer.module.css'

function Footer() {
    return (
        <div className={styles['footer']}>
            <div className={styles['top-part']}>
                <a href='/'target="_blank" rel="noreferrer" className={styles['relab-icon']}>
                    <img src={relabIconYellow}></img>
                </a>
                
                <div className={styles['contact-socials']}>
                    <span className={styles['contact-text']}>
                        Entre em contato:
                    </span>
                    <br/>
                    <div className={styles['social-icons']}>
                        <a className={styles['linkedin-icon']} href='https://www.linkedin.com/company/relabjr/' target="_blank">
                            
                        </a>
                        <a className={styles['twitter-icon']} href='https://www.youtube.com/watch?v=z7rxl5KsPjs' target="_blank">
                        
                        </a>
                        <a className={styles['instagram-icon']} href='https://www.instagram.com/relabjrconsultoria/' target="_blank">
                            
                        </a>

                    </div>
                </div>
            </div>


            
            <div className={styles['bottom-part']}>
                <div className={styles['membership-icons']}>
                    <a className={styles['lab-icon']} href='https://unisinos.br/lab/' target='_blank'>

                    </a>
                    <a className={styles['jesuitas-icon']} href='https://jesuitasbrasil.org.br' target='_blank'>

                    </a>
                    <a className={styles['unisinos-icon']} href='https://www.unisinos.br/' target='_blank'>
                        
                    </a>
                </div>

                <span className={styles['footer-text']}>
                <text className={styles['footer-text']}>© Copyright Confederação Brasileira de Empresas Juniores 2019.</text>
                <text className={styles['footer-text']}>Todos os direitos reservados.</text>
                </span>
            </div>
        </div>
    )
}
export default Footer;