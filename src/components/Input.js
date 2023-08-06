import "./Input.css";
import Output from "./Output";
import React,{useState,useEffect} from "react";
const Input=(props)=>{
 
    const[name, setName] =useState("");
    const[roll, setRoll]=useState("");
    const[checkin, setCheckin]=useState("");
    const[checkout,setCheckout]=useState("");
    // now we are adding all values into an array and each time we will add an abject into []
    const newData={
        name:name,
        roll:roll,
        checkin:checkin,
        checkout:checkout
    }
    const[data, setdata]=useState(JSON.parse(localStorage.getItem("dataKey")) || []);
    const add=()=>{
        setdata((prevdata)=>[...prevdata,newData]);
        
      console.log(data);

        
    // Clear input fields
    setName("");
    setRoll("");
    setCheckin("");
    setCheckout("");
    }
    console.log(data);
    //reset
    const reset=()=>{
       localStorage.clear();
       window.location.reload();

         }

    //setItem to local storage
    useEffect(() => {
        localStorage.setItem('dataKey', JSON.stringify(data));
      }, [data]);

//filter

  const t=data.filter((value)=>value.name.toLowerCase()===props.search.toLowerCase())

    return(
        <>
        <div>
            <label className="label"  for="name">Name</label>
            <input className="input" required onChange={(event)=>{setName(event.target.value)}} value={name} type="text" name="Name"></input>
            <label className="label"  for="rollnumber">Roll No.</label>
            <input className="input" required onChange={(event)=>{setRoll(event.target.value)}} value={roll} type="text" name="RollNo"></input>
            <label className="label"  for="checkinTime">Check-in Time: </label>
            <input className="input" required onChange={(event)=>{setCheckin(event.target.value)}} value={checkin} type="time"></input>
            <label className="label"  for="checkoutTime">Check-out Time: </label>
            <input className="input" required onChange={(event)=>{setCheckout(event.target.value)}} value={checkout}  type="time"></input>
            <button type="submit" class="btn add btn-success" onClick={add} >Add Details</button>
            <button type="submit" class="btn add btn-danger" onClick={reset}>Reset</button>



        </div>
        <Output array={data} searchArr={t}  />
        </>
    )
}

export default Input;