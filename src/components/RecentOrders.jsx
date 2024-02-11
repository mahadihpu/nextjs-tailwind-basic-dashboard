import React from "react";
import { recentOrdersData } from "../../data/data";
import { BiSolidShoppingBag } from "react-icons/bi";

export default function RecentOrders() {
  return (
    <div>
      <ul>
        {
          recentOrdersData.map((order, id) => (
            <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-3 flex items-center cursor-pointer">
              <div className="bg-purple-100 rounded-lg p-3">
                <BiSolidShoppingBag className="text-purple-800" />
              </div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">${order.total}</p>
                <p className="text-gray-400 font-small">{order.name.first}</p>
              </div>
              <p className="lg:flex md:hideen absolute right-6 text-sm">{order.date}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
