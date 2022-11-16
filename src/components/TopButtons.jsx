import React from "react";
/* import { cities } from "./Services/weatherServices"; */

function TopButtons({ setQuery,citiesData }) {


    return (
        <div className="sm:max-w-lg sm:mx-auto hidden sm:flex items-center justify-around my-6">
            {citiesData.slice(-5).map((city,i) => (
                <button
                    key={`${city}-${i}`}
                    className="text-white text-lg font-medium"
                    onClick={() => setQuery({ q: city })}
                >
                    {city}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;