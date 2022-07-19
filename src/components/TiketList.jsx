import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import axios from "axios";
import { CSVLink } from "react-csv";

const TiketList = () => {
  const [users, setUsers] = useState([]);
  const [exportData, setExportData] = useState([]);
  const getUser = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full sm:px-6 mt-24">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Tiket
            </p>
            <div>
              <Link
                to="/"
                className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              >
                <p className="text-sm font-medium leading-none text-white">
                  Home
                </p>
              </Link>
              <Link
                to="/Pricing"
                className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              >
                <p className="text-sm font-medium leading-none text-white">
                  Kelas
                </p>
              </Link>
              <Link
                to="/addtiket"
                className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              >
                <p className="text-sm font-medium leading-none text-white">
                  New Tiket
                </p>
              </Link>
              <CSVLink
                className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                data={users}
              >
                <p className="text-sm font-medium leading-none text-white">
                  Export Data
                </p>
              </CSVLink>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">No</th>
                <th className="font-normal text-left pl-4">Name</th>
                <th className="font-normal text-left pl-12">Nomor Hp</th>
                <th className="font-normal text-left pl-12">Nomor Ktp</th>
                <th className="font-normal text-left pl-20">Kelas</th>
                <th className="font-normal text-left pl-20">Jadwal</th>
                <th className="font-normal text-left pl-20">
                  Jumlah Penumpang
                </th>
                <th className="font-normal text-left pl-20">
                  Jumlah Penumpang Lansia
                </th>
                <th className="font-normal text-left pl-20">Harga Tiket</th>
                <th className="font-normal text-left pl-20">Total Bayar</th>
                <th className="font-normal text-left pl-20">Tanggal Pesanan</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                >
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="text-xs font-medium leading-3 text-gray-600 mt-2">
                          {index + 1}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-12">
                    <p className="text-xs font-medium leading-3 text-gray-600 mt-2">
                      {user.name}
                    </p>
                  </td>
                  <td className="pl-12">
                    <p className="text-xs font-medium leading-3 text-gray-600 mt-2">
                      {user.nomorHp}
                    </p>
                  </td>
                  <td className="pl-12">
                    <p className="text-xs font-medium leading-3 text-gray-600 mt-2">
                      {user.nomorKtp}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="text-xs leading-3 text-gray-600 mt-2">
                      {user.kelas}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="text-xs leading-3 text-gray-600 mt-2">
                      {user.jadwal}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="text-xs leading-3 text-gray-600 mt-2">
                      {user.jumlahPenumpang}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="text-xs leading-3 text-gray-600 mt-2">
                      {user.jumlahPenumpangLansia}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="text-xs leading-3 text-gray-600 mt-2">
                      {user.hargaTiket}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="text-xs leading-3 text-gray-600 mt-2">
                      {user.totalBayar}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="text-xs leading-3 text-gray-600 mt-2">
                      <Moment format="YYYY/MM/DD">{user.createdAt}</Moment>
                    </p>
                  </td>
                  <td className="px-7 2xl:px-0">
                    <Link
                      to={`edit/${user.id}`}
                      className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 text-white bg-green-700 hover:bg-green-600 focus:outline-none rounded"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 text-white bg-red-700 hover:bg-red-600 focus:outline-none rounded"
                      to="/"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TiketList;
