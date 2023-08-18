import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProject = () => {
  const [data, setData] = useState({
    title: "",
    desc: "",
    priority: "",
    status: "",
    assignee: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    axios

      .get("https://employlink-fbfb01f12d56.herokuapp.com/getTicket/" + id)
      .then((res) => {
        if (res.data.Result.length > 0) {
          const { title, desc, priority, status, assignee } =
            res.data.Result[0];
          setData((prevData) => ({
            ...prevData,
            title,
            desc,
            priority,
            status,
            assignee,
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

      .put(
        "https://employlink-fbfb01f12d56.herokuapp.com/updateTicket/" + id,
        data
      )
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/tickets");
          toast.info("Ticket Updated", {
            position: "top-center",
            autoClose: 2200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-2 bg-background">
      <div className="bg-divColor mx-3 rounded-md t:mx-20 l:mx-40 l:ml-72">
        <h1 className="flex justify-center font-roboto font-bold text-3xl t:p-5 t:text-4xl">
          Update Ticket
        </h1>
        <div className="my-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div className="ml-1 t:flex t:justify-center">
                <label className="text-xl font-roboto font-semibold  t:text-2xl">
                  Ticket Information
                </label>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                    value={data.title}
                    autoComplete="off"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
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
                  <label className="font-bold font-quicksand text-gray">
                    Priority:
                  </label>
                  <input
                    type="text"
                    id="priority"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, priority: e.target.value })
                    }
                    value={data.priority}
                    autoComplete="off"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
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
                <div className="flex flex-col">
                  <label className="font-bold font-quicksand text-gray">
                    Assignee:
                  </label>
                  <input
                    type="text"
                    id="assignee"
                    className="w-80 rounded p-0.5"
                    onChange={(e) =>
                      setData({ ...data, assignee: e.target.value })
                    }
                    value={data.assignee}
                    autoComplete="off"
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

export default EditProject;
