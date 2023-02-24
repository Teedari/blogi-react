import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotFoundsvg from '../../assets/images/page-not-found.svg'
function NotFound() {
  const history = useNavigate()
  console.log()
  return (
    <section className='d-flex justify-content-center align-items-center w-100' style={{minHeight: '100svh'}}>
      <div className='text-center'>
        <img src={NotFoundsvg} alt='no-page-svg' />
        <h2 className='mt-4'>Whoops! Lost in Space?</h2>
        <p>The page you're looking for isn't found :( <br /> We suggest you go back to home</p>
        <Button onClick={() => history('/')} className='tee-btn mx-auto mt-4' title='Go back home'>Go back home</Button>
      </div>
    </section>
  )
}

export default NotFound
