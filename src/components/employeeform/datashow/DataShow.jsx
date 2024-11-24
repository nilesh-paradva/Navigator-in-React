import { useState } from "react";
import { StorageGet } from "../../../services/storage/Storage";
import { Link } from "react-router-dom";

const DataShow = () => {
    const [viewData, setviewData] = useState(StorageGet());

    const empDelete = (id) => {
        const updateStorage = StorageGet().filter((emp) => emp.Id != id);
        setviewData(updateStorage);
        localStorage.setItem("employeStorage", JSON.stringify(updateStorage));
    }

    return (
        <>
            <div className="dataView w-[100%] text-center">
                <div className="heading text-center">
                    <h2 className="h1 inline-block border-2 p-3 rounded-xl mb-4">Select employees </h2>
                </div>
                <div className="rounded-lg border-2">
                    <div className="heading text-center flex items-center justify-center py-3">
                        <Link to="/" className="px-3 py-2 bg-[blue] rounded-lg text-white me-2"><i className="fa-solid fa-house"></i></Link>
                        <Link to="/employeeform" className="px-3 py-2 bg-[blue] rounded-lg text-white me-2"><i className="fa-solid fa-user-plus"></i></Link>
                    </div>
                    <table className="border-2 border-[#b7b3b3] w-full rounded-lg overflow-hidden" cellPadding={10}>
                        <thead className="bg-[#434141] text-white">
                            <tr className="border-2 border-[#b7b3b3]">
                                <th className="border-2 border-[#b7b3b3]">Id</th>
                                <th className="border-2 border-[#b7b3b3]">Name</th>
                                <th className="border-2 border-[#b7b3b3]">Phone Number</th>
                                <th className="border-2 border-[#b7b3b3]">Email</th>
                                <th className="border-2 border-[#b7b3b3]">Address</th>
                                <th className="border-2 border-[#b7b3b3]">Designation</th>
                                <th className="border-2 border-[#b7b3b3]">Department</th>
                                <th className="border-2 border-[#b7b3b3]">City</th>
                                <th className="border-2 border-[#b7b3b3]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewData.map((rec) => {
                                return (
                                    <tr className="border-2 border-[#b7b3b3] nth-child" key={rec.Id}>
                                        <td className="border-2 border-[#b7b3b3] w-[7rem]">{rec.Id}</td>
                                        <td className="border-2 border-[#b7b3b3] w-[13rem]">{rec.Name}</td>
                                        <td className="border-2 border-[#b7b3b3] w-[13rem]">{rec.Phone_number}</td>
                                        <td className="border-2 border-[#b7b3b3] w-[16rem]">{rec.Email}</td>
                                        <td className="border-2 border-[#b7b3b3] w-[20rem]">{rec.Address}</td>
                                        <td className="border-2 border-[#b7b3b3] w-[7rem]">{rec.Designation}</td>
                                        <td className="border-2 border-[#b7b3b3] w-[]">{rec.Department}</td>
                                        <td className="border-2 border-[#b7b3b3] w-[6rem]">{rec.City}</td>
                                        <td className="w-[17rem]"><a href="#" className="px-3 py-2 bg-red-600 rounded-lg inline-block text-white" onClick={() => empDelete(rec.Id)}><i className="fa-solid fa-trash-can"></i></a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DataShow;