import Image from 'next/image';
import NavLinks from './NavLinks';
// import Marquee from './Marquee';
const Header = () => {

    const date = new Date().toLocaleDateString("bn-BD",
        {
            dateStyle: "full"
        }
    );
    return (
        <header className='border-t-4 border-error border-b border-base-300 bg-white'>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8'>
                <div className='flex items-center gap-3 sm:gap-4'>
                    <Image
                        height={50}
                        width={50}
                        src="/logo.webp"
                        alt="Website logo"
                        className='h-10 w-10 object-contain sm:h-12 sm:w-12'
                    />
                    <div className='flex flex-col'>
                        <h2 className='font-serif text-lg font-bold leading-tight tracking-tight text-neutral sm:text-2xl lg:text-3xl'>
                            Bangla News 24
                        </h2>
                        <p className='mt-0.5 text-[11px] leading-snug text-neutral/60 sm:text-xs lg:text-sm'>
                            {date}
                        </p>
                    </div>
                </div>

                <div className='flex items-center gap-2 sm:gap-3'>
                    <button className="btn btn-outline btn-sm rounded-sm border-neutral/30 px-3 font-medium text-neutral hover:border-neutral hover:bg-neutral hover:text-white sm:btn-md sm:px-5">
                        সাইন ইন
                    </button>
                    <button className="btn btn-sm rounded-sm border-none bg-red-700 px-3 font-medium text-white shadow-none hover:bg-red-800 sm:btn-md sm:px-5">
                        সাইন আপ
                    </button>
                </div>
            </div>
            <NavLinks/>
            
        </header>
    );
};

export default Header;