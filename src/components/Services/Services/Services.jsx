import doctor from "../../../assets/image.webp";
import Tabs from "./Tabs";
const Services = () => {
  return (
    <div className="grid items-center pt-12 default-container md:grid-cols-2 gap-3">
      <div>
        <img src={doctor} alt="doctor" />
      </div>
      <div className="space-y-3">
        <h2 className="tex-3xl md:text-5xl text-center">Our Services</h2>
        <p className="ms-4 opacity-50">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          quibusdam aperiam veniam cupiditate eaque nisi quia eligendi quod quo
          nulla nemo unde magni, perspiciatis vero, dolores consequatur repellat
          hic praesentium.
        </p>

        <div>
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default Services;
