import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
const Inputs = ({ setQuery, units, setUnits }) => {
    const [city, setCity] = useState("")

    const handleKeyPresed = (e) => {
        const key = e.key;
        if (key === "Enter") {
            handleSearchClick(e)
            setCity("")
        }
    }

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) setUnits(selectedUnit)
    }

    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city })
    }

    const handleLocationClick = () => {

        if (navigator.geolocation) {
            toast.info('Fetching users location.')
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success('Location fetched')
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({
                    lat, lon
                })
            })
        }
    }

    return (
        <div className='
        mx-5
        
        column
        sm:max-w-lg
        sm:mx-auto
      sm:flex
      flex-row
      justify-center
      my-6
      '>
            <div className='
            flex
            flex-row
            w-full
            items-center
            justify-center
            sm:justify-end
            sm:space-x-4
            
            '>
                <input
                    onKeyDown={(e) => { handleKeyPresed(e) }}
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder='Search for city...'
                    className='
                text-xl
                font-light
                p-2
                
                w-full
                sm:w-full
                shadow-xl
                capitalize
                focus:outline-none
                placeholder:lowercase
                '/>
                <UilSearch size={25} className="
                ml-5
                text-white
                cursor-pointer
                transition ease-out
                scale-150
                sm:scale-100
                hover:scale-125 
                "
                    onClick={handleSearchClick}
                />
                <UilLocationPoint size={25} className="
                hidden
                sm:block
                text-white
                cursor-pointer
                transition ease-out
                scale-150
                sm:scale-100
                hover:scale-125   
                "
                    onClick={handleLocationClick}
                />
            </div>
            <div className='sm:hidden mt-5 flex '>
                <UilLocationPoint size={25} className="
                    text-white
                    cursor-pointer
                    transition ease-out
                    scale-150
                    sm:scale-100
                    hover:scale-125
                    "
                    onClick={handleLocationClick}
                />
                <div className='
            flex
            flex-row
            sm:hidden
            w-1/4
            items-center
            justify-center
            ' >
                    <button
                        name='metric'
                        className='
                text-xl
                text-white
                font-light
                transition ease-out
                hover:scale-125
                '
                        onClick={handleUnitsChange}
                    >°C</button>
                    <p
                        className='
                text-xl
                text-white
                mx-1 
                '
                    >|</p>
                    <button
                        name='imperial'
                        className='
                text-xl
                text-white
                font-light
                transition ease-out
                hover:scale-125 
                '
                        onClick={handleUnitsChange}
                    >°F</button>
                </div>
            </div>
            <div className='
            hidden
            sm:flex
            sm:flex-row
            w-1/4
            items-center
            justify-center
            ' >
                <button
                    name='metric'
                    className='
                text-xl
                text-white
                font-light
                transition ease-out
                hover:scale-125
                '
                    onClick={handleUnitsChange}
                >°C</button>
                <p
                    className='
                text-xl
                text-white
                mx-1 
                '
                >|</p>
                <button
                    name='imperial'
                    className='
                text-xl
                text-white
                font-light
                transition ease-out
                hover:scale-125 
                '
                    onClick={handleUnitsChange}
                >°F</button>
            </div>
        </div>
    )
}

export default Inputs
