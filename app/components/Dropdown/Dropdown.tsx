import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Dropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#6cb332] px-3 py-2 text-sm font-semibold text-white ring-1 shadow-xs ring-inset hover:bg-[#6cb332]">
          Registrate como:
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-white" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#6cb332] ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="https://app.miplante.com/register/ally-register"
              className="block px-4 py-2 text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Aliado
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="https://app.miplante.com/register/client-register"
              className="block px-4 py-2 text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Cliente
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

export default Dropdown;