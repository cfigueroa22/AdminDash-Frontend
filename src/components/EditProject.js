import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const [data, setData] = useState({
    name: "",
    desc: "",
    status: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    axios

      .get(`${process.env.REACT_APP_BACKEND_URL}/getProject/` + id)
      .then((res) => {
        if (res.data.Result.length > 0) {
          const { name, desc, status } = res.data.Result[0];
          setData((prevData) => ({
            ...prevData,
            name,
            desc,
            status,
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

      .put(`${process.env.REACT_APP_BACKEND_URL}/updateProject/` + id, data)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/projects");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-2 bg-background">
      <div className="bg-divColor mx-3 rounded-md t:mx-20 l:mx-40 l:ml-72">
        <h1 className="flex justify-center font-roboto font-bold text-3xl t:p-5 t:text-4xl">
          Update Project
        </h1>

        <div className="my-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div className="ml-1 t:flex t:justify-center">
                <label className=" text-xl t:text-2xl">
                  Project Information
                </label>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col">
                  <label className="font-quicksand font-bold text-gray">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-80 rounded p-0.5"
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data.name}
                    autoComplete="off"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-quicksand font-bold text-gray">
                    Description:
                  </label>
                  <textarea
                    type="text"
                    id="desc"
                    className="w-80 rounded p-0.5"
                    onChange={(e) => setData({ ...data, desc: e.target.value })}
                    value={data.desc}
                    autoComplete="off"
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label className="font-quicksand font-bold text-gray">
                    Status:
                  </label>
                  <input
                    type="text"
                    id="status"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, status: e.target.value })
                    }
                    value={data.status}
                    autoComplete="off"
                  ></input>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
