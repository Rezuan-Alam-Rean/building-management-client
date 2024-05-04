import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Apartment from '../pages/Apartment/Apartment'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import Profile from '../pages/Dashboard/Common/Profile'
import Announcements from '../pages/Dashboard/Common/Announcements'
import AddAnnouncement from '../pages/Dashboard/Admin/AddAnnouncement'
import MyRoom from '../pages/Dashboard/Host/MyRoom'

import AdminRoute from './AdminRoute'
import MyBooking from '../pages/Dashboard/Host/MyBooking'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import ManageBookings from '../pages/Dashboard/Host/ManageBookings'
import HostRoute from './HostRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Apartment',
        element:  <Apartment></Apartment> ,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      
        <DashboardLayout></DashboardLayout>
     
    ),
    children: [
      {
        path: 'add-Announcement',
        element: (
         
              <AddAnnouncement></AddAnnouncement>
         
        ),
      },
      {
        path: 'profile',
        element: (
          
            <Profile />
         
        ),
      },
      {
        path: 'Announcement',
        element: (
        
            <Announcements />
        
        ),
      },

      {
        path: 'Make-payment',
        element: (
         

            <MyRoom />


        
        ),
      },
      {
        path: 'My-Booking',
        element: (
         


            <MyBooking />

          
        ),
      },
      {
        path: 'manage-bookings',
        element: (
      
              <ManageBookings />
         
        ),
      },
      {
        path: 'manage-users',
        element: (
       
              <ManageUsers></ManageUsers>

        ),
      },
    ],
  },

])
