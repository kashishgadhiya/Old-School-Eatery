import veg from "../../../../assets/veg.png"
import Image from "next/image"
export default function Footer(){
    return (
        <>
        <div className="">

        <div className=" w-full bg-black text-white mx-0 text-center py-3  mt-2  ">
        <div className="me">Developed By  | <span>Kashish Gadhiya</span></div>
        <div className="me">Areas of Service | <span>Manjalpur & Alkapuri</span></div>
      <div className="copyrights flex items-center justify-center gap-2" >
        Copyright2024&copy;All Right Reserved | <span>OldschoolEatery</span>
      <Image src={veg} width={15} alt="veg_logo"></Image>

      </div>
        </div>
        </div>
        </>
    )
}
