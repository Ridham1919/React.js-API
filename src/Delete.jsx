import React,{useEffect,useRef,useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Delete = () => {
    var [data,setData] = useState([])
    var navigate = useNavigate()
    useEffect(() => {
        fetchdata()
    },[])

    function fetchdata(){
        axios.get('https://geton.skmbpk1z.a2hosted.com/get-data.php').then(function(abc){
            setData(abc.data);
        })
    }

const handleDelete = (e) => {
    var id = e.target.getAttribute('data');
    var a = new FormData();
    a.set('id',id)

        axios.post('https://geton.skmbpk1z.a2hosted.com/delete-data.php', a).then(function(abc){
            if(abc.data.status == "true"){
                fetchdata()
            }
        })
     }

     const handleUpdate = (e) =>{
        var id = e.target.getAttribute('data');

        navigate('/edit/'+id)
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
                                    <button onClick={handleDelete} data={e.id}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={handleUpdate} data={e.id}>Update</button>
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
