import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Tickets = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios

      .get("https://employlink-fbfb01f12d56.herokuapp.com/getTickets")
      .then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteTicket = (id) => {
    axios

      .delete(
        "https://employlink-fbfb01f12d56.herokuapp.com/deleteTickets/" + id
      )
      .then((res) => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
          navigate("/tickets");
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-background">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-roboto font-bold py-5 ml-5 l:ml-44">
          Tickets
        </h1>
        <Link
          to="/createTicket"
          className="bg-primary  text-white font-quicksand font-bold text-xs py-2 px-1 rounded mr-2 hover:bg-accent hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300"
        >
          Add Ticket
        </Link>
      </div>{" "}
      <div className="l:ml-40">
        <div className=" w-auto">
          <div className="hidden">
            <h1>Title</h1>
            <h1>Description</h1>
            <h1>Priority</h1>
            <h1>Status</h1>
            <h1>Assignee</h1>
          </div>
          <div>
            {data.map((ticket, index) => {
              return (
                <div className="flex flex-col mt-5" key={index}>
                  <p className="text-gray font-quicksand font-bold mt-0.5 ml-5">
                    Title:
                  </p>
                  <p className="ml-5 font-roboto font-light">{ticket.title}</p>
                  <p className="text-gray font-quicksand font-bold mt-0.5 ml-5">
                    Description:
                  </p>
                  <p className="ml-5 font-roboto font-light">{ticket.desc}</p>
                  <p className="text-gray font-quicksand font-bold mt-0.5 ml-5">
                    Priority:
                  </p>
                  <p className="ml-5 font-roboto font-light">
                    {ticket.priority}
                  </p>
                  <p className="text-gray font-quicksand font-bold mt-0.5 ml-5">
                    Status:
                  </p>
                  <p className="ml-5 font-roboto font-light">{ticket.status}</p>
                  <p className="text-gray font-quicksand font-bold mt-0.5 ml-5">
                    Assignee:
                  </p>
                  <p className="ml-5 font-roboto font-light">
                    {ticket.assignee}
                  </p>
                  <div className="flex justify-end mr-5">
                    <Link
                      to={`/ticketEdit/` + ticket.id}
                      className="bg-pastelGreen text-white font-quicksand font-bold py-1 px-2  rounded m-1 hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300  hover:bg-green"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteTicket(ticket.id)}
                      className="bg-error text-white font-quicksand font-bold py-0.5 px-1 rounded m-1 hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-red"
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

export default Tickets;
