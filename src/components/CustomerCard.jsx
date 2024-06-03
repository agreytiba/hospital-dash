import React from 'react'

const CustomerCard = ({title="",subtitle="",color="text-blue-500",bcolor="bg-white"}) => {
 
  return (
     <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">{title }</h3>
          <p className={`${color} ${bcolor} text-2xl font-bold`}>{subtitle}</p>
      </div>
  )
}

export default CustomerCard