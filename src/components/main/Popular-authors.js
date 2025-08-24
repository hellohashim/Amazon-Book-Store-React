import styles from './Popular-authors.module.css';
const images = require.context(
  '../../assets/popular-authors',
  false,
  /\.(png|jpg|jpeg|webp)$/
);

function PopularAuthors()
{
    return(
        <section className={`${styles["popular-authors-section"]}`}>
            <h2 className={`${styles["main-book-section-title"]}`}>Popular authors & series</h2>
            <div className={`${styles["popular-authors-container"]}`}>
                <div className={`row ${styles["popular-authors"]}`}>
                    <div className="col-6 col-lg-2 col-sm-6">
                        <a href="https://www.amazon.com/stores/Freida-McFadden/author/B00ELQLN2I?_encoding=UTF8&node=283155&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155&isDramIntegrated=true&shoppingPortalEnabled=true">                    
                            <img src={images("./Freida_McFadden.jpg")} alt="Freida_McFadden" />
                        </a>
                    </div>
                    <div className={`col-6 col-lg-2 col-sm-6`}>
                        <a href="https://www.amazon.com/stores/Stephen-King/author/B000AQ0842?_encoding=UTF8&node=283155&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155&isDramIntegrated=true&shoppingPortalEnabled=true">     
                            <img src={images("./Stephen_King.jpg")} alt="Stephen_King" />  
                        </a>
                    </div>

                    <div className="col-6 col-lg-2  col-sm-6">
                        <a href="https://www.amazon.com/stores/Mark-Bittman/author/B000APUJB0?_encoding=UTF8&node=283155&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155&isDramIntegrated=true&shoppingPortalEnabled=true">                      
                            <img src={images("./Mark_Bittman.jpg")} alt="Mark_Bittman" />
                        </a>
                    </div>

                    <div className="col-6 col-lg-2  col-sm-6">
                        <a href="https://www.amazon.com/stores/Meghan-Quinn/author/B00G2PREA6?_encoding=UTF8&node=283155&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155&isDramIntegrated=true&shoppingPortalEnabled=true">                       
                            <img src={images("./Meghan_Quinn.jpg")} alt="Meghan_Quinn" />
                        </a>
                    </div>

                    <div className="col-6 col-lg-2 col-sm-6">
                        <a href="https://www.amazon.com/stores/page/0C425B5F-5227-4990-BDCA-8C04E5B12FF6/?_encoding=UTF8&node=283155&pf_rd_p=32ad263a-6cde-45d3-9cd5-f495896e1d21&pf_rd_r=ZRM6VWDT48V2HK909TZ0&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155">                         
                            <img src={images("./Holman_handbook.jpg")} alt="Holman_handbook"  />
                        </a>
                    </div>

                    <div className={`col-6 col-lg-2 col-sm-6 ${styles["mel-div"]}`}>
                        <a href="https://www.amazon.com/stores/Mel-Robbins/author/B004SWIOHW?_encoding=UTF8&node=283155&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155&isDramIntegrated=true&shoppingPortalEnabled=true">                         
                            <img src={images("./Mel_Robbins.jpg")} alt="Mel_Robbins" />
                        </a>
                    </div>
                </div>

                <div className={`row ${styles["popular-authors"]}`}>
                    <div className="col-6 col-lg-2 col-sm-6">
                        <a href="https://www.amazon.com/stores/page/C60382A3-75BD-4803-ADFA-094C4DC08A25/?_encoding=UTF8&node=283155&pf_rd_p=32ad263a-6cde-45d3-9cd5-f495896e1d21&pf_rd_r=ZRM6VWDT48V2HK909TZ0&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155">                           
                            <img src={images("./CSB_bibles.jpg")} alt="CSB_bibles" />
                        </a>
                    </div>

                    <div className="col-6 col-lg-2 col-sm-6">
                        <a href="https://www.amazon.com/stores/Ava-Reid/author/B08SKNNPLP?_encoding=UTF8&node=283155&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155&isDramIntegrated=true&shoppingPortalEnabled=true">                            
                            <img src={images("./Ava_Reid_.jpg")} alt="Ava_Reid_" />
                        </a>
                    </div>

                    <div className="col-6 col-lg-2 col-sm-6">
                        <a href="https://www.amazon.com/stores/page/9488BC00-8CBA-45C7-9AF0-BD1512B5A493/?_encoding=UTF8&node=283155&pf_rd_p=32ad263a-6cde-45d3-9cd5-f495896e1d21&pf_rd_r=ZRM6VWDT48V2HK909TZ0&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155">                         
                            <img src={images("./Tonu_Evans_study_bibles.jpg")} alt="Tonu_Evans_study_bibles" />
                        </a>
                    </div>

                    <div className="col-6 col-lg-2 col-sm-6">
                        <a href="https://www.amazon.com/stores/page/36461DD5-6642-4744-AB9B-9B8C0885B14C/?_encoding=UTF8&node=283155&pf_rd_p=32ad263a-6cde-45d3-9cd5-f495896e1d21&pf_rd_r=ZRM6VWDT48V2HK909TZ0&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155">            
                            <img src={images("./Kristi_Mclelland.jpg")} alt="Kristi_Mclelland" />
                        </a>
                    </div>

                    <div className="col-6 col-lg-2 col-sm-6">
                        <a href="https://www.amazon.com/stores/Carl-Hiaasen/author/B00KWZGGAG?_encoding=UTF8&node=283155&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155&isDramIntegrated=true&shoppingPortalEnabled=true">                   
                            <img src={images("./Carl_Hiaasen.jpg")} alt="Carl_Hiaasen" />
                        </a>
                    </div>

                    <div className={` col-6 col-lg-2 col-sm-6 ${styles["james-div"]}`}>
                        <a href="https://www.amazon.com/dp/B0B6JQLQP6/?_encoding=UTF8&node=283155&pf_rd_p=32ad263a-6cde-45d3-9cd5-f495896e1d21&pf_rd_r=ZRM6VWDT48V2HK909TZ0&ref_=bktmUS_ASAP_ASAP_CB_Q325_283155">                          
                            <img src={images("./James_Bond.jpg")} alt="James_Bond" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularAuthors;