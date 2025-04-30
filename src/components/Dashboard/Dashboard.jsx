"use client";
import { FileText } from "lucide-react";
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import MiniCalendar from "../Calendar/MiniCalendar";
import Events from "../Events/Events";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const Dashboard = () => {
  const CardDashboard = [
    {
      name: "Total Case",
      value: "980",
    },
    {
      name: "Resolved",
      value: "500",
    },
    {
      name: "Unresolved",
      value: "100",
    },
  ];
  const ExpensesDashboard = [
    {
      name: "Total Case",
      value: "980",
    },
    {
      name: "Resolved",
      value: "500",
    },
  ];
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Total Cases",
        data: [30, 50, 20, 60, 40],
        backgroundColor: "rgba(0, 32, 96, 0.8)", // Navy blue
      },
    ],
  };
  const dataDonut = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        label: "Progress",
        data: [70, 30], // ✅ 70% Meter
        backgroundColor: ["#1e3a8a", "#e5e7eb"], // Navy & Gray
        borderWidth: 0,
      },
    ],
  };

  const optionsDonut = {
    circumference: 180,
    rotation: -90,
    cutout: "70%", // ทำให้ดูเป็น meter
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const options = {
    indexAxis: "y", // ✅ ทำให้เป็นแนวนอน
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Cases by Month",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="p-3 bg-gray-100 rounded-2xl">
      <div className="grid grid-cols-7 gap-2">
        <div className="col-span-6 grid grid-cols-5 gap-2">
          {" "}
          <div className="col-span-3 p-2 bg-white rounded-2xl">
            <p className="font-bold text-xl"> Legal Case</p>

            <div className=" grid grid-cols-3 gap-5 ">
              {CardDashboard.map((res) => {
                return (
                  <div className="inline-block rounded-lg p-4" key={res.name}>
                    <div className="flex items-center space-x-2">
                      <div className="bg-navy p-3 rounded-full shadow">
                        <FileText size={24} strokeWidth={2} color="white" />
                      </div>
                      <div>
                        <p className="text-sm text-navy">{res.value}</p>
                        <p className="text-base text-navy font-bold">
                          {res.name}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-2 p-2 bg-white rounded-2xl">
            <p className="font-bold text-xl"> Legal Case</p>
            <div className=" grid grid-cols-2 gap-5 ">
              {ExpensesDashboard.map((res) => {
                return (
                  <div className="inline-block rounded-lg p-4" key={res.name}>
                    <div className="flex items-center space-x-2">
                      <div className="bg-navy p-3 rounded-full shadow">
                        <FileText size={24} strokeWidth={2} color="white" />
                      </div>
                      <div>
                        <p className="text-sm text-navy">{res.value}</p>
                        <p className="text-base text-navy font-bold">
                          {res.name}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-5 bg-white rounded-2xl p-3">
            <div className="border-b-2 text-xl font-bold border-gray-100">
              Ongoing Case
            </div>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @mdo
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 flex gap-2">
            {/* Chart Section */}
            <div className="flex-1 bg-white p-4 rounded-lg shadow h-[400px]">
              <Bar data={data} options={options} />
            </div>

            {/* Right Side Content */}
            <div className="flex-1 bg-white p-4 rounded-lg shadow ">
              <Doughnut data={data} options={options} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-2 col-span-1">
          <div className="mt-3">
            <MiniCalendar />
          </div>
          <div className="mt-3">
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
