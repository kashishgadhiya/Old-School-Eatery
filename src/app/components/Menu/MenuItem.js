
import Link from "next/link"
import Image from "next/image"
export default function MenuItem({img,name,description}){
    return(
        <>
        <div className=" bg-white p-4 rounded-md text-center hover:bg-gray-200 shadow-2xl hover:shadow-black/50
        transition-all ">
        <Image src={img} alt="img"></Image>
        <h4 className='font-semibold my-3 text-xl'>{name}</h4>
        <p className='text-gray-500 text-sm  my-8'>
        {description}
        </p>
        <div className="">
        <Link className="rounded-full bg-red-600 text-white px-4 py-2 mt-6" 
        target="_blank"
        href={'https://www.zomato.com/vadodara/old-school-eatery-manjalpur/order' }>Order on zomato </Link>

        </div>
       

    </div>
       
        </>
    )
}