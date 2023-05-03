import React from 'react'

const Header = () => {
  return (
    <div className='main-header' style={{display:"flex", justifyContent:"space-around"}}>
   <div className='div1-left' style={{display:"flex", backgroundColor:"lavender"}}>
    <div>1</div>
    <div>2</div>
   </div>

   <div className='div1-center' style={{display:"flex", backgroundColor:"lightpink"}}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    </div>


    <div className='div1-right' style={{display:"flex", backgroundColor:"lightblue"}}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    

   </div>
   
    </div>
  )
}

export default Header
