import styles from './Nav1.module.css'
import amazonLogo from '../../assets/amazon-logo.jpg';
import amazonLogo2 from '../../assets/amazon-logo-2.png';
import SearchBar from './SearchBar.js'
import Cart  from './Cart.js'; 
import { useMediaQuery } from "react-responsive";
import Signin from './Signin-btn.js';

function Nav1()
{
    const isMobile = useMediaQuery({ maxWidth: 1270 });
    const isDesktop = useMediaQuery({ minWidth: 1271 });

    return (
    <>
      {isDesktop && <Nav_desktop />}
      {isMobile && <MobileNav1 />}
    </>
  );
}

function Nav_desktop()
{
    {/* --------------------------------Top-NAVBAR---------------------------------*/}
    return (
    <nav className={`${styles["navigation-desktop"]} ${styles["navigation-1"]}`}>
        <ul className= {styles["navigation-1-items"]}>
            <li className={`${styles["amazon-logo-container"]} ${styles["nav-item"]}`}>
                <a href="https://www.amazon.com/ref=nav_logo">
                    <img src={amazonLogo} alt="Amazon logo"/>
                </a>
            </li>


            <li className= {`${styles["deliver-to-country"]} ${styles["nav-item"]}`}>
                <a href="#">
                    {/*<!-- Icon Column -->*/}
                    <div id="geo-icon-div">
                        <i class="bi bi-geo-alt"></i>
                    </div>
                    <div class= {`${styles["deliver-to-country-text"]} ${styles["nav-item-text"]}`}>
                        <span>Deliver to</span>
                        <span class={`${styles["location-country"]} ${styles["navigation-1-lower-text"]}`}>Pakistan</span>
                    </div>
                </a>
            </li>

            <li>
                <SearchBar/>
            </li>


            {/*<!-- now select language drop down button FLAG + Language -->*/}
                
            <li className={`${styles["nav-item"]} dropdown`}>
                <a className={`nav-link dropdown-toggle ${styles["nav-language-dropdown-option"]}`}  href="https://www.amazon.com/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang_ais" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className={`fi fi-pk ${styles["nav-flag-icon"]}`}></span><span className={`${styles["nav-language-name"]} ${styles["navigation-1-lower-text"]}`}>UR</span>
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            
            {/*<!-- Navbar - sign and account lists -->*/}
            <li className={`${styles["nav-item"]} dropdown`}>
                <a className={`"nav-link dropdown-toggle ${styles["nav-login-dropdown-option"]}`} href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fs%3Fk%3Dnew%2Bbest%2Bseller%2Bbooks%2B2025%26language%3Den_US%26adgrpid%3D171853897646%26hvadid%3D728348585942%26hvdev%3Dc%26hvlocphy%3D1011086%26hvnetw%3Dg%26hvqmt%3Db%26hvrand%3D7456336649005945175%26hvtargid%3Dkwd-2403521395895%26hydadcr%3D19879_13561585%26mcid%3Df5c5618ac1e031cca4a948576fbb18b6%26tag%3Dhydglogoo-20%26ref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className={`d-flex flex-column nav-hello-signin-plus-acc-lists-text ${styles["nav-item-text"]}`}>
                        <span>Hello, sign in</span>
                        <span className={`nav-account-lists-text ${styles["navigation-1-lower-text"]}`}>Account & Lists</span>
                    </div>
                </a>
            </li>

            {/*<!-- Navbar - Returns and Orders -->*/}
            <li className={`${styles["nav-item"]}`}>
                <div className={`d-flex flex-column ${styles["nav-Returns-Orders-text"]} ${styles["nav-item-text"]}`}>
                    <span>Returns </span>
                    <span className={`nav-Orders-text ${styles["navigation-1-lower-text"]}`}> & Orders</span>
                </div>
            </li>
        
            {/* Cart item */}
            <li className={`${styles["nav-item"]} ${styles["nav-1-cart-item-li"]}`}>
                <div className={styles["nav-1-cart-item-div"]}>
                    <Cart/>
                    {/*<!-- Cart Text -->*/}
                    <span className={`${styles["nav-cart-text"]} ${styles["navigation-1-lower-text"]}`}>Cart</span>
                </div>
            </li>
        </ul>
    </nav>);
}


function MobileNav1() {
    return (
        <nav className={`${styles["navigation-mobile"]} ${styles["navigation-1"]}`}>
            <div className= {`container-fluid ${styles["navigation-mobile-items"]}`}>
                
                {/* First row: logo + cart */}
                <div className={`row d-flex justify-content-between align-items-center ${styles["custom-padding"]}`}>
                    <div className={`col-auto d-flex align-items-center gap-2 ${styles["mobile-logo-container"]}`}>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#sideDrawer" aria-controls="sideDrawer" aria-expanded="false" aria-label="Toggle navigation">
                            <span class= {`navbar-toggler-icon ${styles["nav-2-sideDrawer"]}`}></span>
                        </button>
                        <a href="https://www.amazon.com/ref=nav_logo">
                            <img src={amazonLogo2} alt="Amazon logo" />
                        </a>
                    </div>

                    <div className={`col-auto d-flex gap-3 ${styles["right-side-options"]}`}>
                        <div className={`${styles["signin-container"]}`}>
                            <a className="d-flex align-items-center" href='https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Famz-books%2Fstore%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'>
                                <span className={`${styles["signin-text"]}`}>Sign in ❯</span>
                                <Signin/>
                            </a>
                        </div>
                        <div className={`${styles["cart"]}`}>
                            <Cart />
                        </div>
                    </div>
                </div>

                {/* Second row: search bar */}
                <div className={`row ${styles["custom-padding"]}`}>
                    <div className={`col ${styles["mob-searchbar"]}`}>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Nav1;