import styles from './Best-sellers-on-kindle.module.css';
import Card from './BookCard';
import chevron from '../../assets/chevron-blue.png'
function BestSellersOnKindle()
{
    const best_sellers_kindle_books= 
    [
        {title: "regretting-you-book",  src: "regretting-you.webp", book_name: "Regretting You", ratings: "4.5", amount_of_rating: "158,650", dollars: "5", cents: "99", href: "https://www.amazon.com/Regretting-You-Colleen-Hoover-ebook/dp/B07SH5V2NB/ref=books_amz-books_desktop_mfs_ebookzg_0?_encoding=UTF8&pd_rd_w=VwUmH&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_p=8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_r=MSVBMWVPF48V2WNAFD1E&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1"},
        {title: "first-witch-book",  src: "first-witch.webp", book_name: "The First Witch of Boston: A Novel", ratings: "4.5", amount_of_rating: "635", dollars: "4", cents: "99", href: "https://www.amazon.com/First-Witch-Boston-Novel-ebook/dp/B0DG8NTCJ7/ref=books_amz-books_desktop_mfs_ebookzg_1?_encoding=UTF8&pd_rd_w=VwUmH&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_p=8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_r=MSVBMWVPF48V2WNAFD1E&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1"},
        {title: "bad-date-book", src: "bad-date.webp", book_name: "Bad Date: A Short Story", ratings: "4.1", amount_of_rating: "43,105", dollars: "4", cents: "99", href: "https://www.amazon.com/Bad-Date-Short-Ellery-Lloyd-ebook/dp/B0F3DTZ9H9/ref=books_amz-books_desktop_mfs_ebookzg_7?_encoding=UTF8&pd_rd_w=VwUmH&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_p=8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_r=MSVBMWVPF48V2WNAFD1E&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1"},
        {title: "cold-island-book", src: "cold-island.webp", book_name: "Cold Island: A Novel (Detective Tommy Kelly Book 1)", ratings: "4.2", amount_of_rating: "1,070", dollars: "4", cents: "99", href: "https://www.amazon.com/Cold-Island-Novel-Detective-Tommy-ebook/dp/B0DTJBF41K/ref=books_amz-books_desktop_mfs_ebookzg_6?_encoding=UTF8&pd_rd_w=VwUmH&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_p=8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_r=MSVBMWVPF48V2WNAFD1E&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1"},
        {title: "fallen-and-kiss-of-dusk-book", src:"fallen-and-kiss-of-dusk.webp", book_name: "The Fallen and the Kiss of Dusk (Crowns of Nyaxia Book 4)", ratings: "4.4", amount_of_rating: "890", dollars: "6", cents: "99", href: "https://www.amazon.com/Fallen-Kiss-Dusk-Crowns-Nyaxia-ebook/dp/B0DQK4CLNR/ref=books_amz-books_desktop_mfs_ebookzg_5?_encoding=UTF8&pd_rd_w=VwUmH&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_p=8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_r=MSVBMWVPF48V2WNAFD1E&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1"},
        {title: "death-row-book", src: "death-row.webp", book_name: "Death Row (Alibis collection)", ratings: "4.3", amount_of_rating: "70,542", dollars: "0", cents: "99", href: "https://www.amazon.com/Audible-Death-Row-Alibis-collection/dp/B0F641DY4V/ref=sr_1_1?dib=eyJ2IjoiMSJ9.cpXKYjPVPvwYFChawBN_7nF3aW0RSxRXjBEEY_NINVNYyzrZbROi94dR2E21cM9quIEfoJggiIqfUpWI_d8nlR6fLsyURNT-xAVAaCnneNo.6lDXVv_dN21l6mA68TntfAxoaJGk5F6_M0oiTtW0L9o&dib_tag=se&keywords=Death+Row+%28Alibis+collection%29&qid=1754754410&s=books&sr=1-1"},
        {title: "fourth-wing", src: "fourth-wing.webp", book_name: "Fourth Wing (The Empyrean Book 1)", ratings: "4.8", amount_of_rating: "433,650", dollars: "14", cents: "99", href: "https://www.amazon.com/Fourth-Wing-Empyrean-Book-1-ebook/dp/B0BGDM197Q/ref=books_amz-books_desktop_mfs_ebookzg_7?_encoding=UTF8&pd_rd_w=VwUmH&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e"},
        {title: "lake-house-book", src: "lake-house.webp", book_name: "The Lake House: A Novel", ratings: "4.4", amount_of_rating: "34,399", dollars: "1", cents: "99", href: "https://www.amazon.com/Lake-House-Novel-Kate-Morton-ebook/dp/B00LD1S3PY/ref=books_amz-books_desktop_mfs_ebookzg_2?_encoding=UTF8&pd_rd_w=VwUmH&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_p=8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_r=MSVBMWVPF48V2WNAFD1E&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1"},
        {title: "last-seen-book", src: "last-seen.webp", book_name: "Last Seen", ratings: "4.2", amount_of_rating: "8,086", dollars: "4", cents: "99", href: "https://www.amazon.com/Last-Seen-J-T-Ellison-ebook/dp/B0DFZ4QQZ3/ref=books_amz-books_desktop_mfs_ebookzg_6?_encoding=UTF8&pd_rd_w=VwUmH&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e"},
        {title: "my-friends-book", src: "my-friends.webp", book_name: "My Friends: A Novel", ratings: "4.6", amount_of_rating: "16,886", dollars: "14", cents: "99", href: "https://www.amazon.com/My-Friends-Novel-Fredrik-Backman-ebook/dp/B0D9DSCFCC/ref=books_amz-books_desktop_mfs_ebookzg_2?_encoding=UTF8&pd_rd_w=VwUmH&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e"},
        {title: "summer-i-turned-pretty-book", src: "summer-i-turned-pretty.webp", book_name: "The Summer I Turned Pretty", ratings: "4.4", amount_of_rating: "40,015", dollars: "9", cents: "99", href: "https://www.amazon.com/Summer-Turned-Pretty-Book-ebook/dp/B004CLYLCG/ref=books_amz-books_desktop_mfs_ebookzg_1?_encoding=UTF8&pd_rd_w=VwUmH&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e"},
        {title: "the-tenant-book", src: "the-tenant.webp", book_name: "The Tenant", ratings: "4.2", amount_of_rating: "122,970", dollars: "4", cents: "99", href: "https://www.amazon.com/King-Pride-Opposites-Attract-Romance-ebook/dp/B0BJ7X6M16/ref=books_amz-books_desktop_mfs_cp_0?_encoding=UTF8&pd_rd_w=j78lX&content-id=amzn1.sym.e8e9dd5d-ca13-40a0-ba8e-9f60d876f372&pf_rd_p=e8e9dd5d-ca13-40a0-ba8e-9f60d876f372&pf_rd_r=69QW3JFJES34JR5S1VFF&pd_rd_wg=9VyUT&pd_rd_r=ea979248-1bcb-4dcb-ad10-589bd5edc43d"},
        {title: "till-summer-book", src: "till-summer.webp", book_name: "Till Summer Do Us Part", ratings: "4.2", amount_of_rating: "41,989", dollars: "5", cents: "99", href: "https://www.amazon.com/Till-Summer-Do-Us-Part-ebook/dp/B0DWVCNRFT/ref=books_amz-books_desktop_mfs_ebookzg_3?_encoding=UTF8&pd_rd_w=VwUmH&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_p=8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_r=MSVBMWVPF48V2WNAFD1E&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1"},
        {title: "women-of-arlington-book", src: "women-of-arlington.webp", book_name: "The Women of Arlington Hall: A Novel", ratings: "4.6", amount_of_rating: "12,520", dollars: "4", cents: "99", href: "https://www.amazon.com/Women-Arlington-Hall-Novel-ebook/dp/B0DJTD3XM2/ref=books_amz-books_desktop_mfs_ebookzg_4?_encoding=UTF8&pd_rd_w=VwUmH&content-id=amzn1.sym.8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_p=8aa143d1-d844-4786-bd64-fcb148cfae6e&pf_rd_r=MSVBMWVPF48V2WNAFD1E&pd_rd_wg=cGRC9&pd_rd_r=47fea2b4-2076-46d9-8d50-2d944f675ab1"}
    ]

    return(
        <section className={styles["main-best-sellers-on-kindle-section"]}>
            <div className='d-flex justify-content-between'>
                <h2 className={styles["main-book-section-title"]}>Best sellers on Kindle</h2>
                 <div className={`${styles['main-book-see-more-div']} ${styles["only-on-desktop"]}`}>
                        <a href="https://www.amazon.com/amz-books/seeMore/?_encoding=UTF8&pd_rd_w=042Xi&content-id=amzn1.sym.2afe309b-727a-402f-abac-8a28cfa877dd&pf_rd_p=2afe309b-727a-402f-abac-8a28cfa877dd&pf_rd_r=WZJ3BZ39PFWY48CRK4XF&pd_rd_wg=0Vsgs&pd_rd_r=c13383f5-914f-4e0f-b533-17b949d294e0&ref_=cp&widgetId=desktop-books-storefront_ClickPicksStrategy&title=Inspired%20by%20your%20browsing%20history%20&ref_=books_amz-books_desktop_mfs_cp&sourceType=RECS&page=1&pd_rd_w=042Xi&content-id=amzn1.sym.2afe309b-727a-402f-abac-8a28cfa877dd&pf_rd_p=2afe309b-727a-402f-abac-8a28cfa877dd&pf_rd_r=WZJ3BZ39PFWY48CRK4XF&pd_rd_wg=0Vsgs&pd_rd_r=c13383f5-914f-4e0f-b533-17b949d294e0&metadata=%24deviceID%3A%24deviceFormFactor%3Alarge%24deviceAppType%3ADESKTOP%24deviceTypeID%3A%24deviceFamily%3A%24deviceSurfaceType%3Adesktop%24cardAppType%3ADESKTOP%24cardSurfaceType%3Adesktop%24cardMobileOS%3AUnknown%24sidekickLocale%3Aen-US%24locale%3Aen-US%24clientRequestId%3AWZJ3BZ39PFWY48CRK4XF%24multiFormatWidgetSpClickUrlType%3Adefault&cardFeedType=widgetId">
                            See more
                            <span>
                                <img src={chevron} alt='>'/>
                            </span>
                        </a>
                </div>
            </div>
            <div className={`${styles["main-best-sellers-on-kindle-slider"]}  ${styles["main-slider-on-desktop"]}`}>
                {  best_sellers_kindle_books.map((book)=>
                     <Card title={book.title} src={book.src} book_name= {book.book_name}  ratings={book.ratings} amount_of_rating= {book.amount_of_rating} dollars= {book.dollars} cents= {book.cents} href={book.href}  />
                )}
                
            </div>
            <div className={` ${styles['main-book-see-more-div-mob']}`}>
                    <a href="https://www.amazon.com/amz-books/seeMore/?_encoding=UTF8&pd_rd_w=042Xi&content-id=amzn1.sym.2afe309b-727a-402f-abac-8a28cfa877dd&pf_rd_p=2afe309b-727a-402f-abac-8a28cfa877dd&pf_rd_r=WZJ3BZ39PFWY48CRK4XF&pd_rd_wg=0Vsgs&pd_rd_r=c13383f5-914f-4e0f-b533-17b949d294e0&ref_=cp&widgetId=desktop-books-storefront_ClickPicksStrategy&title=Inspired%20by%20your%20browsing%20history%20&ref_=books_amz-books_desktop_mfs_cp&sourceType=RECS&page=1&pd_rd_w=042Xi&content-id=amzn1.sym.2afe309b-727a-402f-abac-8a28cfa877dd&pf_rd_p=2afe309b-727a-402f-abac-8a28cfa877dd&pf_rd_r=WZJ3BZ39PFWY48CRK4XF&pd_rd_wg=0Vsgs&pd_rd_r=c13383f5-914f-4e0f-b533-17b949d294e0&metadata=%24deviceID%3A%24deviceFormFactor%3Alarge%24deviceAppType%3ADESKTOP%24deviceTypeID%3A%24deviceFamily%3A%24deviceSurfaceType%3Adesktop%24cardAppType%3ADESKTOP%24cardSurfaceType%3Adesktop%24cardMobileOS%3AUnknown%24sidekickLocale%3Aen-US%24locale%3Aen-US%24clientRequestId%3AWZJ3BZ39PFWY48CRK4XF%24multiFormatWidgetSpClickUrlType%3Adefault&cardFeedType=widgetId">
                        See more
                        <span>
                            <img src={chevron} alt='>'/>
                        </span>
                    </a>
            </div>          
        </section>
    )
}

export default BestSellersOnKindle;