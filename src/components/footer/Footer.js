import FooterNav1 from "./Footer-nav-1";
import FooterNav2 from "./Footer-nav-2";
import styles from './Footer.module.css';
function Footer()
{
    return(
        <footer>
            <FooterNav1/>
            <div className={`${styles["horizontal-line"]}`}></div>
            <FooterNav2/>
        </footer>
    )
}

export default Footer;