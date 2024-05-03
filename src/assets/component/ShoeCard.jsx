const ShoeCard = ({imgURL, ChangeBigShoeImage, bigShoeImg}) => {

  const handleclick =() =>{
    if (bigShoeImg !== imgURL.bigShoe){
      ChangeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImg === imgURL.bigShoe ? 'border-red-500': 'border-transparent'} cursor-pointer max-sm:flex-1` } onClick={handleclick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:mp-4">
        <img src={imgURL.thumbnail} width={127} height={103} alt="shoe collection" className="object-contain " />
      </div>
      
    </div>   
    );
}
 
export default ShoeCard;