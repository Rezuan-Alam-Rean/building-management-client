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
      { path: '/Apartment', 
      element: <PrivateRoute> <Apartment></Apartment> </PrivateRoute> , 
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'add-Announcement',
        element: (
          <PrivateRoute>
            <AdminRoute>

            <AddAnnouncement></AddAnnouncement>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'Announcement',
        element: (
          <PrivateRoute>
            <Announcements/>
          </PrivateRoute>
        ),
      },

      {
        path: 'Make-payment',
        element: (
          <PrivateRoute>
            
            <MyRoom/>

            
          </PrivateRoute>
        ),
      },
      {
        path: 'My-Booking',
        element: (
          <PrivateRoute>
            
            
              <MyBooking/>
            
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-bookings',
        element: (
          <PrivateRoute>
            <HostRoute>

             <ManageBookings/>
            </HostRoute>
            
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <AdminRoute>

            <ManageUsers></ManageUsers>

            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
  
])
