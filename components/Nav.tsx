import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import {
  ShoppingCartIcon,
  CogIcon,
  SearchIcon,
  HomeIcon,
  UserIcon,
  ViewGridIcon,
  MenuAlt3Icon,
  MenuAlt1Icon,
} from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  {
    name: 'Dashboard',
    href: '/Dashboard',
    icon: ViewGridIcon,
    current: false,
  },
  { name: 'Explore', href: '/Explore', icon: SearchIcon, current: false },
  { name: 'Cart', href: '/Cart', icon: ShoppingCartIcon, current: false },
  { name: 'Profile', href: '/Profile', icon: UserIcon, current: false },
  { name: 'Settings', href: '/Settings', icon: CogIcon, current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // Fully expanded sidebar
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          {/* Dialog is the actual panel that slides in and out. */}
          <Dialog as="div" className="relative z-40" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* right side of panel */}
              <div className="fixed inset-0" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex flex-col">
              {/* Left side of panel (main panel) + Linear Transition */}
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                {/* The `onClose` callback fires when an open dialog is dismissed,
                which happens when the user clicks outside the your `Dialog.Panel`
                or presses the Escape key. */}
                <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs bg-white">
                  <Transition.Child
                    as={Fragment}
                    // enter="ease-in-out duration-300"
                    // enterFrom="opacity-0"
                    // enterTo="opacity-100"
                    // leave="ease-in-out duration-300"
                    // leaveFrom="opacity-100"
                    // leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 pt-2 -mr-12"></div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto border-r border-gray-200">
                    <div className="flex items-center flex-shrink-0 px-6">
                      <Image // Insert link to landing page here.
                        className="w-auto h-8"
                        src="/Logo.svg"
                        alt="bound"
                        width={30}
                        height={30}
                      />
                      <button
                        type="button"
                        // MenuAlt3Button positioned to the right of sidebar (ml-auto)
                        className="flex items-center justify-center w-10 h-10 ml-auto rounded-full"
                        onClick={() => setSidebarOpen(false)}
                      >
                        {/* <span className="sr-only">Close sidebar</span> */}
                        {/* Arrow icon for phone menu */}
                        <MenuAlt3Icon className="w-8 h-8 text-slate-900" />
                      </button>
                    </div>
                    {/* Mapping Names, Icons, and Links */}
                    <nav className="px-2 mx-auto mt-12 space-y-1 max-w-8xl sm:px-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-amber-400'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-4 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-amber-400'
                                : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Not expanded Sidebar */}
        <div className="hidden md:flex md:w-fit md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="z-0 flex items-center flex-shrink-0 px-4">
                {/* <img className="w-auto h-8" src="Logo.svg" alt="bound" /> */}
                <button
                  type="button"
                  className="flex items-center px-2 py-2"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  {/* <MenuAlt1Icon
                    className="h-6 text-gray-900 w-7"
                    aria-hidden="true"
                  /> */}
                  {/* This Button expands sidebar to full width */}
                  <Image
                    className="w-auto h-8 opacity-100 hover:opacity-0"
                    src="/Logo.svg"
                    alt="bound"
                    width={30}
                    height={30}
                  />
                  {/* Shows when you hover over the logo to expand the sidebar. */}
                  <MenuAlt1Icon className="absolute z-10 w-8 h-8 duration-300 ease-in-out opacity-0 text-slate-900 hover:opacity-100 hover:bg-white" />
                </button>
              </div>
              <nav className="px-2 mx-auto mt-10 space-y-1 max-w-8xl sm:px-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-amber-400'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-4 text-base font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-amber-400'
                          : 'text-gray-400 group-hover:text-gray-500 ',
                        'mr-4 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {/* {item.name} Name of icon */}
                  </a>
                ))}
              </nav>
            </div>
            {/* <div className="flex flex-shrink-0 p-4 border-t border-gray-200"></div> This is a bottom border */}
          </div>
        </div>

        {/* Small Sidebar Mobile (Hamburger Menu) */}
        <div className="flex flex-col flex-1 md:pl-20">
          <div className="sticky top-0 z-10 pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
            {/* Open sidebar button */}
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 pt-5"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                {/* Replace with your content */}
                {/* <div className="py-4">
                  <div className="border-4 border-gray-200 border-dashed rounded-lg h-96" />
                </div> */}
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
