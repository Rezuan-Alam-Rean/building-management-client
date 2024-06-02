
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from '../Sidebar/MenuItem'




const HostMenu = () => {




  
  return (
    <>
      
      <MenuItem icon={MdHomeWork} label='Make payment' address='Make-payment' />
      <MenuItem icon={MdHomeWork} label='My-Booking' address='My-Booking' />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manage-bookings'
      />
    </>
  )
}

export default HostMenu
