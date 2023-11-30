import axiosSecure from '.'

// Fetch all rooms from db
export const getAllRooms = async () => {
  const { data } = await axiosSecure('/rooms')
  return data
}

// Fetch all rooms for host
export const getRoom = async email => {
  const { data } = await axiosSecure(`/getBookings/${email}`)
  return data
}


// Save a room data in db
export const Announcement = async roomData => {
  const { data } = await axiosSecure.post(`/announcement`, roomData)
  return data
}

// Fetch all rooms from db
export const getAnnouncement = async () => {
  const { data } = await axiosSecure('/getAnnouncement')
  return data
}