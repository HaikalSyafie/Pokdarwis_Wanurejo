"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UmkmTable() {
  const [umkmList, setUmkmList] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUmkm, setSelectedUmkm] = useState(null);
  const [actionModal, setActionModal] = useState(null); // 'edit', 'hapus', 'setujui'
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    linkGmaps: "",
    password: "",
  });

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/umkmBaru");
      setUmkmList(res.data);
    } catch (err) {
      console.error("Gagal fetch UMKM:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/umkmBaru", {
        nama: formData.nama,
        deskripsi: formData.deskripsi,
        linkGmaps: formData.linkGmaps,
        passwordTambah: formData.password, // password khusus tambah
      });
      setFormData({ nama: "", deskripsi: "", linkGmaps: "", password: "" });
      setShowAddModal(false);
      fetchData();
    } catch (err) {
      alert(err.response?.data?.error || "Gagal tambah data");
    }
  };

  const handleEditSubmit = async () => {
    try {
      await axios.patch(`/api/umkmBaru/${selectedUmkm._id}`, {
        nama: formData.nama,
        deskripsi: formData.deskripsi,
        linkGmaps: formData.linkGmaps,
      });
      setActionModal(null);
      setSelectedUmkm(null);
      fetchData();
    } catch (err) {
      alert("Gagal edit data");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/umkmBaru/${selectedUmkm._id}`);
      setActionModal(null);
      setSelectedUmkm(null);
      fetchData();
    } catch (err) {
      alert("Gagal hapus data");
    }
  };

  const handleSetujui = async () => {
    try {
      await axios.patch(`/api/umkmBaru/setujui/${selectedUmkm._id}`, {
        password: formData.password,
      });
      setActionModal(null);
      setSelectedUmkm(null);
      fetchData();
    } catch (err) {
      alert(err.response?.data?.error || "Gagal setujui");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Daftar UMKM Baru</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-green-600 text-black rounded hover:bg-green-700"
        >
          Tambah UMKM
        </button>
      </div>

      <table className="w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left dark:text-white">Nama</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left dark:text-white">Deskripsi</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left dark:text-white">Link GMaps</th>
          </tr>
        </thead>
        <tbody>
          {umkmList.map((item) => (
            <tr
              key={item._id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition"
              onClick={() => {
                setSelectedUmkm(item);
                setActionModal("menu");
              }}
            >
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-white">{item.nama}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-white">{item.deskripsi}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                <a
                  href={item.linkGmaps}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  Lihat di Maps
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {/* Modal Tambah UMKM */}
      {showAddModal && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Tambah UMKM</h2>
            <form onSubmit={handleAddSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Nama"
                className="w-full border p-2 rounded"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              />
              <textarea
                placeholder="Deskripsi"
                className="w-full border p-2 rounded"
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
              />
              <input
                type="text"
                placeholder="Link Google Maps"
                className="w-full border p-2 rounded"
                value={formData.linkGmaps}
                onChange={(e) => setFormData({ ...formData, linkGmaps: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password Tambah UMKM"
                className="w-full border p-2 rounded"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <div className="flex justify-end space-x-2">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  Tambah
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Aksi (Edit/Hapus/Setujui) */}
      {/* Modal Aksi (Edit/Hapus/Setujui) */}
{selectedUmkm && actionModal === "menu" && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
    <div className="bg-white dark:bg-gray-900 p-4 rounded shadow-md w-full max-w-sm transition-all">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        {selectedUmkm.nama}
      </h2>
      <div className="space-y-2">
        <button
          onClick={() => {
            setFormData({
              nama: selectedUmkm.nama,
              deskripsi: selectedUmkm.deskripsi,
              linkGmaps: selectedUmkm.linkGmaps,
              password: "",
            });
            setActionModal("edit");
          }}
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setFormData({ ...formData, password: "" });
            setActionModal("hapus");
          }}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Hapus
        </button>
        <button
          onClick={() => {
            setFormData({ ...formData, password: "" });
            setActionModal("setujui");
          }}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Setujui
        </button>
        <button
          onClick={() => {
            setActionModal(null);
            setSelectedUmkm(null);
          }}
          className="w-full bg-gray-300 dark:bg-gray-700 dark:text-white py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          Batal
        </button>
      </div>
    </div>
  </div>
)}


      {/* Modal Edit */}
      {selectedUmkm && actionModal === "edit" && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Edit UMKM</h2>
            <input
              type="text"
              placeholder="Nama"
              className="w-full border p-2 rounded mb-2"
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            />
            <textarea
              placeholder="Deskripsi"
              className="w-full border p-2 rounded mb-2"
              value={formData.deskripsi}
              onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
            />
            <input
              type="text"
              placeholder="Link Google Maps"
              className="w-full border p-2 rounded mb-2"
              value={formData.linkGmaps}
              onChange={(e) => setFormData({ ...formData, linkGmaps: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button onClick={handleEditSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
                Simpan
              </button>
              <button
                onClick={() => {
                  setActionModal(null);
                  setSelectedUmkm(null);
                }}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Hapus / Setujui */}
      {selectedUmkm && (actionModal === "hapus" || actionModal === "setujui") && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">
              {actionModal === "hapus" ? "Konfirmasi Hapus" : "Setujui UMKM"}
            </h2>
            <input
              type="password"
              placeholder="Password Admin"
              className="w-full border p-2 rounded mb-4"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={actionModal === "hapus" ? handleDelete : handleSetujui}
                className={`${
                  actionModal === "hapus" ? "bg-red-600" : "bg-green-600"
                } text-white px-4 py-2 rounded`}
              >
                {actionModal === "hapus" ? "Hapus" : "Setujui"}
              </button>
              <button
                onClick={() => {
                  setActionModal(null);
                  setSelectedUmkm(null);
                }}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
