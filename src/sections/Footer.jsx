import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
   <footer className="max-container">
    <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
      <div className="flex flex-col items-start"> 
      <a href="/">
        <img src={footerLogo} alt="Logo" width={150} height={46} />
      </a>
      <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your prefect sixe in Store. Get Rewards </p>
      <div className="flex items-center gap-5 mt-8">
        {socialMedia.map((icon) => {
          return(
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
              
             </div>

          )
        })}
      </div>
      </div>
            
    </div>
    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
        {footerLinks.map((section) => {
          return(
            
            <div key={section}>
              <h4 className="text-white  font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>{section.links.map((link) => {
                return (
                  <li className="mt-3 font-montserrat text-base leading-normal text-slate-500 hover:text-red-500 cursor-pointer" key={link.name}>
                    <a>{link.name}</a>
                  </li>

                )
              })}</ul>
            </div>
          )
        })}

      </div>
    <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center ">
      <div className="flex flex-1 justify-start  items-center gap-2 font-montserrat cursor-pointer">
        <img src={copyrightSign} alt="copyright"  width={20} height={20} className="rounded-full m-0"/>
        <p>Copyright. All right reserved</p>
      </div>
      <p className="font-montserrat cursor-pointer">Terms and conditions </p>


    </div>

   </footer>
    );
}
 
export default Footer;