import React,{useEffect,useRef,useState} from "react";
import axios from "axios";

const Delete = () => {
    var [data,setData] = useState([])

    useEffect(() => {
        fetchdata()
    },[])

    function fetchdata(){
        axios.get('https://geton.skmbpk1z.a2hosted.com/get-data.php').then(function(abc){
            setData(abc.data);
        })
    }


const handledelete = (e) => {
    var id = e.target.getAttribute('data');
    var a = new FormData();
    a.set('id',id)

        axios.post('https://geton.skmbpk1z.a2hosted.com/delete-data.php', a).then(function(abc){
            if(abc.data.status == "true"){
                fetchdata()
            }
        })
     }
     return(
        <>
        <table border={1} cellPadding={7} cellSpacing={0.1}>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th>Action</th>
            </tr>
            {
                data.map((e) => {
                    return (
                        <>
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.password}</td>
                                <td>
                                    <button onClick={handledelete} data={e.id}>Delete</button>
                                </td>
                            </tr>
                        </>
                    )
                })
            }
        </table>
    </>
     )

    }

    export default Delete
