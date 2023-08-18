import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Projects = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios

      .get("https://employlink-fbfb01f12d56.herokuapp.com/getProjects")
      .then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProjects = (id) => {
    axios

      .delete(
        "https://employlink-fbfb01f12d56.herokuapp.com/deleteProjects/" + id
      )
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
          toast.success("Project Deleted", {
            position: "top-center",
            autoClose: 2200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-background">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-roboto font-bold text-4xl py-5 ml-5 l:ml-44">
          Projects
        </h1>
        <Link
          to="/createProject"
          className="bg-primary font-quicksand font-bold text-white text-xs py-2 px-1 rounded mr-2 hover:bg-accent hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300"
        >
          Add Project
        </Link>
      </div>
      <div className="l:ml-40">
        <div className=" w-auto">
          <div className="hidden">
            <h1>Name</h1>
            <h1>Description</h1>
            <h1>Status</h1>
          </div>
          <div>
            {data.map((project, index) => {
              return (
                <div className="flex flex-col mt-5" key={index}>
                  <p className="text-gray font-quicksand font-bold mt-0.5 ml-5">
                    Name:
                  </p>
                  <p className="font-roboto font-light ml-5">{project.name}</p>
                  <p className="text-gray font-quicksand font-bold mt-0.5 ml-5">
                    Description:
                  </p>
                  <p className="font-roboto font-light ml-5">{project.desc}</p>
                  <p className="text-gray font-quicksand font-bold mt-0.5 ml-5">
                    Status:
                  </p>
                  <p className="font-roboto font-light ml-5">
                    {project.status}
                  </p>
                  <div className="flex justify-end mr-5">
                    <Link
                      to={`/projectEdit/` + project.id}
                      className="bg-pastelGreen font-quicksand font-bold text-white py-1 px-2  rounded m-1 hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300  hover:bg-green"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProjects(project.id)}
                      className="bg-error font-quicksand font-bold text-white py-0.5 px-1 rounded m-1 hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-red"
                    >
                      Delete
                    </button>
                  </div>
                  <div className=" items-center w-auto mx-3 my-5 border-2 border-lightGray"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
