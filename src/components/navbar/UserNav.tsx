import { IoIosMenu } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";

const UserNav = () => {
  return (
    <div className='py-1 px-2 relative inline-block border rounded-full hover:shadow-md transition'>
      <button className='flex items-center'>
        <IoIosMenu className="h-5 w-5 mr-1"/>
        <HiUserCircle className="h-9 w-9 text-gray-500" />
      </button>
    </div>
  );
};

export default UserNav;
