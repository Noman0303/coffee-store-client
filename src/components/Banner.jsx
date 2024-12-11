import React from 'react'

const Banner = () => {
    return (
        <div >
            <div className="w-full h-screen border bg-cover bg-center" 
            style={{ backgroundImage: "url('https://i.ibb.co.com/Mg1Hc67/3.png')" }}>
                <div className=" text-left p-6 lg:mt-64 lg:ml-96">
                    <h2 className="text-white text-5xl lg:ml-72 font-rancho">Would you like a Cup of Delicious Coffee?</h2>
                    <p className="text-white text-lg lg:ml-72 mt-2 font-raleway ">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <div className="flex justify-start mt-4 lg:ml-72">
                        <button className="btn bg-[#E3B577] hover:bg-none">Learn More</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Banner