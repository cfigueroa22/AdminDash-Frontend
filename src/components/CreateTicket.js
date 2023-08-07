import axios from "axios";
import { useState, React } from "react";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const [data, setData] = useState({
    title: "",
    desc: "",
    priority: "",
    status: "",
    assignee: "",
  });

  const navigate = useNavigate();

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("priority", data.priority);
    formData.append("status", data.status);
    formData.append("assignee", data.assignee);
    axios

      .post(
        "https://admindash-server-production.up.railway.app/createTicket",
        data
      )
      .then((res) => {
        navigate("/tickets");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-2 bg-background">
      <div className="bg-divColor mx-3 rounded-md t:mx-20 l:mx-40 l:ml-72">
        <h1 className="flex justify-center font-roboto font-bold text-3xl t:p-5 t:text-4xl">
          Add Ticket
        </h1>
        <div className="my-4">
          <form onSubmit={handleSubmitTicket}>
            <div className="flex flex-col gap-3">
              <div className="ml-1 t:flex t:justify-center">
                <label className="font-roboto font-semibold text-xl t:text-2xl">
                  Ticket Information
                </label>
              </div>
              <div className="flex flex-col items-center gap-8">
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, title: e.target.value })}
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
                  placeholder="Priority"
                  id="priority"
                  className="w-80 rounded p-0.5"
                  onChange={(e) =>
                    setData({ ...data, priority: e.target.value })
                  }
                  autoComplete="off"
                ></input>

                <input
                  type="text"
                  placeholder="Status"
                  id="status"
                  className="w-80 rounded p-0.5"
                  onChange={(e) => setData({ ...data, status: e.target.value })}
                  autoComplete="off"
                ></input>
                <input
                  type="text"
                  placeholder="Assignee"
                  id="assignee"
                  className="w-80 rounded p-0.5"
                  onChange={(e) =>
                    setData({ ...data, assignee: e.target.value })
                  }
                  autoComplete="off"
                ></input>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary font-quicksand font-bold m-2 py-1 px-2 text-lg rounded text-white hover:bg-accent hover:cursor-pointer"
                >
                  Add Ticket
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
