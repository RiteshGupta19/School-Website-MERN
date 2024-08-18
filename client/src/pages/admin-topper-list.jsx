import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../store/authcontext';
import { Navigate } from 'react-router-dom';

export default function Admintopperlist() {
    const [topper, setTopper] = useState({
        photo: "",
        Name: "",
        Class: "",
        Year: "",
        Exam: "",
    });

    const [topperList, setTopperList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentTopperId, setCurrentTopperId] = useState(null);
    const { logged } = useContext(AuthContext);

    if (!logged) {
        return <Navigate to="/login" />;
    }

    const handleInput = (e) => {
        const { name, value, files } = e.target;
        if (name === "photo") {
            setTopper({ ...topper, photo: files[0] });
        } else {
            setTopper({ ...topper, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', topper.photo);
        formData.append('Name', topper.Name);
        formData.append('Class', topper.Class);
        formData.append('Year', topper.Year);
        formData.append('Exam', topper.Exam);

        try {
            const url = editMode
                ? `http://localhost:5000/api/admin/topperlist/${currentTopperId}`  
                : 'http://localhost:5000/api/admin/topperlist';             
            const method = editMode ? "PUT" : "POST";
            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            if (response.ok) {
                setTopper({
                    photo: "",
                    Name: "",
                    Class: "",
                    Year: "",
                    Exam: "",
                });
                fetchTopperData();
                toast.success(editMode ? "Topper updated successfully" : "Topper added successfully");
                setEditMode(false);
                setCurrentTopperId(null);
            } else {
                const errorText = await response.text();
                toast.error(`Not submitted: ${errorText}`);
            }
        } catch (error) {
            console.error("Topper submission error:", error);
            toast.error("An error occurred while submitting the topper");
        }
    };

    const fetchTopperData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/gettopperlist", {
                method: "GET",
            });
            const data = await response.json();

            if (Array.isArray(data)) {
                setTopperList(data);
            } else {
                console.error("Unexpected data format:", data);
                setTopperList([]);
            }
        } catch (error) {
            console.error("Error fetching topper list:", error);
            setTopperList([]);
        }
    };

    const deleteTopper = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/gettopperlist/delete/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                fetchTopperData();
                toast.success("Deleted successfully");
            } else {
                toast.error("Not deleted");
            }
        } catch (error) {
            console.error("Error deleting topper:", error);
            toast.error("An error occurred while deleting the topper");
        }
    };

    const editTopper = (topper) => {
        setTopper({
            photo: topper.photo,
            Name: topper.Name,
            Class: topper.Class,
            Year: topper.Year,
            Exam: topper.Exam,
        });
        setCurrentTopperId(topper._id);
        setEditMode(true);
    };

    useEffect(() => {
        fetchTopperData();
    }, []);

    return (
        <div className='w-full h-full bg-red-50 py-[8%]'>
            <div className='w-[80%] m-auto'>
                <h1 className='text-[30px]'>{editMode ? 'Update Topper Detail' : 'Add Topper Detail'}</h1>
                <form className='bg-white w-[100%] p-[20px]' onSubmit={handleSubmit}>
                    <label>Select Topper Photo</label><br />
                    <input type='file' className='mb-3' name="photo" id="photo" onChange={handleInput} /><br />
                    <label>Name</label><br />
                    <input type='text' className='w-[90%] mb-3 border-red-100 border-4' placeholder='Enter topper name' name="Name" id="Name" required autoComplete="off" value={topper.Name} onChange={handleInput} /><br />
                    <label>Class</label><br />
                    <input type='text' className='w-[90%] mb-3 border-red-100 border-4' placeholder='Enter Class' name="Class" id="Class" required autoComplete="off" value={topper.Class} onChange={handleInput} /><br />
                    <label>Passing Year</label><br />
                    <input type='text' className='w-[90%] border-red-100 border-4' placeholder='Enter Passing Year' name="Year" id="Year" required autoComplete="off" value={topper.Year} onChange={handleInput} /><br />
                    <label>Exam Type</label><br />
                    <input type='text' className='w-[90%] border-red-100 border-4' placeholder='Enter Exam Type' name="Exam" id="Exam" required autoComplete="off" value={topper.Exam} onChange={handleInput} /><br />
                    <button className="bg-green-500 text-white p-3 rounded-md hover:bg-green-400 mt-5">{editMode ? 'UPDATE TOPPER' : 'ADD TOPPER'}</button>
                </form>
            </div>
            <div className='mt-10'>
                <h1 className='text-[30px] font-bold mb-3 underline ml-3'>Topper Details</h1>
            </div>
            <div>
                <table>
                    <thead>
                        <tr className='border-b-4 border-red-200 bg-red-50 sticky top-[11.5%]'>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Year</th>
                            <th>Exam</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                    <tbody>
                        {topperList.map((topper) => (
                            <tr key={topper._id}>
                                <td>
                                    <img
                                        src={`http://localhost:5000/${topper.photo}`}
                                        alt={topper.Name}
                                        className='w-16 h-16 object-cover'
                                    />
                                </td>
                                <td>{topper.Name}</td>
                                <td>{topper.Class}</td>
                                <td>{topper.Year}</td>
                                <td>{topper.Exam}</td>
                                <td>
                                    <button
                                        className='bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-400'
                                        onClick={() => editTopper(topper)}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className='bg-red-500 text-white p-2 rounded-md hover:bg-red-400'
                                        onClick={() => deleteTopper(topper._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                </div>
                );
            }
