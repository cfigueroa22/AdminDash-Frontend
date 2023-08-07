import axios from "axios";
import { useEffect, useState, React } from "react";
import { Link } from "react-router-dom";

const Employee = () => {
  const [data, setData] = useState([]);
  const [showMoreInfo, setShowMoreInfo] = useState([]);
  const [flexRowClasses, setFlexRowClasses] = useState(
    new Array(1).fill(false)
  );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/getEmployees`)
      .then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
          setShowMoreInfo(new Array(res.data.Result.length).fill(false));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleToggleInformation = (index) => {
    const updatedShowMoreInfo = [...showMoreInfo];
    updatedShowMoreInfo[index] = !updatedShowMoreInfo[index];
    setShowMoreInfo(updatedShowMoreInfo);

    const updatedFlexRowClasses = [...flexRowClasses];
    updatedFlexRowClasses[index] = !updatedFlexRowClasses[index];
    setFlexRowClasses(updatedFlexRowClasses);
  };

  const handleDelete = (id) => {
    axios

      .delete(`${process.env.REACT_APP_BACKEND_URL}/delete/` + id)
      .then((res) => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-background">
      <div className="flex flex-row items-center justify-between mb-10">
        <h1 className="font-roboto font-bold text-4xl py-5 ml-5 l:ml-44">
          Employees
        </h1>
        <Link
          to="/create"
          className="bg-primary font-quicksand font-bold text-white text-xs py-2 px-1 rounded mr-2 hover:bg-accent hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300"
        >
          Add Employee
        </Link>
      </div>
      <div className="flex flex-col mx-1 l:ml-40">
        <div className=" w-full">
          {data.map((employee, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div
                key={employee.id}
                className="flex flex-col t:flex-row border-b-2 border-lightGray mb-8 mx-5 t:items-center t:pb-10"
              >
                <div className="mb-7 w-56 mx-auto t:mx-0">
                  <img src={"/images/" + employee.photo} alt="emp" />
                </div>
                <div
                  key={index}
                  id="info-section"
                  className={`flex flex-col t:mx-auto l:flex-row ${
                    flexRowClasses[index] ? "l:flex-col" : ""
                  }`}
                  // className="flex flex-col t:mx-auto l:flex-row"
                >
                  <div className="l:px-3.5">
                    <div className="font-quicksand font-bold text-gray ">
                      Name:
                    </div>
                    <div className="font-roboto font-light">
                      {employee.name}
                    </div>
                  </div>
                  <div className="l:px-3.5">
                    <div className="font-quicksand font-bold text-gray ">
                      E-Mail:
                    </div>
                    <div className="font-roboto font-light">
                      {employee.email}
                    </div>
                  </div>
                  <div className="l:px-3.5">
                    <div className="font-quicksand font-bold text-gray ">
                      Phone Number:
                    </div>
                    <div className="font-roboto font-light">
                      {employee.phone}
                    </div>
                  </div>
                  <div className="l:px-3.5">
                    <div className="font-quicksand font-bold text-gray">
                      Address:
                    </div>
                    <div>
                      <div className="font-roboto font-light">
                        {" "}
                        {employee.address}
                      </div>
                      <div className="font-roboto font-light">
                        {employee.city}, {employee.state}
                      </div>
                      <div className="font-roboto font-light">
                        {" "}
                        {employee.zip}
                      </div>
                    </div>
                  </div>
                  <div className="l:px-3.5">
                    <div className="font-quicksand font-bold text-gray">
                      Date of Birth:
                    </div>
                    <div className="font-roboto font-light">{employee.dob}</div>
                  </div>
                </div>
                {showMoreInfo[index] && (
                  <div className="flex flex-col t:mx-auto">
                    <div className="font-quicksand font-bold text-gray">
                      Job:
                    </div>
                    <div className="font-roboto font-light">{employee.job}</div>
                    <div className="font-quicksand font-bold text-gray">
                      Department:
                    </div>
                    <div className="font-roboto font-light">
                      {employee.department}
                    </div>
                    <div className="font-quicksand font-bold text-gray">
                      Manager:
                    </div>
                    <div className="font-roboto font-light">
                      {employee.manager}
                    </div>
                    <div className="font-quicksand font-bold text-gray">
                      Salary:
                    </div>
                    <div className="font-roboto font-light">
                      {employee.salary}
                    </div>
                    <div className="font-quicksand font-bold text-gray">
                      Employment Status:
                    </div>
                    <div className="font-roboto font-light">
                      {employee.status}
                    </div>
                    <div className="font-quicksand font-bold text-gray">
                      Project:
                    </div>
                    <div className="font-roboto font-light">
                      {employee.project}
                    </div>
                  </div>
                )}
                <div className="mb-8 t:flex t:flex-col">
                  {" "}
                  <Link
                    to={`/employeeEdit/` + employee.id}
                    className="bg-pastelGreen font-quicksand font-bold text-white py-1 px-2  rounded m-1 hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300  hover:bg-green t:text-center"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="bg-error font-quicksand font-bold text-white py-0.5 px-1 rounded m-1 hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-red"
                  >
                    Delete
                  </button>
                  <button
                    id="more"
                    onClick={() => handleToggleInformation(index)}
                    className="bg-pastelOrange font-quicksand font-bold  text-white py-0.5 px-1 rounded m-1 hover:cursor-pointer  hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-orange"
                  >
                    More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Employee;
