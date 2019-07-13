import React from 'react';
import faker from 'faker';
import styles from "../app.css";

const ModalFooter = (props) => {
  return(
    <div>
        <div onClick={props.modalFooterClicked} className={styles.modalFooter} style={{overflow: props.overflow, height: props.height}}>
                  <div className={styles.modalInnerFooter}>
                    <div className={styles.smallImgContainer}>
                      <img className={styles.smallImg} src="https://fec-hrsf119.s3-us-west-1.amazonaws.com/im1.jpg" alt="Room image"></img>
                    </div>
                    <div className={styles.modalFooterInfo}>
                      <span><p className={styles.modalRoomname}>ENTIRE VILLA - Atami-Shi</p></span>
                      <span><p className={styles.modalRoomLocation}>Y's Village Fukuori</p></span>
                      <div className={styles.reviewsContainerModal}>
                        <div className={styles.starContainerModal}>
                          <svg className={styles.starImg} viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                          <svg className={styles.starImg} viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                          <svg className={styles.starImg} viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                          <svg className={styles.starImg} viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                          <svg className={styles.starImg} viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#D8D8D8'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
          </div>
          <div className={styles.modalAboutSection}>
          <hr className={styles.horizontalRule}></hr>
            <div className={`${styles.modalAboutListing} ${styles.modalReviewsContainers}`}>
              <h2 className={styles.modalReviewsTitles}>About this listing</h2>
              <p className={styles.modalReviewsPara}>{faker.lorem.paragraphs()}</p>
            </div>
            <hr className={styles.horizontalRule}></hr>
            <div className={`${styles.modalAboutSpace} ${styles.modalReviewsContainers}`}>
              <h2 className={styles.modalReviewsTitles}>About space</h2>
              <p className={styles.modalReviewsPara}>{faker.lorem.sentences()}</p>
            </div>
            <hr className={styles.horizontalRule}></hr>
            <div className={`${styles.modalAboutNeighborhoods} ${styles.modalReviewsContainers}`}>
              <h2 className={styles.modalReviewsTitles}>Neighborhood</h2>
              <p className={styles.modalReviewsPara}>{faker.lorem.paragraph()}</p>
            </div>
            <hr className={styles.horizontalRule}></hr>
            <div className={styles.modalReviewsContainers}>
              <h2 className={styles.modalReviewsTitles}>Reviews</h2>
              <p className={styles.modalReviewsPara}>{faker.lorem.paragraphs()}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ModalFooter;