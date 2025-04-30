import Link from "next/link";
import React from "react";

const Casetable = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="min-w-full w-full bg-white rounded-xl p-3">
        <div className="flex justify-between m-3">
          <div>
            <p>Case</p>
          </div>
          <div>
            <Link href="/case/insert" passHref>
              <div>
                <button className="p-3 bg-navy text-white rounded-2xl cursor-pointer hover:bg-black">
                  Add Case
                </button>
              </div>
            </Link>
          </div>
        </div>
        <table className="min-w-full shadow-2xl">
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
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Action
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
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <Link href={'/case/detail?id=' + 1}>
                <button className="bg-blue-500 hover:bg-blue-700 p-3 text-white cursor-pointer  ">
                  Details
                </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Casetable;
