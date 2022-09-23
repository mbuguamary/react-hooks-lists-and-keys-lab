import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesitems= technologies.map((items)=>(
  <span key={items}>{items}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
       <p>{technologiesitems}</p> 
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
