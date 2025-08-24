import styles from './Explore-top-categories.module.css';
import chevron from '../../assets/chevron.png';
function ExploreTopCategories()
{
    return(
        <section>
            <h2 className={`${styles["main-book-section-title"]}`}>Explore top categories</h2>
            <div className={`${styles["main-explore-top-categories-container"]}`}>
                <div className="row">
                    <div className={`col-12 col-sm-5 col-lg-4 ${styles["main-explore-top-categories-first-col"]}`}>
                        <a className={`d-flex justify-content-between ${styles["main-top-categories-links"]}`} href="https://www.amazon.com/amz-books/discover?node=23&navStore=books">
                            Romance     
                            <span className={`${styles["main-explore-top-categories-icon"]} ${styles["hide-on-desktop"]}`}>
                                <img src={chevron} alt=">" />
                            </span>
                        </a>
                    </div>

                    <div className="col-12 col-sm-5 col-lg-4">
                        <a className={`d-flex justify-content-between ${styles["main-top-categories-links"]}`} href="https://www.amazon.com/amz-books/discover?node=4&navStore=books">
                            Children's Books
                            <span className={`${styles["main-explore-top-categories-icon"]} ${styles["hide-on-desktop"]}`}>
                                <img src={chevron} alt=">" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-5 col-lg-4">
                        <a className={`d-flex justify-content-between ${styles["main-top-categories-links"]}`} href="https://www.amazon.com/amz-books/discover?node=18&navStore=books">
                             Mystery, Thriller & Suspense
                             <span className={`${styles["main-explore-top-categories-icon"]} ${styles["hide-on-desktop"]}`}>
                                <img src={chevron} alt=">" />
                            </span>
                            </a>
                    </div>

                    <div className="col-12 col-sm-5 col-lg-4">
                        <a className={`d-flex justify-content-between ${styles["main-top-categories-links"]}`} href="https://www.amazon.com/amz-books/discover?node=25&navStore=books">
                            Science Fiction & Fantasy
                            <span className={`${styles["main-explore-top-categories-icon"]} ${styles["hide-on-desktop"]}`}>
                                <img src={chevron} alt=">" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-5 col-lg-4">
                        <a className={`d-flex justify-content-between ${styles["main-top-categories-links"]}`} href="https://www.amazon.com/amz-books/discover?node=17&navStore=books">
                            Literature & Fiction
                            <span className={`${styles["main-explore-top-categories-icon"]} ${styles["hide-on-desktop"]}`}>
                                <img src={chevron} alt=">" />
                            </span>
                        </a>
                    </div>

                    <div className="col-12 col-sm-5 col-lg-4">
                        <a className={`d-flex justify-content-between ${styles["main-top-categories-links"]}`} href="https://www.amazon.com/amz-books/discover?node=9&navStore=books">
                            History
                            <span className={`${styles["main-explore-top-categories-icon"]} ${styles["hide-on-desktop"]}`}>
                                <img src={chevron} alt=">" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-5 col-lg-4">
                        <a className={`d-flex justify-content-between ${styles["main-top-categories-links"]}`} href="https://www.amazon.com/amz-books/discover?node=2&navStore=books">
                            Biographies & Memoirs
                            <span className={`${styles["main-explore-top-categories-icon"]} ${styles["hide-on-desktop"]}`}>
                                <img src={chevron} alt=">" />
                            </span>
                        </a> 
                    </div>

                    <div className="col-12 col-sm-5 col-lg-4">
                        <a className={`d-flex justify-content-between ${styles["main-top-categories-links"]}`} href="https://www.amazon.com/amz-books/discover?node=28&navStore=books">
                            Teen & Young Adult
                            <span className={`${styles["main-explore-top-categories-icon"]} ${styles["hide-on-desktop"]}`}>
                                <img src={chevron} alt=">" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-5 col-lg-4">
                        <a className={`d-flex justify-content-between ${styles["main-top-categories-links"]}`} href="https://www.amazon.com/amz-books/discover?node=3&navStore=books">
                            Business & Money
                            <span className={`${styles["main-explore-top-categories-icon"]} ${styles["hide-on-desktop"]}`}>
                                <img src={chevron} alt=">" />
                            </span>
                        </a>
                    </div>

                    <div className={`col-12 col-sm-5 col-lg-4 ${styles["main-explore-top-categories-last-col"]}`}>
                        <a className={`d-flex justify-content-between ${styles["main-top-categories-links"]}`} href="https://www.amazon.com/amz-books/discover?node=4736&navStore=books">
                            Self-help
                            <span className={`${styles["main-explore-top-categories-icon"]} ${styles["hide-on-desktop"]}`}>
                                <img src={chevron} alt=">" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ExploreTopCategories;