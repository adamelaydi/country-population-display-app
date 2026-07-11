"use client";
import { useFilterOpen } from "../hooks/filterhook"
import { useState } from "react";
function FilterInput() {
    const [filterOpen,setOpen]=useFilterOpen(false)
    const [value,setValue]=useState("filter by region");
    return (
        <div className="filter relative">
            <input readOnly value={value} onClick={()=>{ setOpen(filterOpen?false:true)}} className="shadow-[0_0px_24px_rgba(0,0,0,0.22)]    capitalize h-[30] w-[140] p-[5] rounded-[5px] outline-none" type="text"   placeholder="All" />
            <ul className="bg-[#ececec] w-full  p-[7] mt-[10] rounded-[5px] absolute top-[25]" style={{
                display:filterOpen?"block":"none",
            }}>
                <li onClick={()=>{setOpen(false);setValue("africa")}} className="capitalize rounded-[5px] p-[5] hover:bg-[#ffffff] ">africa</li>
                <li onClick={()=>{setOpen(false);setValue("europe")}} className="capitalize rounded-[5px] p-[5] hover:bg-[#ffffff] ">europe</li>
                <li onClick={()=>{setOpen(false);setValue("australia")}} className="capitalize rounded-[5px] p-[5] hover:bg-[#ffffff] ">australia</li>
                <li onClick={()=>{setOpen(false);setValue("asia")}} className="capitalize rounded-[5px] p-[5] hover:bg-[#ffffff] ">asia</li>
                <li onClick={()=>{setOpen(false);setValue("north america")}} className="capitalize rounded-[5px] p-[5] hover:bg-[#ffffff] ">north america</li>
                <li onClick={()=>{setOpen(false);setValue("south america")}} className="capitalize rounded-[5px] p-[5] hover:bg-[#ffffff] ">south america</li>
            </ul>
        </div>
    )
}

export default FilterInput