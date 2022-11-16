import React from 'react'
import { iconUrlFromCode } from './Services/weatherServices'

const Forecast = ({ title, items }) => {
    return (
        <div className='mx-5 sm:max-w-lg sm:mx-auto'>
            <div className='
      flex
      items-center
      justify-center
      mt-6
      '>
                <p className='
        text-white
        font-medium
        uppercase
        '>{title}</p>
            </div>
            <hr className='my-2' />
            <div className='
            flex
            flex-row
            items-center
            justify-between
            text-white
            ' >
                {items.map((item,i) => (

                    <div key={`${item.temp}-${i}`} className='
                    flex
                    flex-col
                    items-center
                    ' >
                        <p className='
                        font-light
                        text-sm
                        '>
                            {item.titile}
                        </p>
                        <img src={iconUrlFromCode(item.icon)}
                            alt="weather"
                            className='w-12 my-1'
                        />
                        <p className='font-medium' >{`${item.temp.toFixed()}°`}</p>
                    </div>

                ))}


            </div>
        </div>
    )
}

export default Forecast
