import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [music, setMusic] = useState([
        { id: 1, penyanyi: "Bernadya", lagu: "Satu Bulan" },
        { id: 2, penyanyi: "Vidi", lagu: "Nuansa Bening" },
        { id: 3, penyanyi: "Tulus", lagu: "Langit Abu abu" },
        { id: 4, penyanyi: "Mahalini", lagu: "Sial" },
        { id: 5, penyanyi: "Tiara Andini", lagu: "Kupu kupu" }
    ]);

    const [updateMusic, setUpdateMusic] = useState(null);
    const [newMusic, setNewMusic] = useState({ penyanyi: "", lagu: "" });
    const [showAddForm, setShowAddForm] = useState(false);

    function handleDelete(m) {
        if (window.confirm("Apakah kamu yakin untuk menghapus lagu ini?")) {
            setMusic(music.filter((item) => item.id !== m.id));
        }
    }

    function handleUpdate() {
        setMusic(
            music.map((item) => (item.id === updateMusic.id ? updateMusic : item))
        );
        setUpdateMusic(null);
    }

    function handleAdd() {
        setMusic([
            ...music,
            { id: music.length + 1, ...newMusic }
        ]);
        setNewMusic({ penyanyi: "", lagu: "" });
        setShowAddForm(false);
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Daftar Lagu</h1>
            <div className="space-y-4">
                {music.map((m) => (
                    <div key={m.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow">
                        <div>
                            <span className="font-semibold">{m.penyanyi}</span> - <span>{m.lagu}</span>
                        </div>
                        <div className="flex space-x-2">
                            <button onClick={() => handleDelete(m)} className="p-2 text-red-600 hover:bg-red-100 rounded"><Trash2 /></button>
                            <button onClick={() => setUpdateMusic(m)} className="p-2 text-blue-600 hover:bg-blue-100 rounded"><Pencil /></button>
                        </div>
                    </div>
                ))}
            </div>

            {updateMusic && (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdate();
                }} className="mt-4 p-4 bg-white shadow rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Edit Lagu</h2>
                    <div className="mb-4">
                        <label htmlFor="updatePenyanyi" className="block text-sm font-medium text-gray-700">Penyanyi</label>
                        <input type="text"
                            id="updatePenyanyi"
                            value={updateMusic.penyanyi}
                            onChange={(e) =>
                                setUpdateMusic({
                                    ...updateMusic,
                                    penyanyi: e.target.value,
                                })
                            }
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="updateLagu" className="block text-sm font-medium text-gray-700">Lagu</label>
                        <input type="text"
                            id="updateLagu"
                            value={updateMusic.lagu}
                            onChange={(e) =>
                                setUpdateMusic({
                                    ...updateMusic,
                                    lagu: e.target.value,
                                })
                            }
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="flex space-x-2">
                        <button type="submit" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-800">Save</button>
                        <button type="button" onClick={() => setUpdateMusic(null)} className="px-4 py-2 bg-yellow-800 text-white rounded hover:bg-yellow-500">Cancel</button>
                    </div>
                </form>
            )}

            <button onClick={() => setShowAddForm(!showAddForm)} className="mt-4 px-4 py-2 bg-yellow-800 text-white rounded hover:bg-yellow-500">
                {showAddForm ? "Cancel" : "Add"}
            </button>

            {showAddForm && (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleAdd();
                }} className="mt-4 p-4 bg-white shadow rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Tambah Lagu</h2>
                    <div className="mb-4">
                        <label htmlFor="newPenyanyi" className="block text-sm font-medium text-gray-700">Penyanyi</label>
                        <input type="text"
                            id="newPenyanyi"
                            value={newMusic.penyanyi}
                            onChange={(e) =>
                                setNewMusic({
                                    ...newMusic,
                                    penyanyi: e.target.value,
                                })
                            }
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="newLagu" className="block text-sm font-medium text-gray-700">Lagu</label>
                        <input type="text"
                            id="newLagu"
                            value={newMusic.lagu}
                            onChange={(e) =>
                                setNewMusic({
                                    ...newMusic,
                                    lagu: e.target.value,
                                })
                            }
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <button type="submit" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-800">Add</button>
                </form>
            )}
        </div>
    );
}
