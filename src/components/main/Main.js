import styles from './main.module.css';
import banner from '../../assets/limited-time-deals.jpg'
import bestBooks from '../../assets/Editors best books of the month.png'
import topSummerBooks from '../../assets/Editors top summer books.jpeg'
import mysteriousBooks from '../../assets/Best mysterious and thrillers of the month.png'
import amazonBookReview from '../../assets/Amazon Book Review.png'
import BestSellersOnKindle from './Best-sellers-on-kindle';
import BestSellersInPrint from './Best-sellers-in-print';
import BrowsingHistory from './Browsing-history';
import ThisWeekDeals from './This-week-deals';
import PopularAuthors from './Popular-authors';
import ExploreTopCategories from './Explore-top-categories';
import SubmitFeedback from './Submit-feedback';

function Main() 
{
    return(
        <main className={`${styles["main-webpage-body"]}`}>
                {/*-- h1 tag saying Shop books at the top of the main --*/}
                <h1 className={`${styles["main-h1-shop-books"]}`}>Shop books</h1>
                
                {/*-- image link for  the limited time offers --*/}
                <div className={`${styles["limited-time-deals-img-container"]}`}>
                    <a className={`${styles["limited-time-deals-img-link"]}`} href="https://www.amazon.com/b/?_encoding=UTF8&node=207834816011&ref_=cct_cg_KBD20250804_1a1&pf_rd_p=a2937db1-7a36-48cd-ad68-77426af82d1d&pf_rd_r=1C8BKXT3VSKQF10G0G9D">
                        <img src={banner} alt="limited time deal banner" />
                    </a>
                </div>

             {/*-- suggestions below the image link of limited time offers -- */}
             <div className={`${styles["main-suggestion-links-div"]}`}>
                <ul className={`${styles["main-suggestion-links-ul"]}`}>
                    {/*-- Editors' best books of the month link --*/}
                    <li  className={`${styles["main-suggestion-links"]}`}>
                        <img src={bestBooks} alt="Best Book of the Month Icon" />
                        <a href="https://www.amazon.com/b/?_encoding=UTF8&node=17143709011&node=283155&pf_rd_p=456e532f-c0db-4aae-8515-6c734ff1cadf&pf_rd_r=SPJBT7E8RQ12QNJVYG9B&ref_=usf_featuredInCard_283155">Editors' best books of the month</a>
                    </li>

                    {/*-- Editors' top summer books link --*/}
                    <li  className={`${styles["main-suggestion-links"]}`}>
                        <img src={topSummerBooks} alt="Editors' top summer books Icon" />
                        <a href="https://www.amazon.com/b/?_encoding=UTF8&node=9014217011&node=283155&pf_rd_p=456e532f-c0db-4aae-8515-6c734ff1cadf&pf_rd_r=SPJBT7E8RQ12QNJVYG9B&ref_=usf_featuredInCard_283155">Editors' top summer books</a>
                    </li>

                    {/*-- Best mysterious and thrillers of the month link --*/}
                    <li className={`${styles["main-suggestion-links"]}`}>
                        <img src={mysteriousBooks} alt="Best mysterious and thrillers of the month Icon" />
                        <a href="https://www.amazon.com/b/?_encoding=UTF8&node=17276798011&node=283155&pf_rd_p=456e532f-c0db-4aae-8515-6c734ff1cadf&pf_rd_r=SPJBT7E8RQ12QNJVYG9B&ref_=usf_featuredInCard_283155">Best mysterious and thrillers of the month </a>
                    </li>

                    {/*-- Amazon Book Review link --*/}
                    <li  className={`${styles["main-suggestion-links"]}`}>
                        <img src={amazonBookReview} alt="Amazon Book Review icon" />
                        <a href="https://www.amazon.com/amazonbookreview/?_encoding=UTF8&node=283155&pf_rd_p=456e532f-c0db-4aae-8515-6c734ff1cadf&pf_rd_r=SPJBT7E8RQ12QNJVYG9B&ref_=usf_featuredInCard_283155">Amazon Book Review</a>
                    </li>
                </ul>
            </div>
            {/*-- Browsing history section --*/}
            <BrowsingHistory />
            {/*-- Best sellers on Kindle section --*/}
            <BestSellersOnKindle />
            {/*-- Best sellers in print books section --*/}
            <BestSellersInPrint />
            {/*-- This week deals section --*/}
            <ThisWeekDeals />
            
            <hr />

            {/*-- Popular authors & series section --*/}
            <PopularAuthors />

            <hr />
            {/*-- Explore Top Categories --*/}
            <ExploreTopCategories />

            <hr />
            {/*-- Submit feedback section --*/}
            <SubmitFeedback />
            <br/>
        </main>
    );
}

export default Main;