/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import ApModal from "../Modal/ApModal";
import { useState } from "react";
import { appointmentPost } from "../../apis/doctors";
import useAuth from "../../hooks/useAuth";

const DoctorInfo = ({ doctor }) => {
  const { name, imageUrl, _id, specialization, hospital } = doctor;
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  // close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // appointment post in database
  const modalHandler = () => {
    const appointmentInfo = {
      apId: _id,
      name: user.name,
      email: user.email,
    };
    appointmentPost(appointmentInfo)
      .then((data) => {
        console.log(data);
        setIsOpen(false);
      })
      .catch((err) => console.log(err));
  };
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
        <Button
          onClick={() => setIsOpen(true)}
          gradientDuoTone="purpleToBlue"
          outline
        >
          Appointment
        </Button>
      </div>
      <ApModal
        isOpen={isOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
        doctor={doctor}
      />
    </div>
  );
};

export default DoctorInfo;
