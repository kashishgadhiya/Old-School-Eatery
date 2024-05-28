import Image from 'next/image'
import hero from '../../../../assets/inside_6.webp'
import Link from 'next/link'
import Right from '../icons/Right'
export default function Hero() {

    return (
        <>
            <section className='hero md: mt-5 '>
                <div className='md:py-12 py-5'>

                    <h1 className='md:text-3xl font-semibold leading-1  '>Nostalgic Dining  <br></br>with a
                        Modern Twist</h1>
                        
                        <div>

                    <p className=' text-gray-500 mt-6 '>

                        At Old School Eatery, we believe that life is too short to have a dull moment. That's why we've crafted a menu that takes you back to the good old days while offering a modern twist. Whether you're in the mood for a nostalgic meal that reminds you of home or a cozy spot to relax and unwind, we've got you covered.</p>
                    <p className=' text-gray-500 my-2 hidden md:block'> Every bite of our hearty dishes, every sip of our signature drinks, and every conversation with friends is a chance to elevate your everyday experience. Why settle for a dull moment when you can have an unforgettable one? Join us at Old School Eatery, where every moment is a delightful journey through time.</p>
                        </div>
                    {/* buttons */}
                    <div className='mt-5 flex gap-4  text-sm '>

                        <Link href={'https://www.zomato.com/vadodara/old-school-eatery-manjalpur/order'} target="_blank"
                            className='bg-black text-white flex gap-2 items-centertext-white px-4 py-2 rounded-full'>Order now
                            <Right />
                        </Link>
                        <Link className='flex gap-2 py-2 text-gray-600 font-semibold '
                            href='#about' smooth={true}
                        >Learn more <Right />
                        </Link>
                    </div>
                </div>


                {/* image div */}
                <div className=' relative rounded-sm'>

                    <Image src={hero} alt='old school inside view'   ></Image>
                </div>
               

            </section>


        </>

    )


}
