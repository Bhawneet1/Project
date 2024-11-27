import React from 'react'

const Cards = ({item, onReadMore}) => {
  return (
    <>
     <div className='mt-4'>
     <div className="card bg-base-100 w-full md:w-96 shadow-xl">
       <figure>
         <img
           src={item.image}
           alt="Shoes"
           className="w-full h-full object-cover" />
       </figure>
       <div className="card-body">
         <h2 className="card-title">
           {item.title}
           <div className="badge bg-[#A51313]">NEW</div>
         </h2>
         <p>{item.description}</p>
         <div className="card-actions justify-between">
           <div 
             onClick={onReadMore}
             className="mt-3 p-3 py-4 rounded-full border-none badge badge-outline text-black text-bold bg-[#A51313] hover:bg-[#A51313]/80 hover:text-white hover:cursor-pointer"
           >
             Read more
           </div>
         </div>
       </div>
     </div>
     </div>
    </>
  )
}

export default Cards
