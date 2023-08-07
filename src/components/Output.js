import "./Output.css";
const Output=(props)=>{
    const deleteFunction=(index)=>{
        console.log("delete clicked"+index);
        delete props.array[index];
    }
    return(
        <table class="table table-light table-hover" >
            <thead >
            <tr>
                <th>Sl No. </th>
                <th>Name </th>
                <th>Roll No. </th>
                <th>check-in Time</th>
                <th>check-out Time</th>
                <th>Delete</th>
            </tr>
            </thead>
            {((props.searchArr.length)>0 ? props.searchArr:props.array).map((value, index)=>{
                return (
                <tbody>
                <tr>
                <td>{index+1}</td>
                <td>{value.name}</td>
                <td>{value.roll}</td>
                <td>{value.checkin}</td>
                <td>{value.checkout}</td>
                <td><img onClick={() => deleteFunction(index)} src="./delete.png" alt="delete" width="20px" height="20px"/></td>
            </tr>
            </tbody>
                )} )}
        </table>
    )
}

export default Output;