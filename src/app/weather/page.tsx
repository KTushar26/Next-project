
import CityList from '@/components/ui/weather/cityList';
import Form from '@/components/ui/weather/form';
import React from 'react'



const MainPage = async ({ searchParams }) => {
  const city = (await searchParams).cityName;

  return (
    <div className='text-5xl'>Weather Forecasting
      <div className=' flex h-screen flex-col w-full items-center justify-center gap-10 '>
        <Form />
        <CityList city={city} />
      </div>
    </div>
  )
}

export default MainPage