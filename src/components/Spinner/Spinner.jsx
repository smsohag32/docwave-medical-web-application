import { RingLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="w-full flex items-center justify-center h-[70vh]">
      <RingLoader color="#36d7b7" className="text-center " />
    </div>
  );
};

export default Spinner;
