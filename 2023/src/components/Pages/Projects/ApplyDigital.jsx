import projects from "../../../lib/project-list";
import Project from "../../Project/Project";

import "../index.css";

const ApplyDigital = () => {
  return (
    <Project
      projectText="2022 - Present"
      project={projects.applydigital}
      gridColumns="auto auto"
      width="80%"
    />
  );
};

export default ApplyDigital;
