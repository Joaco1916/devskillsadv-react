import { useQuery } from 'react-query'
import axios from '../lib/axios/config'

const fetchUsers = async () => {
    const response = await axios
        .get(`/api/members`)
        .then(res => {
            return res
        })
        .catch(error => {
            throw error
        });
    return response.data
};

export function useUsers() {
    return useQuery(['users'], fetchUsers)
}