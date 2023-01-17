import React from 'react'

export default function (){
    return (
        <div className='info-box'>
            <img src='../PortfolioProfilePic.png' alt='Profile pic' className='profile-img'/>
            <h1 className='name-surname'>Bianca Niemann</h1>
            <h3 className='title'>Frontend Developer</h3>
            <h5 className='email'>payrollsollutions@gmail.com</h5>
            <div className='buttons-box'>
                <a className='email-link' href="mailto: payrollsollutions@gmail.com"><i className="fa-solid fa-envelope"></i>Email</a>
                <a className='linked-link' href='https://www.linkedin.com/in/bianca-niemann-8671b1246/' target='_blank'><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </div>
    )
}