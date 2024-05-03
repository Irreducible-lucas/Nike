import { star } from "../icons";


const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return ( 
    <div className="flex  justify-center items-center flex-col ">
<img src={imgURL} alt="customer" className="rounded-full  object-cover w-[120px]h-[120px]"/>
<p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
<div className="mt-3 flex justify-center items-center gap-3">
  <img src={star} alt="rating"  width={24} height={24} />
  <p className="text-xl font-montserrat text-slate-500">({rating})</p>
  <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
</div>

    </div>
   );
}
 
export default ReviewCard;