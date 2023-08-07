import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto"; // Import Chart.js

const Home = () => {
  const [employeeCount, setEmployeeCount] = useState();
  const [projectCount, setProjectCount] = useState();
  const [ticketCount, setTicketCount] = useState();
  const [fullTimeEmployees, setFullTimeEmployees] = useState();
  const [partTimeEmployees, setPartTimeEmployees] = useState();
  const [openProjects, setOpenProjects] = useState();
  const [closedProjects, setClosedProjects] = useState();
  const [ticketsToDo, setTicketsToDo] = useState();
  const [ticketsInProgress, setTicketsInProgress] = useState();

  useEffect(() => {
    axios

      .get("https://admindash-server-production.up.railway.app/employeeCount")
      .then((res) => {
        setEmployeeCount(res.data[0].employee);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios

      .get("https://admindash-server-production.up.railway.app/projectCount")
      .then((res) => {
        setProjectCount(res.data[0].project);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios

      .get("https://admindash-server-production.up.railway.app/ticketCount")
      .then((res) => {
        setTicketCount(res.data[0].ticket);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios

      .get(
        "https://admindash-server-production.up.railway.app/fullTimeEmployeeCount"
      )
      .then((res) => {
        setFullTimeEmployees(res.data[0].fullTimeCount);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios

      .get(
        "https://admindash-server-production.up.railway.app/partTimeEmployeeCount"
      )
      .then((res) => {
        setPartTimeEmployees(res.data[0].partTimeCount);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios

      .get(
        "https://admindash-server-production.up.railway.app/openProjectCount"
      )
      .then((res) => {
        setOpenProjects(res.data[0].openProjectCount);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios

      .get(
        "https://admindash-server-production.up.railway.app/closedProjectCount"
      )
      .then((res) => {
        setClosedProjects(res.data[0].closeProjectCount);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios

      .get(
        "https://admindash-server-production.up.railway.app/ticketsToDoCount"
      )
      .then((res) => {
        setTicketsToDo(res.data[0].openTicketCount);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios

      .get(
        "https://admindash-server-production.up.railway.app/ticketsInProgressCount"
      )
      .then((res) => {
        setTicketsInProgress(res.data[0].closedTicketCount);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Set dataFetched to true after all API calls are completed
    if (
      fullTimeEmployees !== undefined &&
      partTimeEmployees !== undefined &&
      openProjects !== undefined &&
      closedProjects !== undefined &&
      ticketsToDo !== undefined &&
      ticketsInProgress !== undefined
    ) {
      createCharts();
    }
  });

  const createCharts = () => {
    // Chart.js configuration
    const ctx1 = document.getElementById("employeeChart").getContext("2d");
    new Chart(ctx1, {
      type: "doughnut",
      data: {
        labels: ["Full-Time Employees", "Part-Time Employees"],
        datasets: [
          {
            data: [fullTimeEmployees, partTimeEmployees],
            backgroundColor: ["#FFB6C1", "#ADD8E6"],
            borderColor: ["#FFB6C1", "#ADD8E6"],
            borderWidth: 3,
          },
        ],
      },
    });

    const ctx2 = document.getElementById("projectChart").getContext("2d");
    new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: ["Open Projects", "Closed Projects"],
        datasets: [
          {
            data: [openProjects, closedProjects],
            backgroundColor: ["#FFDAB9", "#B19CD9"],
            borderColor: ["#FFDAB9", "#B19CD9"],
            borderWidth: 3,
          },
        ],
      },
    });

    const ctx3 = document.getElementById("ticketChart").getContext("2d");
    new Chart(ctx3, {
      type: "doughnut",
      data: {
        labels: ["Tickets To Do", "Tickets In Progress"],
        datasets: [
          {
            data: [ticketsToDo, ticketsInProgress],
            backgroundColor: ["#FFFACD", "#98FB98"],
            borderColor: ["#FFFACD", "#98FB98"],
            borderWidth: 3,
          },
        ],
      },
    });
  };

  return (
    <div className="bg-background py-7 t:py-3">
      <div className="flex flex-col items-center gap-3 pt-5 bg-divColor mx-5 mt-8  rounded-md t:flex-row t:justify-center l:mr-36 l:ml-72">
        <div className="mb-10 flex flex-col items-center">
          <div className="bg-pastelRed text-white flex flex-col items-center p-2 rounded-md w-72 t:w-56">
            <h2 className="font-quicksand font-bold text-4xl t:text-xl">
              Total Employees
            </h2>
            <span className="text-5xl font-bold">{employeeCount}</span>
          </div>
          <div className="my-4 w-80 t:w-60">
            <canvas id="employeeChart" width="100" height="100"></canvas>
          </div>
        </div>
        <div className="mb-10 flex flex-col items-center ">
          <div className="bg-pastelOrange text-white flex flex-col items-center p-2 rounded-md w-72 t:w-56">
            <h2 className="font-quicksand font-bold text-4xl t:text-xl">
              Total Projects
            </h2>
            <span className="text-5xl font-bold">{projectCount}</span>
          </div>
          <div className="my-4 w-80 t:w-60">
            <canvas id="projectChart" width="100" height="100"></canvas>
          </div>
        </div>
        <div className="mb-10 flex flex-col items-center ">
          <div className="bg-pastelGreen text-white flex flex-col items-center p-2 rounded-md w-72 t:w-56">
            <h2 className="font-quicksand font-bold text-4xl t:text-xl">
              Total Tickets
            </h2>
            <span className="text-5xl font-bold">{ticketCount}</span>
          </div>

          <div className="my-4 w-80 t:w-60">
            <canvas id="ticketChart" width="100" height="100"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
