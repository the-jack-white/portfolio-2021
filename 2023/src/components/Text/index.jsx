/* eslint-disable react/prop-types */
const Text = ({ Size, Align, Weight, children, Custom }) => {
  return (
    <p
      className={Custom}
      style={{ fontSize: Size, textAlign: Align, fontWeight: Weight }}
    >
      {children}
    </p>
  );
};

export default Text;
