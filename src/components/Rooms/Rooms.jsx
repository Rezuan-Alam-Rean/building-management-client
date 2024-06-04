import { useEffect, useState } from "react";
import Container from "../Shared/Container";

import Heading from "../Shared/Heading";
import Categories from "../Categories/Categories";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";
import Card from "./Card";

const Rooms = () => {

  const axiosCommon = useAxiosCommon()
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams()
  const category = params.get('category')

  console.log(category)
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ['rooms', category],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms?category=${category}`)

      return data
    },
  })

  if (isLoading) return <LoadingSpinner />


  return (
    <div>
        <Categories/>
      <Container>
        {/* {
                rooms.map(room => (
                    <RoomsCard key={room?._id} room = {room} ></RoomsCard>
                ))
             } */}
        {rooms && rooms.length > 0 ? (
          <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {rooms.map(room => (
              <Card key={room._id} room={room} />
            ))}
          </div>
        ) : (
          <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
            <Heading
              center={true}
              title='No Rooms Available In This Category!'
              subtitle='Please Select Other Categories.'
            />
          </div>
        )}

      </Container>
    </div>
  );
};

export default Rooms;