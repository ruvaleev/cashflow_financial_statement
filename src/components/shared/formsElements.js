import React from  'react';

export function FormRow({type, name, label, ...inputProps}) {
  return (
    <div className='flex'>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} name={name} {...inputProps}/>
    </div>
  )
}

export function FormSelectRow({name, label, options, ...inputProps}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} {...inputProps}>
        {options.map((option, i) => {
          return <option key={i} value={option.value}>{option.title}</option>
        })}
      </select>
    </div>
  )
}
