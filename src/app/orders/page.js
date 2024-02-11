"use-client";

import React from 'react'
import { recentOrdersData } from '../../../data/data'
import { IoIosPerson } from "react-icons/io";
import Header from '@/components/Header';
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";



export default function orders() {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Customers</h2>
                <h2>Welcome Back, Mahadi</h2>
            </div>
            <div className="overflow-x-auto my-5 bg-white md:m-10 m-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-lg'>Order</th>
                            <th className='text-lg'>Status</th>
                            <th className='text-lg'>Last Order</th>
                            <th className='text-lg hidden md:grid'>Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            recentOrdersData.map((order, id) => (
                                <tr>
                                    <th className='flex items-center gap-4'>
                                        <div className='bg-purple-200 p-3 rounded-lg'>
                                            <AiFillShopping className='text-purple-600' />
                                        </div>
                                        <div>
                                            <p className="text-gray-800 font-bold">${order.total}</p>
                                            <p className="text-gray-400 font-small">{order.name.first}</p>
                                        </div>
                                    </th>
                                    <td className={order.status === 'Completed' ? 'text-green-600' : order.status === 'Processing' ? 'text-yellow-600' : 'text-red-600'}>
                                        {order.status}
                                    </td>

                                    <td>{order.date}</td>
                                    <td className=' hidden md:grid'>{order.method}</td>

                                    {/* <td className={`py-3 badge badge-sm ${order.status === "On Hold" ? "badge-neutralt" : order.status === "Completed" ? "badge-primary" : order.status === "Processing" ? "badge-secondary" : "badge-ghost"}`}>{order.status}</td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-3 flex items-center cursor-pointer">

                <div className="pl-4">
                    <p className="text-gray-800 font-bold">${order.total}</p>
                    <p className="text-gray-400 font-small">{order.name.first}</p>
                </div>
                <p className="lg:flex md:hideen absolute right-6 text-sm">{order.date}</p>
            </li> */}
        </div>
    )
}
