import { useEffect ,useState} from "react";
 //import {redirect}from "react-router-dom";
export const Login = () => {
  const [data,setData]=useState([]);
   const [text,setText]=useState("");
  //  useEffect(()=>{
  //    let data=await fetch(" http://localhost:8080/users");
  //    data=await data.json();
  //    setData(data)
  //  })
  const check=(e)=>{
     if(e.target.value == "admin"){
        //  redirect("./Orders")
     }
     else{
      // redirect("./NewOrder")
     }
  }

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={check}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={check}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit">Login</button>
    </div>
  );
};
