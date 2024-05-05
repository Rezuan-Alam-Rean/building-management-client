import axios from 'axios'

export const imageUpload = async image => {
  const formData = new FormData()
  formData.append('image', image)
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  )
  return data
}


export const openGoogleMaps = () => {
  const latitude = 23.8126;
const longitude = 90.3654;

    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, '_blank');
};
