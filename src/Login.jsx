import React,{useRef} from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


const Login = () => {
  
    var txtemail = useRef();
    var txtpassword = useRef();
    var navigate = useNavigate()
    
    const handlesubmit = (e) =>{
        e.preventDefault();

        
        var email = txtemail.current.value;
        var password = txtpassword.current.value;

        var a = new FormData()
       
        a.set('email',email)
        a.set('password',password)

        axios.post('https://geton.skmbpk1z.a2hosted.com/login-data.php',a).then(function(abc){
             if(abc.data.status == "true"){
                navigate('/')
             }
        })
    }

    return(
        <>
          <form method="post" onSubmit={handlesubmit}>
            <table border={1} cellPadding={7} cellSpacing={0.1}>
                
                <tr>
                    <td>Email</td>
                    <td><input type="text" ref={txtemail}/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="text" ref={txtpassword}/></td>
                </tr>
                <tr>
                    <td>
                        <button value={Login}>Login</button>
                    </td>
                </tr>
            </table>
          </form>
        </>
    )
}

export default Login