import React from 'react'
import { NavLink } from 'react-router-dom'

export const Links = () => {

    const links =[
        { url: '/search', text: '🔎 All' },
        { url: '/imagesearch', text: '📸 Images' }
    ]
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
        {links.map(({url,text})=>(
            <NavLink to={url} activeClassName="text-blue-600 border-b-2 dark:text-blue-200 border-blue-700 pb-2" >
                {text}
            </NavLink>
        ))}
        
    </div>
  )
}
