import { useState } from "react";
import Form from "../components/Form";

const Reservasi = () => {
    const [count, setCount] = useState(1)
  return (
    <div className="p-5 lg:w-2/4 lg:mx-auto">
      <div className="mx-5 p-4">
        <div className="flex items-center">
          <div className={`flex items-center ${count >= 1? "text-blue-600" : "text-gray-600"} relative`}>
            <div className={count >= 1? "rounded-full bg-blue-600 transition duration-500 ease-in-out h-12 w-12 py-3 border-2 text-white" : " rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"    
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase">
              Data Diri
            </div>
          </div>
          <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${count >= 2 ? "border-blue-600" :  "border-gray-300"}`}></div>
          <div className={`flex items-center ${count >= 2? "text-blue-600" : "text-gray-600"} relative`}>
            <div className={count >= 2? "rounded-full bg-blue-600 transition duration-500 ease-in-out h-12 w-12 py-3 border-2 text-white" : " rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase">
              Paket
            </div>
          </div>
          <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${count >= 3 ? "border-blue-600" :  "border-gray-300"}`}></div>
          <div className={`flex items-center ${count >=3? "text-blue-600" : "text-gray-600"} relative`}>
            <div className={count >=3? "rounded-full bg-blue-600 transition duration-500 ease-in-out h-12 w-12 py-3 border-2 text-white" : " rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase">
              Sesi
            </div>
          </div>
          <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${count >= 4 ? "border-blue-600" :  "border-gray-300"}`}></div>
          <div className={`flex items-center ${count >=4? "text-blue-600" : "text-gray-600"} relative`}>
            <div className={count >=4? "rounded-full bg-blue-600 transition duration-500 ease-in-out h-12 w-12 py-3 border-2 text-white" : " rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase">
              Konfirmasi
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4">

        <Form count={count} />

        <div className="flex justify-between w-full p-2 mt-4">
            <button 
            onClick={() => setCount(count-1)} disabled={count == 1 ? true : false}
            className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition">
                Kembali
            </button>
            <button onClick={() => setCount(count+1)} disabled={count == 4 ? true : false}
              className="text-base   hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-600  
        bg-blue-600 
        text-blue-100 
        border duration-200 ease-in-out 
        border-blue-600 transition"
            >
              Selanjutnya
            </button>
        
        </div>
      </div>
    </div>
  );
};
export default Reservasi;
