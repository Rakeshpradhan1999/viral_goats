import Roadmap from "../assets/images/roadmap.png";

const RoadmapSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-5xl text-primary uppercase text-center">
          Our Roadmap
        </h2>
        <div className="my-32">
          <img src={Roadmap} alt="" />
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
