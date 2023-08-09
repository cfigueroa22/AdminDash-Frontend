import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    job: "",
    department: "",
    manager: "",
    salary: "",
    status: "",
    photo: "",
    project: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    axios

      .get("https://employlink-fbfb01f12d56.herokuapp.com/get/" + id)
      .then((res) => {
        if (res.data.Result.length > 0) {
          const {
            name,
            email,
            dob,
            phone,
            address,
            city,
            state,
            zip,
            job,
            department,
            manager,
            salary,
            status,
            project,
          } = res.data.Result[0];
          setData((prevData) => ({
            ...prevData,
            name,
            email,
            dob,
            phone,
            address,
            city,
            state,
            zip,
            job,
            department,
            manager,
            salary,
            status,
            project,
          }));
        } else {
          console.log("Employee not found with the given ID");
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios

      .put("https://employlink-fbfb01f12d56.herokuapp.com/update/" + id, data)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/employee");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-2 bg-background ">
      <div className="bg-divColor mx-3 rounded-md t:mx-20 l:mx-40 l:ml-72">
        <h1 className="flex justify-center font-roboto font-bold text-3xl t:p-5 t:text-4xl">
          Update Employee
        </h1>
        <div className="my-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div className="ml-1 t:flex t:justify-center">
                <label className="text-xl font-roboto font-semibold t:text-2xl">
                  Employee Information
                </label>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    className="w-80 rounded p-0.5"
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data.name}
                    autoComplete="off"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    value={data.email}
                    autoComplete="off"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Date of Birth:
                  </label>
                  <input
                    type="text"
                    placeholder="Date of Birth"
                    id="dob"
                    className="w-80 rounded p-0.5"
                    onChange={(e) => setData({ ...data, dob: e.target.value })}
                    value={data.dob}
                    autoComplete="off"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    id="phone"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    value={data.phone}
                    autoComplete="off"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Street Address:
                  </label>
                  <input
                    type="text"
                    placeholder="Street Address"
                    id="street"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, address: e.target.value })
                    }
                    value={data.address}
                    autoComplete="off"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    City:
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    id="city"
                    className="w-80 rounded p-0.5"
                    onChange={(e) => setData({ ...data, city: e.target.value })}
                    autoComplete="off"
                    value={data.city}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    State:
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    id="state"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, state: e.target.value })
                    }
                    autoComplete="off"
                    value={data.state}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Zip Code:
                  </label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    id="zip"
                    className="w-80 rounded p-0.5"
                    onChange={(e) => setData({ ...data, zip: e.target.value })}
                    autoComplete="off"
                    value={data.zip}
                  ></input>
                </div>
              </div>

              <div className="ml-1 t:flex t:justify-center t:mt-10">
                <label className="text-xl font-roboto font-semibold t:text-2xl">
                  Employment Information
                </label>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Job Title:
                  </label>
                  <input
                    placeholder="Job Title"
                    id="job"
                    className="w-80 rounded p-0.5"
                    onChange={(e) => setData({ ...data, job: e.target.value })}
                    autoComplete="off"
                    value={data.job}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Department:
                  </label>
                  <input
                    placeholder="Department"
                    id="department"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, department: e.target.value })
                    }
                    autoComplete="off"
                    value={data.department}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Manager:
                  </label>
                  <input
                    placeholder="Manager"
                    id="manager"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, manager: e.target.value })
                    }
                    autoComplete="off"
                    value={data.manager}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Salary:
                  </label>
                  <input
                    placeholder="Salary"
                    id="salary"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, salary: e.target.value })
                    }
                    autoComplete="off"
                    value={data.salary}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Employment Status:
                  </label>
                  <input
                    placeholder="Employment Status"
                    id="status"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, status: e.target.value })
                    }
                    autoComplete="off"
                    value={data.status}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Project:
                  </label>
                  <input
                    placeholder="Project Name (Optional)"
                    id="project"
                    className="w-80 rounded mb-4 p-0.5"
                    onChange={(e) =>
                      setData({ ...data, project: e.target.value })
                    }
                    autoComplete="off"
                    value={data.project}
                  ></input>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary font-quicksand font-bold m-2 py-1 px-2 text-lg rounded text-white hover:bg-accent hover:cursor-pointer"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
