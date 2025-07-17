import { createContext, useEffect, useState } from "react";
import React from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [searchfilter,setsearchfilter] = useState({
        title : "",
        location : ""
    })

    const [issearched,setissearched] = useState(false)

    const [jobs,setjobs] = useState([])

    // functionn to fetch job data
    const fetchjobs = async () => {
        setjobs(jobsData)
    }

    useEffect(() => {
        fetchjobs()
    },[])



    const value = {
        searchfilter,setsearchfilter,
        issearched,setissearched,
        jobs,setjobs
    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}