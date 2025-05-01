import React, { useEffect, useState ,useRef } from "react";
import axios from "axios";


const Api1 = () => {
    var [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://geton.skmbpk1z.a2hosted.com/get-data.php').then(function (abc) {
            setData(abc.data);
        })
    }, [])

    return (
        <>
            <table border={1} cellPadding={7} cellSpacing={0.1}>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
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
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Api1;