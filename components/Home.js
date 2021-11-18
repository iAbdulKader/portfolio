import styles from '../styles/Home.module.css';
import Typewriter from 'typewriter-effect';

export default function DashBoard() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.landingText}>
             <h1>Hello<span className={styles.redDot}>,</span></h1>
             <h3>I&apos;m Abdul Kader<span className={styles.redDot}>.</span></h3>
             <h3>A Passionate Full Stack Developer<span className={styles.redDot}>.</span></h3>
             <h4>Experienced In <span className={styles.typeText}>
               <Typewriter
                  className={styles.typeText}
                  options={{
                  strings: [
                  'ReactJS',
                  'NextJS',
                  'Redux',
                  'ExpressJS',
                  'MongoDB',
                  'Socet.io',
                  'Google API',
                  'AWS',
                  'GCP'
                  ],
                  autoStart: true,
                  loop: true,
                  cursorClassName: "cursor"
                }}
               />
             </span></h4>
        </div>
      </div>
    </>
    )
}