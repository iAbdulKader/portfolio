import Logos from './Logos'
import { Icon } from '@iconify/react';

export default function Project({ project }){
  
  
  return(
    <>
     <a href={project.url} target="_blank" rel="noreferrer">
      <div className="project-card">
        <div className="project-img">
           <Logos index={project.index} />
        </div>
        <h5>{project.name}</h5>
        <p>{project.description}</p>
        {
         
          project.stack.map((tag) => (
            tag == "nextjs" ? 
            (<Icon className="tagImg" icon="logos:nextjs-icon" width="25" height="25" />) :
            tag == "ejs" ?
             (<Icon className="tagImg" icon="file-icons:ejs" width="25" height="25" />) :
             (<Icon className="tagImg" icon={`simple-icons:${tag}`} width="25" height="25" />)
             )
          )
        }
      </div>
     </a>
    </>
    )
}

  
  