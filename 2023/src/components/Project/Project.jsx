/* eslint-disable react/prop-types */
import Grids from "../Grids";
import Text from "../Text";

const Project = ({ projectText, project }) => {
  return (
    <div>
      <Text Size="30px" Align="center" Weight="100" Custom="biz2click-header">
        {projectText}
      </Text>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grids GridItems={project} GridColumns="auto auto auto" Width="60%" />
      </div>
    </div>
  );
};

export default Project;
