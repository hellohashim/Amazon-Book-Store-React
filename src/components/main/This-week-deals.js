import styles from './This-week-deals.module.css';
import Card from './BookCard';
import chevron from '../../assets/chevron-blue.png'
function ThisWeekDeals()
{
    const this_week_deal_books = 
    [
        {title: "no-more-tears-book", src: "no-more-tears.webp", book_name: "No More Tears: The Dark Secrets of Johnson & Johnson", ratings: "4.5", amount_of_rating: "158,650", dollars: "5", cents: "99", href: "https://www.amazon.com/No-More-Tears-Secrets-Johnson-ebook/dp/B0D93KNGS1/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_0?_encoding=UTF8&pf_rd_p=47dff67d-571c-4ffc-b7d9-eac363758f3a&pf_rd_r=2SKFJXZRM48FBF98WQGR"},
        {title: "hope",  src: "hope.webp", book_name: "Hope: The Autobiography", ratings: "4.5", amount_of_rating: "635", dollars: "4", cents: "99", href: "https://www.amazon.com/Hope-Autobiography-Pope-Francis-ebook/dp/B0DJHSDHDH/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_1?_encoding=UTF8&pf_rd_p=47dff67d-571c-4ffc-b7d9-eac363758f3a&pf_rd_r=2SKFJXZRM48FBF98WQGR"},
        {title: "the-familiar-stranger", src: "the-familiar-stranger.webp", book_name: "The Familiar Stranger: (Re)Introducing the Holy Spirit to Those in Search of an Experiential Spirituality", ratings: "4.1", amount_of_rating: "43,105", dollars: "4", cents: "99", href: "https://www.amazon.com/Familiar-Stranger-Introducing-Experiential-Spirituality-ebook/dp/B0CZ42CXKK/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_2?_encoding=UTF8&pf_rd_p=47dff67d-571c-4ffc-b7d9-eac363758f3a&pf_rd_r=2SKFJXZRM48FBF98WQGR"},
        {title: "shred-happens-book", src: "shred-happens.webp", book_name: "Shred Happens: So Easy, So Good: 100+ Protein-Packed Mediterranean", ratings: "4.2", amount_of_rating: "1,070", dollars: "4", cents: "99", href: "https://www.amazon.com/Shred-Happens-Protein-Packed-Mediterranean-Favorites-ebook/dp/B0D57THSFK/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_3?_encoding=UTF8&pf_rd_p=47dff67d-571c-4ffc-b7d9-eac363758f3a&pf_rd_r=2SKFJXZRM48FBF98WQGR"},
        {title: "talk-book", src:"talk.webp", book_name: "Talk: The Science of Conversation and the Art of Being Ourselves", ratings: "4.4", amount_of_rating: "890", dollars: "6", cents: "99", href: "https://www.amazon.com/Talk-Science-Conversation-Being-Ourselves-ebook/dp/B0D2W1GMZZ/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_4?_encoding=UTF8&pf_rd_p=47dff67d-571c-4ffc-b7d9-eac363758f3a&pf_rd_r=2SKFJXZRM48FBF98WQGR"},
        {title: "government-gangsters-book", src: "government-gangsters.webp", book_name: "Government Gangsters: The Deep State, the Truth, and the Battle for Our Democracy", ratings: "4.3", amount_of_rating: "70,542", dollars: "0", cents: "99", href: "https://www.amazon.com/Government-Gangsters-State-Battle-Democracy-ebook/dp/B0BW9TX2C5/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_5?_encoding=UTF8&pf_rd_p=47dff67d-571c-4ffc-b7d9-eac363758f3a&pf_rd_r=2SKFJXZRM48FBF98WQGR"},
        {title: "fluent-forever-book", src: "fluent-forever.webp", book_name: "Fluent Forever (Revised Edition): How to Learn Any Language Fast and Never Forget It", ratings: "4.8", amount_of_rating: "433,650", dollars: "14", cents: "99", href: "https://www.amazon.com/Fluent-Forever-Learn-Language-Forget-ebook/dp/B00IBZ405W/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_6?_encoding=UTF8&pf_rd_p=47dff67d-571c-4ffc-b7d9-eac363758f3a&pf_rd_r=2SKFJXZRM48FBF98WQGR"},
        {title: "the-comfort-crisis-book", src: "the-comfort-crisis.webp", book_name: "The Comfort Crisis: Embrace Discomfort To Reclaim Your Wild, Happy, Healthy Self ", ratings: "4.4", amount_of_rating: "34,399", dollars: "1", cents: "99", href: "https://www.amazon.com/Comfort-Crisis-Embrace-Discomfort-Reclaim-ebook/dp/B08FZLLPJX/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_7?_encoding=UTF8&pf_rd_p=47dff67d-571c-4ffc-b7d9-eac363758f3a&pf_rd_r=2SKFJXZRM48FBF98WQGR"},
        {title: "eat-to-beat-book", src: "eat-to-beat.webp", book_name: "Eat to Beat Disease: The New Science of How Your Body Can Heal Itself", ratings: "4.2", amount_of_rating: "8,086", dollars: "4", cents: "99", href:"https://www.amazon.com/Eat-Beat-Disease-Science-Itself-ebook/dp/B07F69FGHJ/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_8?_encoding=UTF8&pf_rd_p=47dff67d-571c-4ffc-b7d9-eac363758f3a&pf_rd_r=2SKFJXZRM48FBF98WQGR"},
        {title: "super-gut-book", src: "super-gut.webp", book_name: "Super Gut: A Four-Week Plan to Reprogram Your Microbiome, Restore Health, and Lose Weight ", ratings: "4.6", amount_of_rating: "16,886", dollars: "14", cents: "99", href: "https://www.amazon.com/Super-Gut-Four-Week-Reprogram-Microbiome-ebook/dp/B096RTDMXV/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_9?_encoding=UTF8&pf_rd_p=47dff67d-571c-4ffc-b7d9-eac363758f3a&pf_rd_r=2SKFJXZRM48FBF98WQGR"},
        {title: "us-book", src: "us.webp", book_name: "Us: Getting Past You & Me to Build a More Loving Relationship", ratings: "4.4", amount_of_rating: "40,015", dollars: "9", cents: "99", href:"https://www.amazon.com/Us-Getting-Build-Loving-Relationship-ebook/dp/B097QS1Z7L/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_0"},
        {title: "nonviolent-book", src: "nonviolent.webp", book_name: "Nonviolent Communication: A Language of Life: Life-Changing Tools for Healthy Relationships", ratings: "4.2", amount_of_rating: "122,970", dollars: "4", cents: "99", href: "https://www.amazon.com/Nonviolent-Communication-Language-Life-Changing-Relationships-ebook/dp/B014OISVU4/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_1"},
        {title: "high-functioning-book", src: "high-functioning.webp", book_name: "High Functioning: Overcome Your Hidden Depression and Reclaim Your Joy", ratings: "4.2", amount_of_rating: "41,989", dollars: "5", cents: "99", href: "https://www.amazon.com/High-Functioning-Overcome-Depression-Reclaim-ebook/dp/B0D8HR73MJ/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_2"},
        {title: "radical-acceptance-book", src: "radical-acceptance.webp", book_name: "Radical Acceptance  ", ratings: "4.6", amount_of_rating: "12,520", dollars: "4", cents: "99", href: "https://www.amazon.com/Radical-Acceptance-Tara-Brach-ebook/dp/B000FC2NHG/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_3"},
        {title: "the-awakened-brain-book", src: "the-awakened-brain.webp", book_name: "The Awakened Brain: The New Science of Spirituality and Our Quest for an Inspired Life", ratings: "4.6", amount_of_rating: "12,520", dollars: "4", cents: "99", href: "https://www.amazon.com/Awakened-Brain-Science-Spirituality-Inspired-ebook/dp/B08NT4WXS9/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_4"},
        {title: "nlt-life-appplication-book", src: "nlt-life-appplication.webp", book_name: "NLT Life Application Study Bible, Third Edition", ratings: "4.6", amount_of_rating: "12,520", dollars: "4", cents: "99", href: "https://www.amazon.com/Life-Application-Study-Bible-Third-ebook/dp/B07PLNK2PV/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_5"},
        {title: "rhe-inner-game-of-tennis-book", src: "rhe-inner-game-of-tennis.webp", book_name: "The Inner Game of Tennis: The Classic Guide to the Mental Side of Peak Performance", ratings: "4.6", amount_of_rating: "12,520", dollars: "4", cents: "99", href: "https://www.amazon.com/Inner-Game-Tennis-Classic-Performance-ebook/dp/B003T0G9E4/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_6"},
        {title: "the-disengaged-teen-book", src: "the-disengaged-teen.webp", book_name: "The Disengaged Teen: Helping Kids Learn Better, Feel Better, and Live Better", ratings: "4.6", amount_of_rating: "12,520", dollars: "4", cents: "99", href: "https://www.amazon.com/Disengaged-Teen-Helping-Learn-Better-ebook/dp/B0CZXRWZGN/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_7"},
        {title: "umma-book", src: "umma.webp", book_name: "Umma: A Korean Mom's Kitchen Wisdom and 100 Family Recipes", ratings: "4.6", amount_of_rating: "12,520", dollars: "4", cents: "99", href: "https://www.amazon.com/Umma-Korean-Kitchen-Wisdom-Recipes-ebook/dp/B0DDSHN4LN/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_8"},
        {title: "the-next-day-book", src: "the-next-day.webp", book_name: "The Next Day: Transitions, Change, and Moving Forward", ratings: "4.6", amount_of_rating: "12,520", dollars: "4", cents: "99", href: "https://www.amazon.com/Next-Day-Transitions-Change-Forward-ebook/dp/B0D8ZQD55J/ref=books_amz-books_desktop_mfs_greatonkindlekbd_20250804_9"}
    ];

    return(
        <section className={styles["main-this-week-deal-section"]}>
            <div className='d-flex justify-content-between'>
                <h2 className={styles["main-book-section-title"]}>This week's deal - Great on Kindle reads</h2>
                <div className={`${styles['main-book-see-more-div']} ${styles["only-on-desktop"]}`}>
                    <a href="https://www.amazon.com/s?k=this+week+deals&i=stripbooks&crid=39695FGWZMGIK&sprefix=this+week+dea%2Cbooks%2C295&ref=nb_sb_noss">
                        See more
                        <span>
                          <img src={chevron} alt='>'/>
                        </span>
                    </a>
                </div>
            </div>
            <div className={`${styles["main-this-week-deal-section-slider"]} ${styles["main-slider-on-desktop"]}`}>
                {  this_week_deal_books.map((book)=>
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

export default ThisWeekDeals;