import MenuItem from "../components/Menu/MenuItem";

import pizza_1 from "../../../assets/tandoori_pizza.jpg"
import pizza_2 from "../../../assets/trio_piiza.jpg"
import pizza_3 from "../../../assets/veggi_pizza.jpg"
import pizza_4 from "../../../assets/verdure_pizza.jpg"
import pizza_5 from "../../../assets/menu_pizza.jpg"
import Link from "next/link";

export default function MenuPage() {
    return (
        <>
            
            <div className="flex gap-2 mt-5">
                <h1 className="mx-auto text-black text-3xl font-semibold mt-2">Pizza</h1>
            </div>
          
            {/* pizza */}
            <div className="grid sm:grid-cols-3 gap-4 mt-7">
          <MenuItem  img={pizza_1} name ={'Margherita Pizza'} description={"Classic Margherita Pizza ,Thin crust topped with fresh tomatoes, mozzarella, basil—a timeless Italian favorite."}/>
          <MenuItem  img={pizza_3} name ={'Tandoori Paneer'} description={"Savor the fusion of smoky tandoori flavors atop a crispy crust—a unique twist on classic pizza."}/>
          <MenuItem  img={pizza_2} name ={'Trio Picante'} description={"Experience the bold flavors of Trio Picante ,a tantalizing trio of spicy, zesty, and fiery delights."}/>
          <MenuItem  img={pizza_4} name ={'Veggie delight'} description={"Savor the Veggi Delight,a vibrant medley of fresh vegetables bursting with flavor and wholesome goodness."}/>
          <MenuItem  img={pizza_5} name ={'Verdure Exotica'} description={"Verdure Exotica , a vibrant fusion of exotic vegetables, bursting with flavor and freshness, a culinary adventure awaits!"}/>


        </div>
           

    
        </>
    );
}
