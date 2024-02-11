import React from "react";

const data = [
  {
    label: "Daily Revenue",
    numbers: "$7,846",
    growth: "17%",
  },
  {
    label: "YTD Revenue",
    numbers: "$170,465,99",
    growth: "20%",
  },
  {
    label: "Customers",
    numbers: "18%",
    growth: "22%",
  },
];

export default function TopCards() {
  return (
    <div className="grid lg:grid-cols-6 gap-4 p-4">
      {data.map((item) => (
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between border w-full p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">{item.numbers}</p>
            <p className="text-gray-600">{item.label}</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-4 rounded-lg">
            <span className="text-green-700 text-lg">{item.growth}</span>
          </p>
        </div>
      ))}

      {/* <div className="lg:col-span-2 col-span-1 bg-white flex justify-between border w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold"></p>
          <p className="text-gray-600"></p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-4 rounded-lg">
            <span className="text-green-700 text-lg">18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between border w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">11,437</p>
          <p className="text-gray-600"></p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-4 rounded-lg">
            <span className="text-green-700 text-lg"></span>
        </p>
      </div> */}
    </div>
  );
}
