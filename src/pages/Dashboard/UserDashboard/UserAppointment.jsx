import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Services/Services/Shared/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { getAppointment } from "../../../apis/appointment";
import Spinner from "../../../components/Spinner/Spinner";

const UserAppointment = () => {
  const { user } = useAuth();
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const email = user?.email;
    getAppointment(email).then((data) => {
      setAppointment(data);
      setLoading(false);
    });
  }, [user]);
  console.log(appointment);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div>
        <SectionTitle
          title={`Hi! ${user?.displayName}`}
          subTitle={"My Appointment"}
        ></SectionTitle>
      </div>

      <div className="flex justify-between mt-12">
        <h1 className="text-xl">
          Total appointment pending: {appointment.length}
        </h1>
        <h1 className="text-xl">Approve Appointment: {appointment.length}</h1>
      </div>
    </div>
  );
};

export default UserAppointment;
