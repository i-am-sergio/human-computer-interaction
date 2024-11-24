import React from 'react'
import imgNelzon from "../assets/Nelzon.jpg";
import { IoMdDocument } from "react-icons/io";

const Etapa = ( {title, text} ) => {
    return (
        <div>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={imgNelzon} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {text}
                    </p>
                    <button className="px-4 py-2 my-4 text-sm font-semibold text-white uppercase transition-colors duration-200 transform bg-orange-400 rounded hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                        Documento PDF <IoMdDocument />
                    </button>
                    <button className="px-4 py-4 text-sm font-semibold text-white uppercase transition-colors duration-200 transform bg-orange-400 rounded hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                        Documento PDF <IoMdDocument />
                    </button>
                </div>
            </a>
        </div>
    )
}

export default Etapa