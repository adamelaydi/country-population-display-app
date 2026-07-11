"use client";

import { useState } from "react";
export function useFilterOpen(props:boolean){
    const [filterOpen,setOpen]=useState(props??false)
    return[
        filterOpen,
        setOpen
    ] as const
}