import './LoginBody.css';
export function LoginBody(){
    return(
        
        <div>
            <div className='body1'>
              <dl>
                <dt><label>Username</label></dt> 
                <dd><span className='bi bi-person'></span> <input  type="text"  placeholder="type your username" /> </dd>
              </dl> 
            </div>
           
           <div className="body1">  
              <dl>
                <dt><label>Password</label></dt> 
                 <dd><span className='bi bi-lock'></span> <input  type="password"  placeholder="enter password" /> </dd><a href='../public/pwforgrt.html' id='p1'>Forget Password? </a>
              </dl>
            </div>

            <div className='button1'>
                <button className='btn1'>LOGIN</button>
            </div>
            
        </div>     
    );
}