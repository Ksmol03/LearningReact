import React, { useState } from 'react'


function Button({message, children}) {
  return (
    <button onClick={() => alert(`${message}`)}>{children}</button>
  )
}

const Item = () => {
  return (
    <Button message="one">Text</Button>
  )
}

export default Item