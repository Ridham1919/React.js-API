import React,{useRef , useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
    var txtname = useRef();
    var txtemail = useRef();
    var txtpassword = useRef();
    var {id} = useParams()

    useEffect(() =>{
        var a = new FormData()
        a.set('id',id)
        axios.post('https://geton.skmbpk1z.a2hosted.com/single-data.php',a).then(function(abc){

            txtname.current.value = abc.data.name
            txtemail.current.value = abc.data.email
            txtpassword.current.value = abc.data.password
        })
    },[])

    const handlesubmit = (e) =>{
        
        e.preventDefault();

        var name = txtname.current.value;
        var email = txtemail.current.value;
        var password = txtpassword.current.value;

        var a = new FormData()
        
        a.set('id',id)
        a.set('name',name)
        a.set('email',email)
        a.set('password',password)

        axios.post('https://geton.skmbpk1z.a2hosted.com/edit-data.php',a).then(function(){

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

export default Update