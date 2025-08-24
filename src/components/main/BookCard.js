import styles from './BookCard.module.css';
import starsfull from '../../assets/starFullSmall.svg'
import starshalf from '../../assets/starHalfSmall.svg'
import kindleUnlimited from '../../assets/kindle-unlimited.svg'

const kindleImages = require.context(
  '../../assets/Book-images/best-sellers-on-kindle',
  false,
  /\.(png|jpg|jpeg|webp)$/
);
const printImages = require.context(
  '../../assets/Book-images/best-sellers-in-print',
  false,
  /\.(png|jpg|jpeg|webp)$/
);
const browsingHistory = require.context(
  '../../assets/Book-images/browsing-history',
  false,
  /\.(png|jpg|jpeg|webp)$/
);
const thisWeekDeals = require.context(
  '../../assets/Book-images/this-week-deal',
  false,
  /\.(png|jpg|jpeg|webp)$/
);


// Merge into one lookup function
const images = (path) => {
  if (kindleImages.keys().includes(`./${path}`)) {
    return kindleImages(`./${path}`);
  }
  if (printImages.keys().includes(`./${path}`)) {
    return printImages(`./${path}`);
  }
  if (browsingHistory.keys().includes(`./${path}`)) {
    return browsingHistory(`./${path}`);
  }
  if (thisWeekDeals.keys().includes(`./${path}`)) {
    return thisWeekDeals(`./${path}`);
  }
  throw new Error(`Image not found: ${path}`);
};

function BookCard(book)
{
    return(
        <div className={`card ${styles[book.title]} ${styles["card"]}`}>
                <a className={`${styles["card-link"]}`} href={`${book.href}`}>
                    <img src={images(`${book.src}`)}  className={`${styles["card-img-top"]} card-img-top`} alt={`${book.title}-image`}/>
                    <div className={`card-body  ${styles["card-body"]}`}>
                        <h5 className={`card-title ${styles["card-title"]}`}>{book.book_name}</h5>
                        <span className={`${styles["ratings-field"]}`}>
                            <a className={`${styles["rating-stars-link"]}`}  href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2FKing-Pride-Opposites-Attract-Romance-ebook%2Fproduct-reviews%2FB0BJ7X6M16%2Fref%3Dbooks_amz-books_desktop_mfs_cp_0%3F_encoding%3DUTF8%26pd_rd_w%3Dj78lX%26content-id%3Damzn1.sym.e8e9dd5d-ca13-40a0-ba8e-9f60d876f372%26pf_rd_p%3De8e9dd5d-ca13-40a0-ba8e-9f60d876f372%26pf_rd_r%3D69QW3JFJES34JR5S1VFF%26pd_rd_wg%3D9VyUT%26pd_rd_r%3Dea979248-1bcb-4dcb-ad10-589bd5edc43d&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
                                <span className={`card-text ${styles["card-text"]}`}>{book.ratings}</span>
                            <span className={`${styles["rating-stars-img-container"]}`}>
                                <img src={starsfull} alt="★"/>
                                <img src={starsfull} alt="★"/>
                                <img src={starsfull} alt="★"/>
                                <img src={starsfull} alt="★"/>
                                <img src={starshalf} alt="★"/>
                            </span>
                            <span className={`${styles["amount-of-ratings"]}`}>
                                        {book.amount_of_rating}
                                    </span>
                                </a>
                        </span>
                        <div className={`${styles["kindle-unlimited-img-container"]}`}>
                            <img src={kindleUnlimited} className={`${styles["kindle-unlimited-img"]}`} alt="" />
                        </div>
                        <span className={`${styles["kindle-edition-text"]}`}>Kindle Edition</span>
                        <div className={`${styles["price-container"]}`}>
                            <div className={`${styles["price"]} price-currency `}><sup>$</sup></div>
                            <div className={`${styles["price"]} price-of-book `}>{book.dollars}</div>
                            <div className={`${styles["price"]} price-fractional`}><sup>{book.cents}</sup></div>
                        </div>                 
                    </div>
                </a>
        </div>
    );
}

export default BookCard;
  
  