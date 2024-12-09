import React from "react";

const Table = () => {
  return (
        <table className="table-auto w-full text-left border-collapse">
          {/* <!-- Table Header --> */}
          <thead className="bg-[#1D1D1D] text-white">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Team</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Salary</th>
              <th className="px-4 py-2">Points</th>
            </tr>
          </thead>
          {/* <!-- Table Body --> */}
          <tbody className="bg-[#2F2F2F] text-white">
            <tr className="hover:bg-[#807B0F]">
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">Team A</td>
              <td className="px-4 py-2">Forward</td>
              <td className="px-4 py-2">$50,000</td>
              <td className="px-4 py-2">120</td>
            </tr>
            <tr className="hover:bg-[#807B0F]">
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">Team B</td>
              <td className="px-4 py-2">Goalkeeper</td>
              <td className="px-4 py-2">$60,000</td>
              <td className="px-4 py-2">110</td>
            </tr>
            <tr className="hover:bg-[#807B0F]">
              <td className="px-4 py-2">Mike Johnson</td>
              <td className="px-4 py-2">Team C</td>
              <td className="px-4 py-2">Defender</td>
              <td className="px-4 py-2">$55,000</td>
              <td className="px-4 py-2">100</td>
            </tr>
            <tr className="hover:bg-[#807B0F]">
              <td className="px-4 py-2">Sarah Lee</td>
              <td className="px-4 py-2">Team D</td>
              <td className="px-4 py-2">Midfielder</td>
              <td className="px-4 py-2">$70,000</td>
              <td className="px-4 py-2">130</td>
            </tr>
          </tbody>
          {/* <!-- Table Footer --> */}
          <tfoot className="bg-[#262626] text-white">
            <tr>
              <td colSpan={5} className="px-4 py-2">
                <div className="flex items-center justify-between">
                  {/* <!-- Page Dropdown --> */}
                  <div className="flex items-center">
                    <span className="mr-2">Page:</span>
                    <select className="bg-[#1D1D1D] text-white px-2 py-1 rounded">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  {/* <!-- Page Size Dropdown --> */}
                  <div className="flex items-center">
                    <span className="mr-2">Page Size:</span>
                    <select className="bg-[#1D1D1D] text-white px-2 py-1 rounded">
                      <option>4</option>
                      <option>8</option>
                      <option>16</option>
                    </select>
                  </div>
                  {/* <!-- Navigation Buttons --> */}
                  <div className="flex items-center">
                    <button className="bg-[#1D1D1D] text-white px-4 py-2 rounded mr-2">
                      Previous
                    </button>
                    <button className="bg-[#1D1D1D] text-white px-4 py-2 rounded">
                      Next
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
  );
};

export default Table;
