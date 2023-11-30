import MenuItem from "../Sidebar/MenuItem"
import { AiOutlineBars } from 'react-icons/ai'
const GuestMenu = () => {

  
  return (
    <>
            <MenuItem
            icon={AiOutlineBars}
            label='Announcements'
            address='/dashboard/Announcement'
          />
    </>
  )
}

export default GuestMenu
