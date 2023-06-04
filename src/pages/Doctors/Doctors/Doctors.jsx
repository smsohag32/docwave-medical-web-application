import { useEffect, useState } from "react";
import { doctors } from "../../../apis/doctors";
import SectionTitle from "../../../components/Services/Services/Shared/SectionTitle";
import DoctorInfo from "../../../components/Doctor/DoctorInfo";
import { RingLoader } from "react-spinners";
import { Pagination } from "flowbite-react";
import DoctorsTab from "../../../components/Doctor/DoctorsTab";
import { useLoaderData } from "react-router-dom";
const Doctors = () => {
  // total doctors
  const { totalDoctors } = useLoaderData();

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const totalPage = Math.ceil(totalDoctors / limit);
  const pageNumbers = [...Array(totalPage).keys()].length;

  //   data load in db
  useEffect(() => {
    setLoading(true);
    doctors(currentPage, limit).then((data) => {
      console.log(data);
      setDoctorsData(data);
      setLoading(false);
    });
  }, [currentPage, limit]);

  // handle page change
  const handlePageChange = (e) => {
    setCurrentPage(e);
    console.log(e);
  };
  console.log(currentPage);
  if (loading) {
    return (
      <>
        <div className="w-full flex items-center justify-center h-[70vh]">
          <RingLoader color="#36d7b7" className="text-center " />
        </div>
      </>
    );
  }
  return (
    <div className="default-container">
      <SectionTitle title={"Chose your Needed doctors"} subTitle={"Be Free"} />
      <div className="flex items-center justify-center">
        <DoctorsTab />
      </div>
      <div className="grid grid-cols-1 mb-12 md:grid-cols-1 gap-12">
        {doctorsData.length > 0 &&
          doctorsData.map((doctor) => (
            <DoctorInfo key={doctor._id} doctor={doctor} />
          ))}
      </div>
      <div className="text-center mb-12">
        <Pagination
          currentPage={currentPage}
          onPageChange={(e) => handlePageChange(e)}
          showIcons
          totalPages={pageNumbers}
        />
      </div>
    </div>
  );
};

export default Doctors;
