"use client";
import { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="z-10 w-full bg-gray-900 h-[88px] p-1 pr-15 pl-15 lg:pr-20 lg:pl-20 text-white">
      <div className="flex justify-between items-center px-4 sm:px-10 py-4">
        <div className="flex gap-10 items-center justify-center">
          <svg
            width="44"
            height="40"
            viewBox="0 0 44 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7305 35.547C18.9737 34.9209 19.0897 34.2526 19.0716 33.5812C19.1087 31.7205 19.606 29.8979 20.5191 28.2763C21.43 26.6573 22.7289 25.2901 24.2991 24.2975C24.8805 23.9856 25.3926 23.5591 25.8044 23.0436C26.2162 22.5281 26.5191 21.9345 26.6948 21.2986C26.8706 20.6627 26.9155 19.9977 26.8268 19.3439C26.7382 18.6901 26.5178 18.0612 26.1791 17.495C25.7266 16.7388 25.0753 16.1188 24.2991 15.7063C23.8541 15.3975 23.4266 15.065 23.0191 14.7088L21.9978 13.7088C20.1265 11.7415 19.0771 9.13385 19.0641 6.41875C19.0834 5.74721 18.9681 5.0786 18.7248 4.45236C18.4816 3.82612 18.1154 3.25493 17.6478 2.7725C17.1824 2.29061 16.6246 1.90744 16.0078 1.64585C15.391 1.38427 14.7278 1.24964 14.0578 1.25C13.3882 1.25095 12.7256 1.38617 12.1092 1.64768C11.4928 1.90919 10.9351 2.29167 10.4691 2.7725C10.0024 3.25578 9.63672 3.82729 9.39354 4.45359C9.15036 5.07989 9.03453 5.7484 9.05284 6.42C9.06376 7.2918 9.30388 8.14537 9.74909 8.895C10.1928 9.64336 10.8262 10.2613 11.5853 10.6862C14.6591 12.6313 16.7978 16.35 16.7978 20.0075C16.7902 22.699 15.7609 25.2872 13.9178 27.2487L11.5928 29.3138C10.8341 29.7375 10.2003 30.355 9.75534 31.105C9.30909 31.8538 9.07034 32.7087 9.05909 33.5812C9.03997 34.2528 9.15542 34.9213 9.39865 35.5475C9.64188 36.1737 10.008 36.7449 10.4753 37.2275C10.9409 37.7093 11.4987 38.0924 12.1155 38.3539C12.7322 38.6155 13.3954 38.7502 14.0653 38.75C14.7351 38.7492 15.398 38.6141 16.0146 38.3526C16.6313 38.091 17.1892 37.7085 17.6553 37.2275C18.1218 36.7443 18.4874 36.173 18.7305 35.547Z"
              fill="white"
            />
            <path
              d="M25.5203 9.2C24.9691 8.3725 24.6753 7.39875 24.6753 6.40375C24.6762 5.07091 25.2042 3.7925 26.1441 2.8475C26.9613 2.0253 28.0392 1.51313 29.1929 1.39886C30.3465 1.28459 31.5039 1.57535 32.4666 2.22125C33.2912 2.77488 33.9332 3.56045 34.3116 4.47875C34.69 5.3981 34.7888 6.40865 34.5956 7.38388C34.4023 8.3591 33.9257 9.25565 33.2253 9.96125C32.5271 10.6649 31.635 11.1445 30.663 11.3389C29.6909 11.5333 28.683 11.4336 27.7678 11.0525C26.8518 10.6711 26.0696 10.0263 25.5203 9.2Z"
              fill="white"
            />
            <path
              d="M26.9016 29.3975C27.7253 28.845 28.6941 28.55 29.6841 28.55V28.5475C30.3422 28.5483 30.9937 28.679 31.6011 28.9321C32.2086 29.1852 32.7601 29.5558 33.2241 30.0225C34.044 30.8474 34.554 31.93 34.6679 33.0874C34.7818 34.2449 34.4925 35.4062 33.8491 36.375C33.2998 37.2025 32.5171 37.8481 31.6003 38.23C30.6852 38.6111 29.6773 38.7108 28.7052 38.5164C27.7332 38.322 26.8411 37.8424 26.1428 37.1388C25.4422 36.433 24.9654 35.5363 24.7722 34.5608C24.579 33.5853 24.6779 32.5745 25.0566 31.655C25.435 30.7367 26.0771 29.9512 26.9016 29.3975Z"
              fill="white"
            />
            <path
              d="M41.6553 17.1975C42.2051 18.0247 42.4989 18.9968 42.4991 19.9914C42.4982 21.3246 41.9703 22.6033 41.0303 23.5488C40.5663 24.0153 40.0147 24.3857 39.4073 24.6389C38.7998 24.892 38.1484 25.0228 37.4903 25.0237C36.4993 25.0238 35.5306 24.7287 34.7078 24.1763C33.8833 23.6226 33.2412 22.837 32.8628 21.9188C32.4841 20.9992 32.3852 19.9884 32.5784 19.013C32.7717 18.0375 33.2485 17.1407 33.9491 16.435C34.6474 15.7311 35.5397 15.2513 36.5121 15.0569C37.4844 14.8626 38.4925 14.9624 39.4078 15.3438C40.324 15.7255 41.1062 16.3707 41.6553 17.1975Z"
              fill="white"
            />
            <path
              d="M3.47533 15.8088C4.29908 15.2563 5.26658 14.9613 6.25783 14.9613C6.91576 14.9626 7.56696 15.0938 8.17418 15.3471C8.78139 15.6004 9.33271 15.9709 9.79658 16.4375C10.6161 17.2621 11.1258 18.3443 11.2397 19.5012C11.3536 20.6582 11.0646 21.819 10.4216 22.7875C9.87241 23.6143 9.09021 24.2594 8.17408 24.6413C7.25863 25.0205 6.25116 25.1192 5.27951 24.9249C4.30786 24.7306 3.41582 24.2521 2.71658 23.55C2.01621 22.8444 1.53957 21.9479 1.34634 20.9726C1.15312 19.9974 1.25191 18.9868 1.63033 18.0675C2.00857 17.1488 2.6506 16.3628 3.47533 15.8088Z"
              fill="white"
            />
          </svg>
          <div className="hidden lg:flex gap-4 py-4">
            <div>Feature</div>
            <div>Pricing</div>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 items-center justify-center">
          <div className="bg-[#282F51] text-white text-center h-[42px] rounded-[100px] py-[9px] px-[17px]">
            Login
          </div>
          <div className="bg-[#8B5CF6] text-white text-center h-[42px] rounded-[100px] py-[9px] px-[17px]">
            Sign up
          </div>
        </div>
        {/* <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-10 w-10 text-[#8B5CF6]"
              aria-hidden="true"
            />
          </button>
        </div> */}
        <Popover className="relative lg:hidden">
          <Popover.Button className="inline-flex items-cente text-sm font-semibold leading-6 text-gray-900">
            <Bars3Icon
              className="h-10 w-10 text-[#8B5CF6]"
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-[5px] flex w-screen max-w-min -translate-x-3/4 px-4">
              <div className="bg-gray-800">
                <div className="flex flex-col gap-2 justify-center items-center p-2">
                  <div className="cursor-pointer">Feature</div>
                  <div className="cursor-pointer">Pricing</div>
                  <div className="bg-[#282F51] cursor-pointer text-white w-[100px] text-center h-[30px] rounded-[100px]">
                    Login
                  </div>
                  <div className="bg-[#8B5CF6] cursor-pointer text-white w-[100px] text-center h-[30px] rounded-[100px]">
                    Sign up
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
