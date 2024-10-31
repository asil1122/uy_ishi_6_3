import clsx from 'clsx'
import React from 'react'

export const Button = ({children, variants, size, type = 'button', onClick, className}) => {
  return (
    <button className={clsx(className,{
        "bg-primary": variants === 'primary',
        "bg-secondary": variants === 'secondary',
        "w-[100px] px-[20px] py-[5px]": size === 'small',
        "w-[200px] px-[30px] py-[10px]": size === 'large',
    })}type={type} >
        {children}
    </button>
  )
}
