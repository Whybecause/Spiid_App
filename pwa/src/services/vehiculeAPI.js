import axios from 'axios';

export async function getVehicule(id) {
    const result = await axios.get(`/api/vehicule/${id}`)
    return result.data;
}

