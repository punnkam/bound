import Link from 'next/link';
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';

// const Nav = () => {
//   return (
//     <div className="relative flex">
//       <div className="absolute h-full px-1 bg-white shadow-md w-60">
//         <ChevronDoubleLeftIcon className="absolute top-0 right-0 w-5 h-5 slate-900" />
//         <nav>
//           <Link href="/">Home</Link>
//           <Link href="/Dashboard">Dashboard</Link>
//           <Link href="/Explore">Explore</Link>
//           <Link href="/Cart">Cart</Link>
//           <Link href="/Profile">Profile</Link>
//           <Link href="/Settings">Settings</Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  // MenuIcon,
  DesktopComputerIcon,
  XIcon,
} from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  {
    name: 'Dashboard',
    href: '/Dashboard',
    icon: DesktopComputerIcon,
    current: false,
  },
  { name: 'Explore', href: '/Explore', icon: FolderIcon, current: false },
  { name: 'Cart', href: '/Cart', icon: CalendarIcon, current: false },
  { name: 'Profile', href: '/Profile', icon: InboxIcon, current: false },
  { name: 'Settings', href: '/Settings', icon: ChartBarIcon, current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              // enterFrom="opacity-0"
              // enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 pt-2 -mr-12">
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4">
                      <Image
                        className="w-auto h-8"
                        src="/Logo.svg"
                        alt="bound"
                        width={30}
                        height={30}
                      />
                    </div>
                    <nav className="px-2 mt-5 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-gray-500'
                                : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-40 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img className="w-auto h-8" src="Logo.svg" alt="Bound" />
              </div>
              <nav className="flex-1 px-2 mt-5 space-y-1 bg-white">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 md:pl-64">
          <div className="sticky top-0 z-10 pt-1 pl-1 bg-white md:hidden sm:pl-3 sm:pt-3">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Image
                className="w-auto h-8"
                src="/Logo.svg"
                alt="bound"
                width={30}
                height={30}
              />
            </button>
          </div>
          {/* <main className="flex-1">
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="border-4 border-gray-200 border-dashed rounded-lg h-96" />
                </div>
              </div>
            </div>
          </main> */}
        </div>
      </div>
    </>
  );
}
