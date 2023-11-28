/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import Loader from '../../components/Shared/Loader';
import Container from '../../components/Shared/Container';
import Card from './Card';
import { Helmet } from 'react-helmet-async';
import { getAllRooms } from '../../api/rooms';


const Apartment = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setLoading(true)
    getAllRooms().then(data => {
      setRooms(data)

      setLoading(false)
    })
  }, [])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRooms = rooms.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(rooms.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (loading) return <Loader />;

  return (
    <div>
      <Container>
        <Helmet>
          <title>Putul's Paradise || Apartments</title>
        </Helmet>


        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 gap-5 md:gap-16 p-5 md:px-20'>



          {currentRooms.map(room => (
            <Card key={room._id} room={room} />
          ))}
        </div>
        <div className='flex justify-center mb-10'>
          <ul className='flex space-x-4'>
            {pageNumbers.map(number => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                    } px-4 py-2 rounded`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>


    </div>
  );
};

export default Apartment;
