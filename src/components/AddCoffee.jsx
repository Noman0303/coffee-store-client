import React from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };

        console.log(newCoffee);

        // send data to the server

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })

    }




    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mt-12 mx-2'>
                <NavLink to='/'>Back to home</NavLink>
            </div>
            <div className='text-center lg:px-28 py-16 rounded-md bg-[#F4F3F0]  mt-12 mb-28'>
                <h2 className='text-3xl lg:text-5xl font-normal font-rancho' >Add New Coffee</h2>
                <p className='my-8 mx-2'>Seamlessly expand your coffee selection with our easy-to-use interface. Input essential details such as coffee name, quantity, supplier, taste profile, category, and additional information. Keep your coffee shop's offerings fresh and exciting by introducing new flavors and varieties, ensuring your customers always have something new to enjoy.</p>

                <form onSubmit={handleAddCoffee} >

                    <div className=' lg:grid lg:grid-cols-2 gap-8 px-2'>
                        <div className='form-control w-full'>
                            <label className="form-control w-full ">
                                <span className="label label-text">Name</span>
                                <input type="text" name="name" placeholder="Enter Coffee name" className="input input-bordered w-full " />
                            </label>
                            <label className="form-control w-full ">
                                <span className="label label-text">Supplier</span>
                                <input type="text" name="supplier" placeholder="Enter Coffee supplier" className="input input-bordered w-full " />
                            </label>


                            <label className="form-control w-full ">
                                <span className="label label-text">Category</span>
                                <input type="text" name="category" placeholder="Enter Coffee category" className="input input-bordered w-full " />
                            </label>

                        </div>

                        <div>

                            <label className="form-control w-full ">
                                <span className="label label-text">Quantity</span>
                                <input type="text" name="quantity" placeholder="Enter Coffee chef" className="input input-bordered w-full " />
                            </label>


                            <label className="form-control w-full ">
                                <span className="label label-text">Taste</span>
                                <input type="text" name="taste" placeholder="Enter Coffee taste" className="input input-bordered w-full " />
                            </label>


                            <label className="form-control w-full ">
                                <span className="label label-text">Details</span>
                                <input type="text" name="details" placeholder="Enter Coffee details" className="input input-bordered w-full " />
                            </label>

                        </div>

                        <div className='col-span-2' >
                            <label className="w-full ">
                                <span className="label label-text">Photo</span>
                                <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full " />
                            </label>
                        </div>

                        <input className='col-span-2 text-center border-black border-2 bg-[#D2B48C] rounded-md py-3 my-4 w-full' type="submit" value="Add Coffee" />


                    </div>

                </form>

            </div>
        </div>
    )
}

export default AddCoffee