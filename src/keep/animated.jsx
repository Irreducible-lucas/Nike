import AnimatedNumber from "./component/AnimatedNumber";
import { glint } from "./constant";

const App = () => {
  return ( 
   <div>
          <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-transactions)] before:content-[counter(num)]"> <span class="sr-only">44</span>million </span>
     
          $<span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-assets)] before:content-[counter(num)]"> <span class="sr-only">119</span> trillion </span>
      
          <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-users)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
            <span class="sr-only">4600</span>
          </span>




          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8 pb-40">
        {glint.map((item) => (
          <div key={item.id} className="text-center flex flex-col items-center">
            <h1 className="text-2xl text-semibold">
            <AnimatedNumber endValue={item.title} />
          </h1>
            <p className="text-lg text-bolder">{item.title}</p>
            
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8 pb-40">
        <div>
       
        <h1 className=" text-2xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-award)] before:content-[counter(num)]" ><span class="sr-only">127</span></h1>
        <p className="text-lg text-bolder">Awards Rece</p>
        </div>
        <div>
        <h1 className=" text-2xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-coffe)] before:content-[counter(num)]"><span class="sr-only">1505</span></h1>
        <p className="text-lg text-bolder">coffe</p>
        </div>
        <div>
        <h1 className=" text-2xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-project)] before:content-[counter(num)]"><span class="sr-only">109</span></h1>
        <p className="text-lg text-bolder">project</p>
        </div>
        <div>
        <h1 className=" text-2xl animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-client)] before:content-[counter(num)]"><span class="sr-only">102</span></h1>
        <p className="text-lg text-bolder">Happy client</p>
        </div>

      </div>
    


        
</div>
   );
}
 
export default App;