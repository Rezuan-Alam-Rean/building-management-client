import { FaUserCog } from 'react-icons/fa'
import MenuItem from '../Sidebar/MenuItem'
import { BsGraphUp } from 'react-icons/bs'

const AdminMenu = () => {
  return (
    <>
    <MenuItem
                icon={BsGraphUp}
                label='add-Announcement'
                address='/dashboard/add-Announcement'
              />
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
    </>
  )
}

export default AdminMenu
