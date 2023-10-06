'Use client'

import Image from "next/image";

const Search = () => {
    return(
        <div className=" border=[1px] w-full md:w-auto py-2 rounded-full shadow-sm transition cursor-pointer">
            <div className=" flex flex-row items-center justify-between">
                
                <div className="text-sm font-semibold px-6">Anywhere</div>
                <div className="hidden sm:block font-semibold px-6 border-x-[1px] flex-1 text-center">Any Week</div>

                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className="hidden sm:block">Add Guests</div>
                </div>
            
            <div className="p-2 bg-rose-500 rounded-full text-white">
                <Image 
                src="/images/airbnb.svg"
                alt="logo"
                width={18}
                height={18}
                />
            </div>
            </div>
        </div >
    )
}

export default Search;