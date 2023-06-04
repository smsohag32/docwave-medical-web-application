import SectionTitle from "../../../components/Services/Services/Shared/SectionTitle";
import useAuth from "../../../hooks/useAuth";

const UserAppointment = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <SectionTitle
          title={`Hi! ${user?.displayName}`}
          subTitle={"My Appointment"}
        ></SectionTitle>
      </div>

      <div></div>
    </div>
  );
};

export default UserAppointment;
