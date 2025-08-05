import React from 'react'

function Cards({icons,title}) {
    return (
        <div>
            <div className='flex w-59 items-center justify-center gap-4 mt-4 border text-white border-black rounded-2xl p-2 hover:bg-green-400 hover:border-none cursor-pointer '>
                {icons}
                <span className='text-sm'>{title}</span>

            </div>

        </div>
    )
}

export default Cards
