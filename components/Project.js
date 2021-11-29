

export default function Project({ project }){
  return(
    <>
     <a href={project.url} target="_blank">
      <div className="project-card">
        <div className="project-img">
          <img src={project.img} />
        </div>
        <h5>{project.name}</h5>
        <p>{project.description}</p>
        {
          project.stack.map((tag) => (
             <p className="tag">#{tag}</p>)
          )
        }
      </div>
     </a>
    </>
    )
}