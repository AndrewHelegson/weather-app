import React from 'react'
import { formatToLocalTime, mobileFormatToLocalTime } from './Services/weatherServices'

const TImeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
    return (
        <div>
            <div className='
            sm:hidden
            flex
            items-center
            justify-center
            my-6
            ' >
                <p className='
                text-white
                text-xl
                font-extralight
                '>
                    {mobileFormatToLocalTime(dt, timezone)}
                </p>

            </div>
            <div className='
            hidden
            sm:flex
            items-center
            justify-center
            my-6
            ' >
                <p className='
                text-white
                text-xl
                font-extralight
                '>
                    {formatToLocalTime(dt, timezone)}
                </p>
            </div>
            <div
                className='
            flex
            items-center
            justify-center
            my-3
            '
            >
                <p className='
                text-white
                text-3xl
                font-medium
                '>
                    {`${name}, ${country}`}
                </p>
            </div>
        </div>
    )
}

export default TImeAndLocation
