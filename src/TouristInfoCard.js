// headerName, link, bodyName, srcImage
const TouristInfoCard = (props) => {
  return (
    <div className="card">
      <img
        alt="tourist highlight"
        src={
          props.srcImage ||
          "https://media.istockphoto.com/id/501069066/vector/jumping-castle-children.jpg?s=612x612&w=is&k=20&c=_BGPsChxgmHVIewaGJ1qyKH679GGETn2uNGlAnGoUak="
        }
        className="card-img-top"
        style={{ width: "40px", height: "40px" }}
      />
      COME TO {props.headerName}
      <div className="card-body">
        <a href={props.link} className="btn btn-primary">
          Go somewhere
        </a>
        This is telling you to go to {props.bodyName}
      </div>
    </div>
  );
};

export default TouristInfoCard;
