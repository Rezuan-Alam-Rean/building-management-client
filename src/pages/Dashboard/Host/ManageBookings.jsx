import { useQuery } from "@tanstack/react-query"
import useAuth from "../../../hooks/useAuth"
import { getBookings } from "../../../api/bookings"
import Loader from "../../../components/Shared/Loader"

import MannageTable from "./MannageTable"

const ManageBookings = () => {
  const { user, loading } = useAuth()
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['bookings', user?.email],
    enabled: !loading,
    queryFn: async () => await getBookings(user?.email),
  })

  if (isLoading) return <Loader />
  return (
    <>
      

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Room img 
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                     user Info
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      rent
                    </th>
                   
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      apartmentNo
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table Row Data */}{' '}
                  {bookings &&
                    bookings.map(booking => (
                      <MannageTable key={booking._id} booking={booking} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ManageBookings
