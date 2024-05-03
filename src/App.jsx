import Nav from "./assets/component/Nav";
import {Hero, PopularProduct, SuperQuality,Services, SpecialOffer, CustomerReviews, Subscribe, Footer, } from "./sections"





const App = () => {
  return ( 
 <main className="relative">
    <Nav />
  <section className="xl-padding-l wide:padding-r padding-b">
    < Hero />
  </section>
  <section className="padding">
    < PopularProduct />
  </section>
  <section className="padding">
    < SuperQuality />
  </section>
  <section className="padding-x padding-y">
    < Services />
  </section>
  <section className="padding">
    < SpecialOffer />
  </section>
  <section className="bg-blue-100 padding">
    <CustomerReviews />
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
    < Subscribe />
  </section>
  <section className="bg-black padding-x padding-t pb-8">
   <Footer />
  </section>

 

 </main>
   );
}
 
export default App;