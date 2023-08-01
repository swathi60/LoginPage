
import './LoginApp.css';
import { LoginHeader } from './LoginHeader';
import { LoginBody } from './LoginBody';
import { LoginFooter } from './LoginFooter';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

function LoginApp() {
  return (
    <div className="LoginHome">
      
        <div className='pageback'>
        <LoginHeader/>
        <LoginBody/>
        <LoginFooter/>
        </div>
  
    </div>
  );
}

export default LoginApp;
