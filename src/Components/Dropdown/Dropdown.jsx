import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import userProfilePic from '../../assets/sampleuser.png'
import toast from 'react-hot-toast'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  const navigator=useNavigate();
  async function logout() {
    try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/logout`, {
            method: 'POST', // Or the appropriate HTTP method
            credentials: 'same-origin', // This sends cookies along with the request
        });
        const data=await response.json()
        if (response.ok) {
            // Logout was successful, handle UI changes or redirects here
            // console.log('Logged out successfully');
            // console.log(data.message)
            // Clear the cookies on the client side
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            localStorage.clear()
            navigator('/signin')
            toast.success("Logged out successfully!")
        } else {
            // Handle error response
            // console.error('Logout failed');
            toast.error("Could not logout!")

        }
    } catch (error) {
        console.error('Error during logout:', error);
    }
}
  return (
    <Menu as="div" className="relative inline-block text-left ml-auto">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold mt-4">
       <div className="-ml-10 -mt-2 lg:block">
          <span className="relative inline-block">
            <img
              className="h-10 w-10 rounded-full"
              src={JSON.parse(localStorage.getItem('user_data'))?.photo?JSON.parse(localStorage.getItem('user_data'))?.photo:userProfilePic}
              alt="Profile pic"
            />
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
          </span>
        </div>
          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item>
              {({ active }) => (
                <Link
                  to='/dashboard'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Dashboard
                </Link>
              )}
            </Menu.Item>
            {JSON.parse(localStorage.getItem('user_data'))?.role==="Host"?
              <Menu.Item>
            {({ active }) => (
              <Link
                to='/tournaments/create'
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Create Tournament
              </Link>
            )}
          </Menu.Item>
        :
        <Menu.Item>
        {({ active }) => (
          <Link
            to='/tournaments/live'
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            Participate
          </Link>
        )}
      </Menu.Item>
        }
       {JSON.parse(localStorage.getItem('user_data'))?.role==="Host" && 
        <Menu.Item>
        {({ active }) => (
          <Link
            to='/hostdashboard'
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            Manage
          </Link>
        )}
      </Menu.Item>}
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/profile'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </Link>
              )}
            </Menu.Item>
            <form onSubmit={(e)=>{
              e.preventDefault();
              if(window.confirm('Do you wish to logout?')){
                logout();
              }
             }}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                    >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}