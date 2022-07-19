import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddTiket = () => {
  const [name, setName] = useState("");
  const [nomorHp, setNomorHp] = useState(0);
  const [nomorKtp, setNomorKtp] = useState(0);
  const [kelas, setKelas] = useState("ekonomi");
  const [jadwal, setJadwal] = useState("");
  const [jumlahPenumpang, setJumlahPenumpang] = useState(0);
  const [jumlahPenumpangLansia, setJumlahPenumpangLansia] = useState(0);
  const [hargaTiket, setHargaTiket] = useState(20000);
  const [totalBayar, setTotalBayar] = useState(0);

  const navigate = useNavigate();
  const saveTiket = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        nomorHp,
        nomorKtp,
        kelas,
        jadwal,
        jumlahPenumpang,
        jumlahPenumpangLansia,
        hargaTiket,
        totalBayar,
      });

      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };
  const handlerKelas = (e) => {
    setKelas(e.target.value);
    if (e.target.value === "ekonomi") {
      setHargaTiket(200000);
    } else if (e.target.value === "bisnis") {
      setHargaTiket(300000);
    } else if (e.target.value === "eksekutif") {
      setHargaTiket(400000);
    } else {
      return null;
    }
  };

  const handlerJumlahPenumpang = (e, setParams) => {
    if (e.code === "Enter") e.preventDefault();
    setParams(e.target.value);
  };

  useEffect(() => {
    const handlerTotalBayar = () => {
      const totalHargaLansia = jumlahPenumpangLansia * hargaTiket;
      const totalHargaDiskon = totalHargaLansia - totalHargaLansia * 0.1;
      const totalHargaPenumpang = jumlahPenumpang * hargaTiket;
      const jumlahTotalBayar = totalHargaDiskon + totalHargaPenumpang;
      setTotalBayar(jumlahTotalBayar);
    };
    handlerTotalBayar();
  }, [jumlahPenumpang, jumlahPenumpangLansia, hargaTiket, kelas]);

  return (
    <div className="flex">
      <div className="w-full mx-auto justify-center items-center bg-white p-10">
        <h1 className="focus:outline-none text-3xl font-bold text-gray-800 mt-12">
          Add New Tiket In Here
        </h1>
        <form onSubmit={saveTiket}>
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Name
              </label>
              <input
                required
                value={name}
                type="name"
                onChange={(e) => setName(e.target.value)}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Nomor Identitas
              </label>
              <input
                required
                value={nomorKtp}
                type="number"
                onChange={(e) => setNomorKtp(e.target.value)}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Nomor Handpone
              </label>
              <input
                required
                value={nomorHp}
                type="number"
                onChange={(e) => setNomorHp(e.target.value)}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Jenis Kelas
              </label>
              <select
                value={kelas}
                required
                onChange={handlerKelas}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              >
                <option value="ekonomi">Ekonomi</option>
                <option value="bisnis">Bisnis</option>
                <option value="eksekutif">eksekutif</option>
              </select>
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Jadwal Penumpang
              </label>
              <input
                value={jadwal}
                type="date"
                required
                onChange={(e) => setJadwal(e.target.value)}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Jumlah Penumpang
              </label>
              <input
                value={jumlahPenumpang}
                type="number"
                path="note"
                min="1"
                required
                onChange={(e) => handlerJumlahPenumpang(e, setJumlahPenumpang)}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Jumlah Penumpang Lansia ( Umur 60+)
              </label>
              <input
                value={jumlahPenumpangLansia}
                type="number"
                path="note"
                min="1"
                required
                onChange={(e) =>
                  handlerJumlahPenumpang(e, setJumlahPenumpangLansia)
                }
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Harga Tiket
              </label>
              <input
                readOnly={true}
                value={hargaTiket}
                type="number"
                required
                onChange={(e) => setJumlahPenumpangLansia(e.target.value)}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Total Harga
              </label>
              <input
                readOnly={true}
                value={totalBayar}
                type="number"
                required
                onChange={(e) => setJumlahPenumpangLansia(e.target.value)}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="flex items-center mb-4 mt-6">
            <input
              type="checkbox"
              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              required
            />
            <label
              for="checkbox-1"
              className="text-sm ml-3 font-medium text-gray-900"
            >
              Saya atau rombongan telah membaca, memahami, dan setuju
              berdasarkan syarat dan ketentuan yang telah di terapkan
            </label>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <Link
                to="/list"
                className="text-sm font-medium text-center text-gray-800 capitalize"
              >
                Cancel
              </Link>
            </div>

            <button className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <span className="text-sm font-medium text-center text-gray-800 capitalize">
                Next Step
              </span>
              <svg
                className="mt-1 ml-3"
                width={12}
                height={8}
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTiket;
