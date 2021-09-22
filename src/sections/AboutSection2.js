import Goat1 from "../assets/images/goat6.png";
import Goat1_1 from "../assets/images/goat6_2.png";
import Goat2 from "../assets/images/goat7.png";
import Goat2_1 from "../assets/images/goat7_2.png";

const AboutSection2 = () => {
  return (
    <section className="py-24 text-white text-center">
      <div className="container flex">
        <div className="w-1/2">
          <div
            className="bg-cardbg  py-8 px-14 rounded-lg mb-8"
            style={{ border: "3px solid #C98769 ", minHeight: 280 }}
          >
            <h3 className="text-4xl">Goatanomics</h3>
            <p
              className="font-serif mt-6 text-sm"
              style={{ lineHeight: "24px" }}
            >
              The team has reserved 100 Viral Goats for community giveaways,
              contests, and the team. These will be chosen at random and will
              not be early editions. All remaining Viral Goats are up for sale.
              Everyone should have an equal opportunity to be a member of the
              Viral Goats community. This means there will be no bidding war and
              no bonding curves. Viral Goats will be available for a fixed and
              affordable price.
            </p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <img src={Goat1} alt="" />
            <img src={Goat1_1} alt="" />
          </div>
        </div>
        <div className="w-1/2">
          <div
            className="bg-violet py-8 px-14 rounded-lg md:ml-4 mb-8"
            style={{ border: "3px solid #C98769", minHeight: 280 }}
          >
            <h3 className="text-4xl">LOREM IPSUM</h3>
            <p
              className="font-serif mt-6 text-sm"
              style={{ lineHeight: "24px" }}
            >
              A select handful of Viral Goats have stumbled on a trove of
              treasure! A portion of the initial sale proceeds will be
              airdropped to these unique Viral Goat holders. Viral Goats will be
              deflationary over time. 10% of all future royalties from secondary
              sales will be dedicated to purchasing Viral Goats at the floor
              price to be burnt.
            </p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <img src={Goat2} alt="" />
            <img src={Goat2_1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
