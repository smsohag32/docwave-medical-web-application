/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";

const DoctorInfo = ({ doctor }) => {
  const { name, imageUrl, specialization, hospital } = doctor;
  return (
    <div className="hover:scale-y-105 duration-500 transform gap-8 border-2 w-full flex h-40 items-center">
      <div className="h-full w-1/2">
        <img className="h-full w-full" src={imageUrl} alt="doctor" />
      </div>
      <div className="w-full space-y-3 mb-5">
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="secondary-text">{specialization}</p>
        <p className="secondary-text">{hospital}</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Button gradientDuoTone="purpleToBlue" outline>
          Appointment
        </Button>
      </div>
    </div>
  );
};

export default DoctorInfo;
