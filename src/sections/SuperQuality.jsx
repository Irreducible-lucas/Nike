import Button from "../assets/component/button";
import {shoe8} from "../assets/images"
const SuperQuality = () => {
  return ( 
   <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">We Provide You <span className="text-red-500"> Super </span> <span className="text-red-500"></span> <span className="text-red-500">Quality </span>  Shoe</h2>
      <p className="mt-4 lg:max-w-lg text-slate-500">Ensuring premium comfort and style our meticulously crafted footware is designed to elevate your experience providng you with unmatched quality innovation and a touch of elegance </p>
      <p className="mt-6 lg:max-w-lg text-slate-500">Our dedication to detail and excellence ensure your satisfaction.</p>
      <div className="mt-11">
      <Button label="View details" /> </div>
      </div>
      <div className="flex flex-1 items-center "></div>
      <div className="flex  flex-1 justify-center items-center">
        <img src={shoe8} alt="Shoe8" width={560} height={522} className="object-contain"  /> 
        
      </div>

   </section>
   );
}
 
export default SuperQuality;