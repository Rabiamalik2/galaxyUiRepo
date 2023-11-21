import axiosInstance from '../http'
import { endPoints } from '../../constants/config'
const getMyProfile = async () => {
    return await axiosInstance.get(endPoints?.someEndPoint)
}

export {
    getMyProfile,
}