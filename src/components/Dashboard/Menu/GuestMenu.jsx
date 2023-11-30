import MenuItem from "../Sidebar/MenuItem"
import { AiOutlineBars } from 'react-icons/ai'
import { MdHomeWork,  } from 'react-icons/md'


const GuestMenu = () => {
  
  return (
    <>
            <MenuItem
            icon={AiOutlineBars}
            label='Announcements'
            address='/dashboard/Announcement'
          />
          <MenuItem icon={MdHomeWork} label='Make payment' address='Make-payment' />
      <MenuItem icon={MdHomeWork} label='My-Booking' address='My-Booking' />

    </>
  )
}

export default GuestMenu
