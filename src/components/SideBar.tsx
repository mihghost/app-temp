import { useState } from "react";
import SearchLocation from "./SearchLocation";
import { useEffect } from 'react'
import axios from "axios"
 
const SideBar = () => {
 
 
const [isOpen, setIsOpen] = useState(false);
 
const [post, setPost] = useState<any[]>([{}]);
const [count, setCount] = useState(0);
const [slug, setSlug] = useState<string>();
const baseURL = `http://testess.atwebpages.com/api.php?n=10`;
 
 const increment = () => {
  setCount((prevCount) => prevCount + 1);
};
useEffect(() => {
axios.get(baseURL).then((response) => {
  setPost(response.data);
  console.log(response.data);
});
}, [count])
useEffect(() => {
  const interval = setInterval(increment, 100000);
  return () => clearInterval(interval);
}, []);
 
 
  return (
    <div className="flex flex-col min-h-screen bg-darkblue w-full lg:w-1/3 p-7 lg:p-4 xl:p-7 space-y-10 overflow-x-hidden">
      {isOpen ? (
        <SearchLocation onClose={() => setIsOpen(false)} />
      ) : (
        <>
          <div className="relative flex justify-between mb-10">
            <button
              className="static z-10 px-4 py-2 text bg-[#6E707A] hover:bg-[#6E707A]/70 text-gray-150 shadow-lg"
              onClick={() => setIsOpen(true)}
            >
              Search for places
            </button>
            <button className="static z-10 px-4 py-2 text bg-[#6E707A] hover:bg-[#6E707A]/70 text-gray-150 rounded-full shadow-lg">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
 
          <div className="relative -mx-36 flex justify-center items-center max-h-40">
            <img
              src="/images/Cloud-background.png"
              alt="bg"
              className="opacity-10 absolute max-w-52"
            />
            <img src="/images/Shower.png" alt="weather" className="max-h-48" />
          </div>
 
          <div className="flex flex-col items-center justify-between flex-grow pt-6">
            <h1 className="text-gray-150 text-[144px] font-medium">
 
 
 
             
            {post[count] === undefined ? "ops" : post[count].temperatura}<span className="text-5xl text-gray-250">&deg;C</span>
            </h1>
            <h3 className="font-semibold text-4xl text-gray-250">Shower</h3>
            <div className="flex flex-col items-center text-center text-gray-350 text-lg space-y-5">
              <p >{post[count] === undefined ? "ops" : post[count].tempo} &bull;</p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Montes Claros
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
 
export default SideBar;
