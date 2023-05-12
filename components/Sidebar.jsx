import React from 'react'

const Sidebar = () => {
    const categories = ['Casual', 'Suites', 'African Prints']
  return (
    <div>
        <p>Categories</p>
        {categories.map((category) => (
            <p key={category} className='products-heading'>{category}</p>
        ))}
    </div>
  )
}

export default Sidebar