import Power from '@/public/images/power.svg' 
import User from '@/public/images/user.svg' 
import Controller from '@/public/images/controller.svg' 
import Vibrate from '@/public/images/vibrate.svg' 
import Baby from '@/public/images/baby.svg' 
import Image from 'next/image'

export default function Footer() {
    return(
        <div className='flex justify-center font-kufam bg-gradient-to-t from-black/80 to-transparent mac:hidden '>
            <div className='flex w-[1216px] py-10'>
                <div className='flex gap-10 w-full justify-center'>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-white'>Jogue também offline</h1>
                        <Image
                           src={Power}
                           alt='Power'
                        />
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-white'>67 jogadores</h1>
                        <Image
                           src={User}
                           alt='Power'
                        />
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-white'>Compativel com uso remoto</h1>
                        <Image
                           src={Controller}
                           alt='Power'
                        />
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-white'>Vibração no controle</h1>
                        <Image
                           src={Vibrate}
                           alt='Power'
                        />
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-white'>Permitido para menores</h1>
                        <Image
                           src={Baby}
                           alt='Power'
                        />
                    </div>
            
                </div>
            </div>
        </div>
    )
}