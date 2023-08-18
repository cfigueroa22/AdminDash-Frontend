import axios from "axios";
import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateProject = () => {
  const [data, setData] = useState({
    name: "",
    desc: "",
    status: "",
  });

  const navigate = useNavigate();

  const handleSubmitProject = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("desc", data.desc);
    formData.append("status", data.status);
    axios

      .post("https://employlink-fbfb01f12d56.herokuapp.com/createProject", data)
      .then((res) => {
        navigate("/projects");
        toast.info("Project Created", {
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
          Add Project
        </h1>
        <div className="my-4">
          <form onSubmit={handleSubmitProject}>
            <div className="flex flex-col gap-3">
              <div className="ml-1 t:flex t:justify-center">
                <label className="font-roboto font-semibold text-xl t:text-2xl">
                  Project Information
                </label>
              </div>
              <div className="flex flex-col items-center gap-8">
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  autoComplete="off"
                ></input>
                <textarea
                  type="text"
                  placeholder="Description"
                  id="desc"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, desc: e.target.value })}
                  autoComplete="off"
                ></textarea>
                <input
                  type="text"
                  placeholder="Status"
                  id="status"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, status: e.target.value })}
                  autoComplete="off"
                ></input>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary font-quicksand font-bold m-2 py-1 px-2 text-lg rounded text-white hover:bg-accent hover:cursor-pointer"
                >
                  Add Project
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
