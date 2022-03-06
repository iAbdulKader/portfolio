import styles from '../styles/Home.module.css';
import {useState, useEffect} from "react";
import TextTransition, { presets } from "react-text-transition";

export default function DashBoard() {
  let strings = [
    'ReactJS',
    'NextJS',
    'Redux',
    'ExpressJS',
    'MongoDB',
    'Socet.io',
    'Google API',
    'AWS',
    'GCP'
  ]
      
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      1500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.landingText}>
             <h1>Hello<span className={styles.redDot}>,</span></h1>
             <h3>I&apos;m Abdul Kader<span className={styles.redDot}>.</span></h3>
             <h3>A Passionate Full Stack Developer<span className={styles.redDot}>.</span></h3>
             <h4>Experienced In <span className={styles.typeText}>
               <TextTransition
                  text={ strings[index % strings.length] }
                  springConfig={ presets.wobbly }
                  inline
                  className={styles.typeText}
              />
              
             </span></h4>
        </div>
      </div>
    </>
    )
}