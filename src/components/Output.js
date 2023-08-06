import "./Output.css";
const Output=(props)=>{
    return(
        <table class="table table-light table-hover" >
            <thead >
            <tr>
                <th>Sl No. </th>
                <th>Name </th>
                <th>Roll No. </th>
                <th>check-in Time</th>
                <th>check-out Time</th>

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
            </tr>
            </tbody>
                )} )}
        </table>
    )
}

export default Output;