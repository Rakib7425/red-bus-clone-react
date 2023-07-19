import { useState } from 'react';
import { GoArrowSwitch } from 'react-icons/go'
const Home = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleExchange = () => {
        let temp1 = from;
        let temp2 = to;
        setTo(temp1)
        setFrom(temp2)
    }

    return (
        <>
            <div className="relative flex items-center justify-center">
                <img src="https://s3.rdbuz.com/web/images/homeV2/HomeBannerImg.svg" alt="bg-Img" className='opacity-100 min-h-screen' />

                <div className="absolute flex items-center justify-center bg-gray-300/80 p-24 rounded-md">
                    {/* <label htmlFor="first">From</label> */}
                    <input placeholder='From' type="text" id='first' className='rounded py-4 text-3xl bg-slate-200  border-red-700 border-2 text-black px-1' value={from} onChange={(e) => setFrom(e.target.value)} />
                    <span onClick={handleExchange}>
                        <GoArrowSwitch size={60} className='text-white mx-2 bg-red-800 p-3 cursor-pointer rounded-full' />
                    </span>
                    {/* <label htmlFor="second">TO</label> */}
                    <input type="text" placeholder='To' id='second' className='rounded py-4 placeholder:To  text-3xl bg-slate-200  border-red-700 border-2 text-black px-1' value={to} onChange={(e) => setTo(e.target.value)} />

                    <input type="date" name="date" id="date" className='rounded-md mx-2 p-2 py-4 text-3xl bg-slate-200  border-red-700 border-2 text-black px-1' />

                    <button className='bg-red-800 mx-4 p-4 rounded-md px-5 text-3xl'>Search Busses</button>
                </div>
            </div>

        </>
    )
}

export default Home