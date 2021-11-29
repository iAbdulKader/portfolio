import styles from '../styles/Home.module.css';
import Project from './Project';
import { projectsList } from '../lib/Projects/projects';

export default function Projects(){
  
  return(
    <>
      <div className={styles.aboutContainer}>
        <h1>Projects</h1>
        {
          projectsList.map((project) =>
          <Project key={project.name} project={project} />
          )
        }
        
      </div>
    </>
    )
}