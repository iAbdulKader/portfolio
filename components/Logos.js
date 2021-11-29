export default function({ index }){
  return(
    <>
    {
      index == 1 ?
        (<div>
          <h1 className="josharePrimary">jo</h1><h1 className="joshareSecondary">SHARE</h1>
         </div>) 
      : index == 2 ?
          (<div>
          <h1 className="alink">
           aLink!<span className="koma">,</span></h1>
         </div>) 
      : index == 3 ?
          (<div>
          <h1 className="jobin">jobin</h1>
         </div>)
      : index == 4 ?
          (<div>
          <h1>1337x API</h1>
         </div>)
      : null
    }
    </>
    )
}