import { error } from "console";
import React, { useEffect,  } from "react";
import { useNavigate } from 'react-router-dom';


function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("userId")
        if(userId !== null || userId !== "null" || userId !== "NULL" || userId !== undefined) { //이 부분 고쳐야할듯
            navigate(`/home/${userId}`);    
        } else {
            navigate('/');
        }
    })

    return (
        <></>
    );
}

export default ErrorPage;