import "../Main.scss";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div {...props} className={"prev"} onClick={onClick} />;
}

export default SamplePrevArrow;
