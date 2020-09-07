import React, { useEffect, useState } from 'react';
import SideMenu from './sideMenu';
import Home from './Home';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const DashBoard = () => {

    const [spaceList, setList] = useState([]);
    const [loader, showLoader] = useState(false);

    useEffect(() => {
        getList();
    }, [])

    const getList = () => {
        showLoader(true);
        const url = 'https://api.spaceXdata.com/v3/launches?limit=100';
        fetch(url)
            .then(res => res.json())
            .then(response => {
                showLoader(false);
                setList(response);
            })
    }

    const selectYear = (year) => {
        showLoader(true);
        console.log("selected year", year);
        const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`;
        fetch(url)
            .then(res => res.json())
            .then(response => {
                showLoader(false);
                setList(response);
            })
    }

    const filterLaunch = (launch) => {
        showLoader(true);
        const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}`;
        fetch(url)
            .then(res => res.json())
            .then(response => {
                showLoader(false);
                setList(response);
            })
    }

    const filterLand = (land) => {
        showLoader(true);
        const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${land}`;
        fetch(url)
            .then(res => res.json())
            .then(response => {
                showLoader(false);
                setList(response);
            })
    }

    return (
        <div className="container">
            <span className="title">SpaceX Launch Programs</span>
            <div className="flex-container">
                <SideMenu selectYear={selectYear} filterLaunch={filterLaunch} filterLand={filterLand} />
                {loader ?
                    <Loader
                        style={{ margin: "auto", fontSize: "20px", fontWeight: "600" }}
                        type="Bars"
                        color="#4c5497"
                        height="100vh"
                        width={100}
                    />
                    :
                    <Home spaceList={spaceList} />}

            </div>
        </div>
    )
}

export default DashBoard;