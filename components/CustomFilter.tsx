"use client"

import {Fragment, useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'
import { Router } from 'next/router'
import { updateSearchParams } from '@/utils'


export default function CustomFilter<T>({title, options, setFilter}: CustomFilterProps<T>) {
  
  const [menu, setMenu] =useState(options[0])

  return (
    <div className='w-fit'>
      <Listbox
        value={menu}
        onChange={(e) => {
          setMenu(e);
          setFilter(e.value as unknown as T)
        
        }}
        >
        <div className='relative w-fit z-10'>
          <ListboxButton className="custom-filter__btn">
            <span className='block truncate'>{menu.title}</span>
            <Image 
            src="/chevron-up-down.svg"
            width={20}
            height={20}
            className='ml-4 object-contain'
            alt="chevron up down" />
          </ListboxButton>
          <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
            <ListboxOptions className="custom-filter__options">
              {options.map((option) => (
                <ListboxOption
                key={option.title}
                value={option}
                className={({focus}) => `relative cursor-default select-none py-2 px-4 
                ${focus ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                  >
                {({ selected}) => (
                  <span className={`block truncate ${selected ? 'font-extrabold' : 'font-normal'}`}>
                  {option.title}
                  </span>
                )}
              </ListboxOption>))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>

    </div>
  )
}