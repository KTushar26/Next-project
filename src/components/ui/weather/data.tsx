const Data = ({city}) => {
  return (
    <div key={city.id} className=" flex flex-col items-center  gap-5">
    <p className=" text-3xl font-semibold">Temperature of {city.city} is</p>
     <p className="text-slate-500 text-4xl font-semibold">
       {
         city.temperature 
       } °C
     </p>
   </div>
  )
}

export default Data;