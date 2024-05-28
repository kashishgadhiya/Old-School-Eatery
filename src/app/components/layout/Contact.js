import Link from "next/link";
import Image from "next/image";

import Phone from "../icons/Phone";
import Instagram from "../icons/Instagram";

import fb from '../../../../assets/fb.png'

export default function Contact(){
    return (
<section id="contact">
        <div className="text-center">
          <h3 className="uppercase text-gray-400 font-semibold">Don't hesitate</h3>
          <h2 className="font-bold text-4xl">Contact us</h2>
        </div>
       
        <div className="flex gap-20 px-5 m-10 flex-wrap mx-auto">
         
            {/* talk to us  */}
            <div className="px-10  sm:mx-auto">
                <h5 className="font-semibold text-2xl text-gray-500 py-5 ">Talk to us </h5>
                <div className="flex gap-2 justify-center items-center  p-3  ">
                <Phone />
               <Link href={'https://api.whatsapp.com/send/?phone=9099543210&text&type=phone_number&app_absent=0'}  target="_blank" className="  hover:text-green-400"> WhatsApp</Link> 
                </div>
                <div className="flex gap-2 items-center p-3">
                <Instagram />
               <Link href={'https://www.instagram.com/oldschoolvadodara/'}  target="_blank" className="  hover:text-pink-500">Instagram</Link> 
                </div>
                <div className="flex gap-2 items-center mt-3  py-0  p-3">
                <Image src={fb} width={22} alt="fb_logo"></Image>
        
               <Link href={'https://www.facebook.com/oldschoolvadodara/'}  target="_blank" className="  hover:text-blue-500">Facebook</Link> 
                </div>

            </div>
            {/* address */}
            <div >

            <h5 className="font-semibold text-2xl text-gray-500 py-5">Old School Eatery</h5>
             <div >
            <p  className="font-bold">Ground floor, Fortune Platinum,<br/> Tulsidham cross road, <br/>ShreePalli society, Manjalpur, <br/>Vadodara, Gujarat 390011</p>
            </div>
        </div>
        {/* map */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14768.683893603684!2d73.1940618!3d22.2715124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc91723c83da3%3A0x824e8a7e8deee4ca!2sOld%20School%20Manjalpur!5e0!3m2!1sen!2sin!4v1716309326848!5m2!1sen!2sin" width="500" height="300"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
</section>
        )
}