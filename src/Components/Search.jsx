import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {HeartIcon}  from '@heroicons/react/24/solid'

function Bar() {
  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
        </span>
        <input className="placeholder-italic placeholder-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
      </label>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
      <HeartIcon className="h-6 w-6 text-gray-500" />
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Button
</button>






    </>
  );
}

export default Bar;
