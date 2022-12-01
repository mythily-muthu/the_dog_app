import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {

    let [dogs, setDogs] = useState('')

    const getDogs = async () => {
        //let upi = "https://api.thedogapi.com/v1/breeds?limit=10&page=0";
        let data = await axios.get("https://api.thedogapi.com/v1/breeds?limit=10&page=0");
        console.log(data);
        setDogs(data);
    }
    useEffect(() => {
        getDogs();
    }, []);

    return (
        <div>
            {!dogs ? <h1 className='flex items-center justify-center font-bold text-5xl h-screen uppercase text-slate-700'>Bow..Bow</h1> :
                <>
                    <section className='p-8 mx-auto'>
                        <div className='text-center'>
                            <h1 className='flex justify-center font-bold text-5xl ring-offset-inherit mt-10  text-slate-800 hover:text-gray-700'>The Dog App</h1>
                            <p className='flex justify-center text-xs mt-10'>This application is powered by {""}
                                <a href='https://api.thedogapi.com' className='underline text-blue-600 cursor-pointer hover:text-orange-600'> The Dog Api</a>
                            </p>
                        </div>

                    </section>



                </>}
        </div>
    )
}

export default Home;