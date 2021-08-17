import React from 'react';

function NavBar({pages, setPage}) {
  return (
    <div className="App">
<div className="Navbar">

     <ul>
<li onClick={()=>setPage(pages[0])}>Home</li>
<li onClick={()=>setPage(pages[1])}>My Garage</li>
<li onClick={()=>setPage(pages[2])}>Garage Sale</li>
<li onClick={()=>setPage(pages[3])}>Shopping Cart</li>
<li onClick={()=>setPage(pages[4])}>Log Off</li>




     </ul>
     
     </div>



     
    </div>


);
}

export default NavBar;




