import { NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/coffeeCard';
import { useState } from 'react';
import '@fontsource/raleway';
import '@fontsource/rancho';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';

function App() {

  const loadedCoffees = useLoaderData();
  const[coffees,setCoffees]=useState(loadedCoffees);



  return (
      
      <div className='border-2 border-blue-400'>
        <Header></Header>
        <Banner></Banner>
        <About></About>
        <div className='text-center mt-8'>
        <p>--- Sip & Savor ---</p>
        <h1 className='text-6xl '>Our Popular Products</h1>
        <p className='py-2'>Total Number of Coffees : {coffees.length}</p>
       
        <NavLink to='/addcoffee'><button className='btn mt-2'>Add Coffee</button></NavLink>
        </div>
        

        <div className='grid lg:grid-cols-2 gap-4 mt-10 mx-4 xl:mx-72'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees ={coffees}
              setCoffees = {setCoffees}
            ></CoffeeCard>)
          }
        </div>
      </div>

  )
}

export default App
