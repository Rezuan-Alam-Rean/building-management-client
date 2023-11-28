import axiosSecure from '.'

// Fetch all rooms from db
export const getAllRooms = async () => {
  const { data } = await axiosSecure('/rooms')
  return data
}


