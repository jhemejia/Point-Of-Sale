import { Link } from 'react-router-dom';
import DropDownProfile from './DropDownProfile';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

type HeaderProps = {
    aSideOpen: boolean,
    setASideOpen: Function,
}

const Header = (props:HeaderProps) => {
   
  return (
    <>
    <header className="flex w-full items-center justify-between border-b-2 border-gray-100 bg-white p-2">
              {/*   <!-- logo --> */}
                <div className="flex items-center space-x-2 pl-2">
                    <button type="button" className="text-3xl" onClick={()=>{props.setASideOpen(!props.aSideOpen)}}><Icon path={mdiMenu} size={1} /></button>
                    <Link to='/' className='w-20'><img src={'/logo.png'} className='w-20 h-10' alt="" /></Link>
                </div>
                {/* <!-- button profile --> */}
                <div className='flex items-center space-x-4'>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </div>
                    <DropDownProfile />
                </div>
            </header>
    </>
  )
}

export default Header