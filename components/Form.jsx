import React from 'react'

function DataDiri(){
  return (
    <div>
          <div className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">
            Nama Lengkap
          </div>
          <div className="flex flex-col md:flex-row">
            <div className=" flex-1 mx-2 svelte-1l8159u">
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  placeholder="First Name"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className=" mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                No. Whatsapp
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  placeholder="Just a hint.."
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
            <div className=" mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                Email
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  placeholder="jhon@doe.com"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
  )
}

function Paket(){
  return(
    <h1>Paket</h1>
  )
}
function Sesi(){
  return(
    <h1>Sesi</h1>
  )
}
function Konfirmasi(){
  return(
    <h1>Konfirmasi</h1>
  )
}

const Form = ({count}) => {
  console.log(count)
    switch (count) {
        case 1:
            return DataDiri()
        case 2:
            return Paket()
        case 3:
            return Sesi()
        case 4:
            return Konfirmasi()

        default:
            break;
    }
  
}

export default Form