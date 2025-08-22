import styles from './Nav2.module.css';
import { useMediaQuery } from "react-responsive";
import chevronDown from '../../assets/down-chevron.png';
import locationIcon from '../../assets/white-locatio-icon.png';

function Nav2() 
{
    const isMobile = useMediaQuery({ maxWidth: 1270 });
    const isDesktop = useMediaQuery({ minWidth: 1271 });
    return (
    <>
      {isDesktop && <Nav2_desktop />}
      {isMobile && <Nav2_Mobile />}
    </>
  );
}

function Nav2_desktop()
{
    {/*----------------------------------------Main Nabar----------------------------------*/}
    return (
        <nav className={`${styles["nav-2"]}`}  data-bs-theme="dark">

            {/*---------- All Button ----------*/}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#sideDrawer" aria-controls="sideDrawer" aria-expanded="false" aria-label="Toggle navigation">
                <span className={`navbar-toggler-icon ${styles["nav-2-sideDrawer"]}`}></span>
                <span className={`${styles["nav-2-sideDrawer-text"]}`}>All</span>
            </button>

            <ul className={styles["nav-2-ul"]}>
                 {/*---------- Today's Deals link ----------*/}
                <li className="nav-2-ul-items">
                    <a href="https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb">Today's Deals</a>
                </li>

                {/*---------- Prime Video link ----------*/}
                <li className="nav-2-ul-items">
                    <a href="https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video">Prime Video</a>
                </li>

                {/*---------- Registry link ----------*/}
                <li className="nav-2-ul-items">
                    <a href="https://www.amazon.com/registries?ref_=nav_cs_registry&ref_=nav_cs_registry">Registry</a>
                </li>

                {/*---------- Gift Cards link ----------*/}
                <li className="nav-2-ul-items">
                    <a href="https://www.amazon.com/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc">Gift Cards</a>
                </li>

                {/*---------- Customer Service link ---------*/}
                <li className="nav-2-ul-items">
                    <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice">Customer Service</a>
                </li>

                {/*---------- Sell link ----------*/}
                <li classNameName="nav-2-ul-items">
                    <a href="https://www.amazon.com/b/?_encoding=UTF8&ld=AZUSSOA-sell&node=12766669011&ref_=nav_cs_sell">Sell</a>
                </li>
            </ul>
        </nav>
    );
}


function Nav2_Mobile()
{
    return (
        <div className={`${styles["nav-2-mobile-container"]} d-flex gap-1`}>
            <div className={`${styles["location-icon-container"]}`}>
                <img src={locationIcon} alt="location icon" />
            </div>
            <span className={`${styles["nav-2-mobile-text"]}`}>
                Deliver to 
                    <span className={`${styles["nav-2-mobile-country-name"]}`}>
                        Pakistan
                    </span>
            </span>
            <span className={`${styles["chevron-down-icon-container"]}`}>
                <img src={chevronDown} alt=">" />
            </span>
        </div>
    );
}
export default Nav2;