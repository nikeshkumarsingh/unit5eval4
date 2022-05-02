import {useState,useEffect}from "react";
export const Orders = () => {
 const [order,setOrder]=useState([])
  //  Get all data when admin logs in and populate it
  // store it in redux
  const [filter,setFilter]=useState([]);
  useEffect(()=>{
    getdata()
  })
  const getdata=async()=>{
    try{
      let dta=await fetch(" http://localhost:8080/orders");
      dta=await dta.json();
       setOrder(dta);
     
     setFilter(dta)
       console.log(dta)
      
    }catch(err){
        console.log(err);
    }
  }
const  returnSort=(e)=>{
   if(e.target.value=="id"){
    let item= order.sort((a,b)=>a.id-b.id)
    setFilter([...item])
   }
   else if(e.target.value=="status"){
    let item= order.sort((a,b)=>a.status-b.status)
    setFilter([...item])
   }
   else{
     let item=order.sort((a,b)=>a.cost-b.cost);
     setFilter([...item])
   }
}
  return (
    <div>
      <div>
        <div>
          <select className="controls" name="progress" onChange={returnSort} id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        {filter.map((t)=>(

        
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            <tr className="orders-row">
              <td className="id">{t.id}</td>
              <td className="problem">{t.problem}</td>
              <td className="owner">{t.owner_name}</td>
              <td className="status">{t.brand}</td>
              <td className="cost">{t.cost}</td>
              <td className="change-status">
                {/* Show select dropdown only if status is Not Accepted */}
               
                <select className="changeStatus" name="changeStatus">
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Not Accepted">Not Accepted</option>
                </select>
              </td>
              <td className="accept">
                {/* Show this button only if status is Not Accepted */}
                {/* on change make request to update it in db, and show changed status in table */}
                <button>Accept</button>
              </td>
            </tr>
          </tbody>
        </table>
        ))}
      </div>
    </div>
  );
};
