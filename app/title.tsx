import Image from "next/image";

export default function Title() {
  return (
    <header className="bg-slate-200 p-2 max-sm:h-16">
      <div className="mx-auto mh-auto max-w-5xl px-8 max-sm:px-4">
        <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 items-center max-sm:flex ">
          <img alt="Kolmark Logo" src="images/logo.png" className="max-sm:h-12 " />

          <li className="flex py-6 max-sm:hidden mx-6">
            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 sm:hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <p className="text-lg font-medium">(03) 6393 2704</p>
              <p className="text-gray-600 font-medium">info@kolmark.com.au</p>
            </div>
          </li>
          <li className="flex py-6 max-sm:hidden mx-6">
            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 sm:hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div className="ml-4 flex flex-1 flex-col text-gray-600">
              <p className="font-medium">19 Gatenby Drive</p>
              <p className="font-medium">Westbury</p>
              <p className="font-medium">TAS 7303</p>
            </div>
          </li>
          <div className="flex flex-1 max-sm:flex sm:hidden justify-end">
            <button className="bg-transparent hover:bg-slate-300 text-gray-800 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
