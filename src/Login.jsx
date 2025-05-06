import React,{useRef} from "react";
import axios from "axios";


const Login = () => {
    var txtname = useRef();
    var txtemail = useRef();
    var txtpassword = useRef();

    const handlesubmit = (e) =>{
        e.preventDefault();

        
        var email = txtemail.current.value;
        var password = txtpassword.current.value;

        var a = new FormData()

       
        a.set('email',email)
        a.set('password',password)

        axios.post('https://geton.skmbpk1z.a2hosted.com/insert-data.php',a).then(function(){

        })
    }

    return(
        <>
          <form method="post" onSubmit={handlesubmit}>
            <table border={1} cellPadding={7} cellSpacing={0.1}>
                <tr>
                    <td>Name</td>
                    <td><input type="text" ref={txtname}/></td>
                </tr>
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
                        <input type="submit" value={'submit'}/>
                    </td>
                </tr>
            </table>
          </form>
        </>
    )
}

export default Login