import Image from "next/image"
import one from '../../../../assets/inside_2.jpg'
import two from '../../../../assets/inside_7.jpg'
import four from '../../../../assets/inside_5.jpg'
import five from '../../../../assets/outside_6.jpg'
import seven from '../../../../assets/outside_3.jpg'
import eight from '../../../../assets/outside_4.jpg'
import nine from '../../../../assets/inside.jpg'
import ten from '../../../../assets/outside_5.jpg'

export default function Photos(){
return(
    <>
  <section className=" mx-auto  my-20 picsection">
    <div className="flex lg:gap-4 gap-2 items-center justify-center " >

<div className="flex flex-col lg:gap-2 gap-1 ">

    <Image src={one} alt={'image'} height={500}  className="imghover"></Image>
    <Image src={five} alt={'image'} width={400} className="imghover"></Image>
</div>
<div className="flex flex-col lg:gap-2 gap-1 imghover">

    <Image src={eight} alt={'image'} height={200} className="imghover"></Image>
    <Image src={four} alt={'image'} height={500}className="imghover" ></Image>
    

    
</div>
<div className="flex flex-col lg:gap-2 gap-1">

    <Image src={nine} alt={'image'} width={300} className="imghover"></Image>
    <Image src={seven} alt={'image'} width={300} className="imghover"></Image>
</div>
<div className="flex flex-col lg:gap-2 gap-1">

    <Image src={ten} alt={'image'} width={300} className="imghover"></Image>
    <Image src={two} alt={'image'}  width={300} className="imghover"></Image>

</div>


  

    </div>

  </section>
    </>
)
}