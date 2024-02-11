import Link from "next/link";
import React from "react";
import { IoDiamondSharp, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";

export default function Sidebar({ children }) {
  return (
    <div className="flex">
      <div>
        <div className="flex w-20 h-screen p-4 bg-white border-r-[1px] fixed flex-col justify-between">
          <div className="flex flex-col items-center">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <IoDiamondSharp size="20" />
            </div>
            <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
            <Link href="/">
              <div className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 my-4 rounded-lg inline-block">
                <RxDashboard size="20" />
              </div>
            </Link>
            <Link href="/customers">
              <div className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 my-4 rounded-lg inline-block">
                <GoPerson size="20" />
              </div>
            </Link>
            <Link href="/orders">
              <div className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 my-4 rounded-lg inline-block">
                <AiOutlineShopping size="20" />
              </div>
            </Link>
            <Link href="/settings">
              <div className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 my-4 rounded-lg inline-block">
                <IoSettingsOutline size="20" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
}
