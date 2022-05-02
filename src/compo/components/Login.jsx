import { useEffect ,useState} from "react";
 import {Navigate}from "react-router-dom";
export const Login = () => {
  const [data,setData]=useState([]);
   const [text,setText]=useState("");
   const [pass,setPass]=useState("")
  
  const check=()=>{
     if(text == "admin" ){
      
      return <Navigate to="/orders"/>
     }
     else{
      return <Navigate to="/neworder"/>
     }
  }

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={((e)=>setText(e.target.value))}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={((e)=>setPass(e.target.value))}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={check}>Login</button>
    </div>
  );
};
