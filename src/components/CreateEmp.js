import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const CreateEmp = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("dob", data.dob);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("zip", data.zip);
    formData.append("job", data.job);
    formData.append("department", data.department);
    formData.append("manager", data.manager);
    formData.append("salary", data.salary);
    formData.append("status", data.status);
    formData.append("photo", data.photo);
    formData.append("project", data.project);
    axios
      .post("https://employlink-fbfb01f12d56.herokuapp.com/create", formData)
      .then((res) => {
        navigate("/employee");
        toast.info("Employee Created", {
          position: "top-center",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="my-2 bg-background">
      <div className="bg-divColor mx-3 rounded-md t:mx-20 l:mx-40 l:ml-72">
        <h1 className="flex justify-center font-roboto font-bold text-3xl t:p-5 t:text-4xl">
          Add Employee
        </h1>
        <div className="my-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div className="ml-1 t:flex t:justify-center">
                <label className="font-roboto font-semibold text-xl t:text-2xl">
                  Employee Information
                </label>
              </div>
              <div className="flex flex-col items-center gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  autoComplete="off"
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  autoComplete="off"
                ></input>
                <input
                  type="text"
                  placeholder="Password"
                  id="password"
                  className="w-80 rounded p-0.5"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  autoComplete="off"
                ></input>

                <input
                  type="text"
                  placeholder="Date of Birth"
                  id="dob"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, dob: e.target.value })}
                  autoComplete="off"
                ></input>
                <input
                  type="text"
                  placeholder="Phone Number"
                  id="phone"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  autoComplete="off"
                ></input>
                <input
                  type="text"
                  placeholder="Street Address"
                  id="street"
                  className="w-80 rounded p-0.5"
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                  autoComplete="off"
                ></input>
                <input
                  type="text"
                  placeholder="City"
                  id="city"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, city: e.target.value })}
                  autoComplete="off"
                ></input>
                <input
                  type="text"
                  placeholder="State"
                  id="state"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, state: e.target.value })}
                  autoComplete="off"
                ></input>
                <input
                  type="text"
                  placeholder="Zip Code"
                  id="zip"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, zip: e.target.value })}
                  autoComplete="off"
                ></input>
              </div>

              <div className="ml-1 t:flex t:justify-center t:mt-10">
                <label className="font-roboto font-semibold text-xl t:text-2xl">
                  Employment Information
                </label>
              </div>
              <div className="flex flex-col items-center gap-3">
                <input
                  placeholder="Job Title"
                  id="job"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, job: e.target.value })}
                  autoComplete="off"
                ></input>
                <input
                  placeholder="Department"
                  id="department"
                  className="w-80 rounded p-0.5"
                  onChange={(e) =>
                    setData({ ...data, department: e.target.value })
                  }
                  autoComplete="off"
                ></input>
                <input
                  placeholder="Manager"
                  id="manager"
                  className="w-80 rounded p-0.5"
                  onChange={(e) =>
                    setData({ ...data, manager: e.target.value })
                  }
                  autoComplete="off"
                ></input>
                <input
                  placeholder="Salary"
                  id="salary"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, salary: e.target.value })}
                  autoComplete="off"
                ></input>
                <input
                  placeholder="Employment Status"
                  id="status"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, status: e.target.value })}
                  autoComplete="off"
                ></input>

                <input
                  type="file"
                  id="photo"
                  className="w-80 rounded p-0.5 "
                  onChange={(e) =>
                    setData({ ...data, photo: e.target.files[0] })
                  }
                  autoComplete="off"
                ></input>
                <input
                  placeholder="Project Name (Optional)"
                  id="project"
                  className="w-80 rounded mb-4 p-0.5"
                  onChange={(e) =>
                    setData({ ...data, project: e.target.value })
                  }
                  autoComplete="off"
                ></input>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary font-quicksand font-bold m-2 py-1 px-2 text-lg rounded text-white hover:bg-accent hover:cursor-pointer"
                >
                  Add Employee
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEmp;
