import './Exercise1-Form.css'
export const Exercise1_Form = () => {
  return (
    <div className='subscribe'>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive 
            news and updates
        </p>
        <form action="#">
        <input type="text" id='firstname' placeholder='First name'/>
        <input type="text" id='lastname' placeholder='Last name'/>
        <input type="text" id='email' placeholder='Email'/><br />
        </form>
        <div className='button'><button>Subscribe</button></div>
    
    </div>
  )
}
