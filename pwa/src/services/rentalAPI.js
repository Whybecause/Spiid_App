import axios from 'axios';
import { Redirect } from 'react-router-dom';

export async function rentVehicule(id, userId) {
    const result = await axios.post(`/api/rental/${id}`)
        // return <Redirect to={`/user/${userId}`}/>
    return result;
}

export async function endRental(newLat, newLong) {
    const result = await axios.patch("/api/rental/endRental", {newLat, newLong})
    console.log(result.data);
    return result.data;
}