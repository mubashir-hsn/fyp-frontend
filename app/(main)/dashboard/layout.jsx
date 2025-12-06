import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='px-5'>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-4xl gradient-subtitle'>Industry Insights</h1>
      </div>
      {children}
    </div>
  )
}

export default DashboardLayout