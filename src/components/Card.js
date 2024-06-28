const Card = ({ shoes, i }) => {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"}
        width="80%"
      />
      <h5>{shoes.title}</h5>
      <p>{shoes.price}</p>
    </div>
  );
};

export default Card;
