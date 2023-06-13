import "../Main.scss";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <div {...props} className={"next"} onClick={onClick} />;

}

export default SampleNextArrow;
