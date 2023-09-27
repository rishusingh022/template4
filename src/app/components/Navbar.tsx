"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Navbar = (props: any) => {
  console.log(props.logo);
  console.log(props.navItems);
  return (
    <div className="bg-gray-900">
      <div className="z-10 w-full bg-gray-900 h-[88px] p-1 pr-[10%] pl-[10%] lg:pr-[5%] lg:pl-[5%] text-white">
        <div className="flex justify-between items-center px-4 sm:px-10 py-4">
          <Image src={props.logo} width={43.75} height={40} alt="logo" />
          <div className="hidden lg:flex gap-10 items-center justify-center">
            {props.navItems.map((item: any) => (
              <div
                key={item.id}
                className="cursor-pointer font-inter font-medium"
              >
                {item.itemName}
              </div>
            ))}
          </div>
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
                    {props.navItems.map((item: any) => (
                      <div
                        key={item.id}
                        className="cursor-pointer font-inter font-medium"
                      >
                        {item.itemName}
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
