import projects from "../../../lib/project-list";
import Project from "../../Project/Project";

import "../index.css";

const Biz2click = () => {
  return (
    <Project
      projectText="2017 - 2019"
      project={projects.biz2click}
      gridColumns="auto auto auto"
      width="60%"
    />
  );
};

export default Biz2click;
