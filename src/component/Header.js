import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div className='header_i'>   

        <div className='logobox'>

          <h1 className='logo'>
            <a href='/'>
              <img src='./img/main/logo.png' alt='logo'/>
            </a>
          </h1>

          <p>sson_ppowoo's portfolio</p>    
          
        </div>
        
        <ul className='menu'>
          <li>Main</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>        

        <div className='ham'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>        

      </div>
    </div>
  )
}

export default Header
