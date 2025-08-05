import React, { useState } from 'react'


function Smallnav() {
    const [isSelate, setIsSelete] = useState("Consultations")

    const nav = [{ name: 'Consultations', path: "/consultation" },
    { name: 'Payment Withdrawal', path: "/pay" },
    { name: "Schedule", path: "/schedule" }
    ]
    return (
        <div>
            <div>
                {/* ============small nave ====== */}
                <div

                    className={`flex gap-6 mt-10 items-center justify-center `}>
                    {Object.entries(nav).map(([key, items]) => (
                        <button key={key} to={items.path}
                            onClick={() => setIsSelete(key)}
                        >
                            <p
                                className={`flex flex-row border px-6 py-3 rounded cursor-pointer  hover:text-white font-bold ${isSelate === key ? "bg-green-400 text-white border-none" : ""}
                            `}>{items.name}</p>
                        </button>
                    ))}
                </div>

                <div className=' flex-row justify-between mt-10 items-center gap-10 grid-row-1 md:grid-cols-3 grid'>
                    <div className='items-center justify-center flex flex-col' >
                        <h1 className='font-bold text-green-500 text-2xl'>Value Your Practice</h1>
                        <img src="https://ezovion.com/wp-content/uploads/2024/01/Communicate-securely-with-your-doctor-for-remote-care-01.png" alt="" className='h-100' />
                    </div>
                    <div className='items-center justify-center flex flex-col'>
                        <img src="https://prescrip.co/wp-content/uploads/2020/01/prescrip-clinic-management.png" alt="" className='h-100' />
                        <h1 className='font-bold text-green-500 text-2xl'>Today's Healing Journey</h1>
                    </div>
                    <div className='items-center justify-center flex flex-col'>
                        <h1 className='font-bold text-green-500 text-2xl'> Consultation Details </h1>
                        <img src="https://ezovion.com/wp-content/uploads/2024/01/Communicate-securely-with-your-doctor-for-remote-care-01.png" alt="" className='h-100' />

                    </div>
                </div>
                <div className='items-center justify-center flex flex-col mt-10' >
                    <button className='bg-green-600 py-3 px-6 rounded-2xl hover:shadow-amber-50'>Join now</button>
                </div>

            </div>
          


        </div>
    )
}

export default Smallnav
