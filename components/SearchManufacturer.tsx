"use client"

import { useState, Fragment } from 'react'

import Image from 'next/image'

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions, Transition } from '@headlessui/react'

import { manufacturers } from '@/constants'
import { SearchManufacturerProps } from '@/types'
import React from 'react'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, setQuery] = useState('')

    const filteredManufacturers = 
    query === " " 
    ? manufacturers 
    : manufacturers.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, "")
    ))
  return (
    <div className='search-manufacturer'>
        <Combobox>
           <div className='relative w-full'>
            <ComboboxButton className="absolute top-[14px]">
                <Image
                    src="/car-logo.svg"
                    width={20}
                    height={20}
                    className="ml-4"
                    alt="Car Logo"
                     />
            </ComboboxButton>
            <ComboboxInput 
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
            />

            <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
            >
                <ComboboxOptions>

                </ComboboxOptions>

            </Transition>
            </div> 
        </Combobox>


    </div>
  )
}

export default SearchManufacturer