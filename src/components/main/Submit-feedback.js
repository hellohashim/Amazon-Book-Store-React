import styles from "./Submit-feedback.module.css";

function SubmitFeedback()
{
    return(
        <section className={`${styles["main-submit-feedback-section"]}`}>
            <div className={`${styles["main-submit-feedback-container"]}`}>
                <p>
                    If you have any feedback on this page, we would appreciate hearing from you. 
                    <a href="https://amazonexteu.qualtrics.com/jfe/form/SV_cG4KlBWf1ryRp54?_encoding=UTF8&node=283155&pf_rd_p=afd474d2-0b0f-4c48-a1cf-19907223ff22&pf_rd_r=RCDKWHN2Y4BQ9F3DS3TR&ref_=usf_disclaimer_283155">
                         Submit your feedback here.
                    </a>
                </p>
            </div>
        </section>        
    )
}

export default SubmitFeedback;