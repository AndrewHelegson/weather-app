import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from './Services/weatherServices';

const TemperatureAndDetails = ({ weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
} }) => {
    return (
        <div className='sm:max-w-lg sm:mx-auto'>
            <div className='
            flex
            items-center
            justify-center
            py-6
            text-xl
            text-cyan-300
            '>
                <p>{details}</p>
            </div>
            <div className='
            flex
            flex-row
            items-center
            justify-around
            text-white
            py-6
            '>
                <img src={iconUrlFromCode(icon)} alt='sun'
                    className='w-20'
                />

                <p className='
                text-5xl
                '
                >
                    {`${temp.toFixed()}°`}
                </p>

                <div className='
                flex
                flex-col
                space-y-2
                ' >
                    <div className='
                    flex
                    flex-col
                    space-y-2
                    text-sm
                    items-center
                    justify-center
                    ' >
                        <UilTemperature size={18}
                            className='
                        mr-1
                        ' />
                        Real fell:
                        <span className='
                        font-medium
                        ml-1
                        ' >
                            {`${feels_like.toFixed()}°`}
                        </span>
                        <UilTear size={18}
                            className='
                        mr-1
                        ' />
                        Humidity:
                        <span className='
                        font-medium
                        ml-1
                        ' >{`${humidity.toFixed()}%`}</span>
                        <UilWind size={18}
                            className='
                        mr-1
                        ' />
                        Wind:
                        <span className='
                        font-medium
                        ml-1
                        ' >
                            {`${speed.toFixed()}km/h`}
                        </span>
                    </div>
                </div>
            </div>
            <div className='
            flex
            flex-row
            items-center
            justify-center
            space-x-2
            text-white
            text-sm
            py-3
            ' >
                <div className='flex'>
                    <div className='block sm:flex sm:flex-row space-x-2'>
                        <UilSun className="hidden sm:block" />
                        <p className='
                    
                        font-light
                        '>Rise:
                            <span className='
                            font-medium
                            ml-1
                            ' >
                                {formatToLocalTime(sunrise, timezone, "hh:mm a")}
                            </span>
                        </p>
                        <p className='font-light hidden sm:inline' >|</p>
                        <UilSunset className="hidden sm:block" />
                        <p className='
                    
                        font-light
                        '>Set:
                            <span className='
                            font-medium
                            ml-1
                            ' >
                                {formatToLocalTime(sunset, timezone, "hh:mm a")}
                            </span>
                        </p>
                        <p className='font-light hidden sm:inline' >|</p>
                    </div>
                    <div className='block sm:flex sm:justify-end sm:flex-row space-x-10 sm:space-x-2'>
                        <UilSunset className="hidden sm:block" />
                        <p className='
                    
                        font-light
                        '>High:
                            <span className='
                            font-medium
                            ml-1
                            ' >
                                {`${temp_max.toFixed()}°`}
                            </span>
                        </p>
                        <p className='font-light hidden sm:inline' >|</p>
                        <UilSunset className="hidden sm:block" />
                        <p className='
                    
                        font-light
                        '>Low:
                            <span className='
                            font-medium
                            ml-1
                            ' >
                                {`${temp_min.toFixed()}°`}
                            </span>
                        </p>
                        <p className='font-light hidden sm:inline' >|</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemperatureAndDetails
