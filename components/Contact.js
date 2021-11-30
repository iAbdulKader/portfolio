import styles from '../styles/Home.module.css';
import { Icon } from '@iconify/react';

export default function Contact(){
  return(
    <>
      <div className={styles.aboutContainer}>
        <h1>Contact</h1>
        <div className="contact-icons">
          <a href="https://github.com/iabdulkader" target="_blank" rel="noreferrer">
            <Icon className="contact-icon" icon="akar-icons:github-fill" width="40" height="40" />
          </a>
          <a href="mailto:abdulkadernow@gmail.com">
            <Icon className="contact-icon" icon="ic:round-email" width="40" height="40" />
          </a>
          <a href="https://twitter.com/itsabdulkader" target="_blank" rel="noreferrer">
            <Icon className="contact-icon" icon="akar-icons:twitter-fill" width="40" height="40" />
          </a>
          <a href="https://instagram.com/itsabdulkader" target="_blank" rel="noreferrer">
            <Icon className="contact-icon" icon="ant-design:instagram-filled" width="40" height="40" />
          </a>
          <a href="https://www.linkedin.com/in/itsabdulkader" target="_blank" rel="noreferrer">
            <Icon className="contact-icon" icon="akar-icons:linkedin-fill" width="40" height="40" />
          </a>
          <a href="https://dev.to/itsabdulkader" target="_blank" rel="noreferrer">
            <Icon className="contact-icon" icon="bx:bxl-dev-to" width="40" height="40" />
          </a>
        </div>
      </div>
    </>
    )
}