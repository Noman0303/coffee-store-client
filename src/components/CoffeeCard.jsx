import React from 'react'
import Swal from 'sweetalert2'

import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { name, quantity, supplier, taste, category, details, photo, _id } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete confirm')
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            const remaining = coffees.filter (cof => cof._id !== _id)
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card md:card-side lg:card-side bg-[#F5F4F1] shadow-xl py-2 px-2">
                <figure>
                    <img
                        src={photo}
                        alt="coffee" />
                </figure>
                <div className=" flex items-center justify-evenly w-full">
                    <div className='text-left'>
                        <p> <span className='font-semibold'>Name: </span>{name}</p>
                        <p> <span className='font-semibold'>Supplier: </span>{supplier}</p>
                        <p> <span className='font-semibold'>Category: </span>{category}</p>
                    </div>

                    <div className="flex flex-col gap-2">

                        <button className='bg-[#D2B48C] p-2 rounded-md'><IoEye className='text-white' /></button>

                        <Link to={`updateCoffee/${_id}`}>
                            <button className="bg-[#3C393B] p-2 rounded-md"><MdEdit className='text-white' /></button>
                        </Link>

                        <button className="bg-[#EA4744] p-2 rounded-md" onClick={() => handleDelete(_id)}>
                            <MdDelete className='text-white' />
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoffeeCard