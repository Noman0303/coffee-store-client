import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'


const UpdateCofee = () => {

  const coffee = useLoaderData();

  const { name, quantity, supplier, taste, category, details, photo, _id } = coffee;

  const handleUpdateCoffee = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };

    console.log(updatedCoffee);

    // send data to the server

    fetch(`https://coffee-store-server-ten-psi.vercel.app/coffee/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedCoffee)
    })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
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
                <h2 className='text-3xl lg:text-5xl font-normal' >Update Existing Coffee Details</h2>
                <p className='my-8 mx-2'>Easily update your coffee inventory with our intuitive interface. Modify details such as coffee name, quantity, supplier, taste profile, category, and additional information. Ensure your coffee shop's menu is always up-to-date with the freshest and most accurate information, enhancing customer satisfaction and operational efficiency.</p>

                <form  onSubmit={handleUpdateCoffee} >

                    <div className=' lg:grid lg:grid-cols-2 gap-8 px-2'>
                        <div className='form-control w-full'>
                            <label className="form-control w-full ">
                                <span className="label label-text">Name</span>
                                <input type="text"  defaultValue={name} placeholder="Enter Coffee name" name='name' className="input input-bordered w-full " />
                            </label>
                            <label className="form-control w-full ">
                                <span className="label label-text">Supplier</span>
                                <input type="text" defaultValue={supplier} placeholder="Enter Coffee supplier" name='supplier' className="input input-bordered w-full " />
                            </label>


                            <label className="form-control w-full ">
                                <span className="label label-text">Category</span>
                                <input type="text"  defaultValue={category} placeholder="Enter Coffee category" name='category' className="input input-bordered w-full " />
                            </label>

                        </div>

                        <div>

                            <label className="form-control w-full ">
                                <span className="label label-text">Quantity</span>
                                <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter Coffee chef" className="input input-bordered w-full " />
                            </label>


                            <label className="form-control w-full ">
                                <span className="label label-text">Taste</span>
                                <input type="text" name='taste'  defaultValue={taste} placeholder="Enter Coffee taste" className="input input-bordered w-full " />
                            </label>


                            <label className="form-control w-full ">
                                <span className="label label-text">Details</span>
                                <input type="text" name='details' defaultValue={details} placeholder="Enter Coffee details" className="input input-bordered w-full " />
                            </label>

                        </div>

                        <div className='col-span-2' >
                            <label className="w-full ">
                                <span className="label label-text">Photo</span>
                                <input type="text" name='photo' defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full " />
                            </label>
                        </div>

                        <input className='col-span-2 text-center border-black border-2 bg-[#D2B48C] rounded-md py-3 my-4 w-full' type="submit" value="Update Coffee" />


                    </div>

                </form>

            </div>
        </div>
  )
}

export default UpdateCofee