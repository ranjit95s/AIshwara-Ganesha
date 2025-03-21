import React from 'react'

const AuthLayout = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='flex items-center h-full justify-center'>{children}</div>
  )
}

export default AuthLayout