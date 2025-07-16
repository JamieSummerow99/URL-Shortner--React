import Cards from "./Cards";

const Cards = () => {
  return (
    <div className="stats__cards">
      <Card
        className="brand"
        alt="Brand Image"
        title="Brand Recognition"
        description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
      />

      <Card
        className="detailed"
        alt="Detailed Records"
        title="Detailed Records"
        description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
      />

      <Card
        className="custom"
        alt="Fully Customizable"
        title="Fully Customizable"
        description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
      />
    </div>
  );
};

export default Cards;
