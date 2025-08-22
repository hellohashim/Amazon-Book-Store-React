import styles from './SubNav.module.css';
import BooksLogo from '../../assets/Subnav_BooksLogo.svg';
import { useMediaQuery } from "react-responsive";
import downChevron from '../../assets/black-down-chevron.png';

function SubNav() 
{
    const isMobile = useMediaQuery({ maxWidth: 1270 });
    const isDesktop = useMediaQuery({ minWidth: 1271 });
    return (
    <>
      {isDesktop && <SubNav_desktop />}
      {isMobile && <SubNav_Mobile />}
    </>
  );
}

function SubNav_desktop()
{
    {/*--------------------------------------------Sub Nabar----------------------------------*/}
    return (
    
         <nav className={`${styles["nav-3"]}`}>
                <ul className={`${styles["nav-3-ul"]}`}>
                    {/*---------- books svg ---------->*/}
                    <li className={`nav-3-ul-items ${styles["books-svg"]}`}>
                        <a href="index.html"><img src={BooksLogo} alt="Subnav_BooksLogo" /></a>
                    </li>
                
                    {/*--------- Categories Dropdown ----------*/}
                    <li className={styles["nav-3-ul-items"]}>
                        <div className={`nav-link dropdown-toggle ${styles["nav-3-dropdown-option"]}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="nav-3-dropdown-element">Categories</span>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">option1</a></li>
                            </ul>
                        </div>
                    </li>

                    {/*---------- New & Trending Dropdown ----------*/}
                    <li className={styles["nav-3-ul-items"]}>
                        <div className={`nav-link dropdown-toggle ${styles["nav-3-dropdown-option"]}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="nav-3-dropdown-element">New & Trending</span>
                            
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">option1</a></li>
                            </ul>
                        </div>
                    </li>

                    {/*---------- Deals & Rewards Dropdown ----------*/}
                   <li className={styles["nav-3-ul-items"]}>
                        <div className={`nav-link dropdown-toggle ${styles["nav-3-dropdown-option"]}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="nav-3-dropdown-element">Deals & Rewards</span>
                            
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">option1</a></li>
                            </ul>
                        </div>
                    </li>

                    {/*---------- Best Sellers & More Dropdown ----------*/}
                   <li className={styles["nav-3-ul-items"]}>
                        <div className={`nav-link dropdown-toggle ${styles["nav-3-dropdown-option"]}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="nav-3-dropdown-element">Best Sellers & More</span>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">option1</a></li>
                            </ul>
                        </div>
                    </li>

                    {/*---------- Memberships Dropdown ----------*/}
                   <li className={styles["nav-3-ul-items"]}>
                        <div className={`nav-link dropdown-toggle ${styles["nav-3-dropdown-option"]}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="nav-3-dropdown-element">Memberships</span>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">option1</a></li>
                            </ul>
                        </div>
                    </li>

                    {/*---------- More Dropdown ----------*/}
                    <li className={styles["nav-3-ul-items"]}>
                        <div className={`nav-link dropdown-toggle ${styles["nav-3-dropdown-option"]}`}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="nav-3-dropdown-element">More</span>
                         
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">option1</a></li>
                            </ul>
                        </div>
                    </li>
                    
                    {/*---------- Your Books link ----------*/}
                    <li className={`${styles["nav-3-ul-items"]} ${styles["nav-3-your-books-link"]}`}>
                        <a href="https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https://www.amazon.com/your-books">
                            <span>Your Books</span>
                        </a>
                    </li>       
                </ul>
        </nav>
    );
}


function SubNav_Mobile()
{
    return (
        <nav className={`${styles["nav-3"]} ${styles["nav-3-mob"]} justify-content-between`}>
                <div className={`${styles["books-svg-mobile"]}`}>
                    {/*---------- books svg ---------->*/}
                        <a className={`${styles["books-svg-mobile-link"]}`} href="index.html"><img src={BooksLogo} alt="Subnav_BooksLogo" /></a>
                </div>

                <div className={`${styles['nav-3-mob-right-side-elements']} d-flex`}>
                     <a className={`${styles["nav-3-mob-your-books"]}`} href="https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https://www.amazon.com/your-books">
                            <span>Your Books</span>
                    </a>

                    <div className={`${styles["nav-3-mob-browse-div"]}`}>
                        <span className={`${styles["nav-3-mob-browse-text"]}`}>Browse</span>
                        <span className={`${styles["chevron-down-icon-container"]} me-3`}>
                            <img src={downChevron} alt=">" />
                        </span>
                    </div>
                        
                </div>
        </nav>
    )
}

export default SubNav;