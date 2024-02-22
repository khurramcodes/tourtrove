import { IoMdSearch } from "react-icons/io";

const SearchFilters = () => {
  return (
    <div className='cursor-pointer h-[48px] lg:h-[64px] flex flex-row justify-between items-center border rounded-full'>
      <div className="hidden lg:block">
        <div className='flex flex-row justify-between items-center'>
          <div className='w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
            <p className='text-xs font-semibold'>Where</p>
            <p className='text-sm font-light'>Search destinations</p>
          </div>
          <div className='h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
            <p className='text-xs font-semibold'>Check in</p>
            <p className='text-sm font-light'>Add dates</p>
          </div>
          <div className='h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
            <p className='text-xs font-semibold'>Check out</p>
            <p className='text-sm font-light'>Add dates</p>
          </div>
          <div className='h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
            <p className='text-xs font-semibold'>Who</p>
            <p className='text-sm font-light'>Add guests</p>
          </div>
        </div>
      </div>
      <div className='p-2'>
        <div className='p-3 bg-primary hover:bg-primary-dark transition rounded-full text-white'>
          <IoMdSearch className="h-[22px] w-[22px]"/>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
