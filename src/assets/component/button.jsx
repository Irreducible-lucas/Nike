const Button = ({label, iconUrl, backgroundColor, textColor, borderColor,fullwidth}) => {
  return ( 
   <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
   ${
    backgroundColor 
    ? `${backgroundColor} $
    {textColor} ${borderColor}` : "bg-red-400 rounded-full text- border-red-500"  
  } rounded-full ${fullwidth && "w-full'} "}`}
  >{label}
   {iconUrl && <img src={iconUrl} alt="arrow-right" 
   className="ml-2 rounded-full w-5 h-5"
   ></img>}
   </button>
   );
}
 
export default Button;