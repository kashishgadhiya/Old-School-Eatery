import MenuItem from "../Menu/MenuItem";
import  pavbhaji from "../../../../assets/pav_bhaji.jpg"
import vegDam from '../../../../assets/veg_dam.jpg'
import pmk from '../../../../assets/palak_masala_khichdi.jpg'
import Link from "next/link";
import Right from '../icons/Right'

export default function HomeMenu(){
    return (
        <>
       < section className="my-10">

        <div className="text-center">
            <h3 className="uppercase text-gray-400 font-semibold">Check out</h3>
            <h2 className="font-bold text-4xl">Our Best Sellers</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-7">
          <MenuItem  img={pavbhaji} name ={'Pav Bhaji'} description={"Savor Mumbai's iconic Pav Bhaji,buttery bread rolls served with spicy mashed vegetables, a flavorful classic"}/>
          <MenuItem  img={vegDam} name ={'Veg Dum Biryani'} description={"Experience aromatic basmati rice layered with vegetables, spices, and herbs in our exquisite Veg Dum Biryani."}/>
          <MenuItem  img={pmk} name ={'Palak Masala Khichdi'} description={" Wholesome rice-lentil dish infused with spinach, spices, and flavorsome masala, perfect comfort food"}/>


        </div>
        <div  className="flex">

            <Link href={'/menupage'}  
             className='bg-black text-white flex gap-2 items-centertext-white px-4 py-2  mx-auto rounded-full w-40 my-10'>Check more
             <Right/>
             </Link>
             </div>
       </section>
        </>
    )

}