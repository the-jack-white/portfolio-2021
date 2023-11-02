import projects from "../../../lib/project-list";
import Project from "../../Project/Project";

const Lemverify = () => {
  return (
    <Project
      projectText="2020 - 2022"
      project={projects.lemverify}
      gridColumns="auto auto auto auto"
      width="80%"
    />
  );
};

export default Lemverify;
