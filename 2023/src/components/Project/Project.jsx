/* eslint-disable react/prop-types */
import Grids from "../Grids";
import Text from "../Text";

const Project = ({ projectText, project, gridColumns, width }) => {
  return (
    <div>
      <Text Size="30px" Align="center" Weight="100" Custom="biz2click-header">
        {projectText}
      </Text>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grids GridItems={project} GridColumns={gridColumns} Width={width} />
      </div>
    </div>
  );
};

export default Project;
