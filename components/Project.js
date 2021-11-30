import Logos from './Logos'
import { Icon } from '@iconify/react';

export default function Project({ project }){
  
  
  return(
    <>
     <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
      <div className="project-card">
        <div className="project-img">
           <Logos index={project.index} />
        </div>
        <h5>{project.name}</h5>
        <p>{project.description}</p>
        {
         
          project.stack.map((tag) =>
            (<Icon key={tag} className="tagImg" icon={tag} width="25" height="25" />)
          )
        }
      </div>
     </a>
    </>
    )
}

  
  