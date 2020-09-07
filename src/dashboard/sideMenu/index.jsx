import React, { useState } from 'react';
import './sideMenu.css';

const SideMenu = (props) => {
    const [selectedYear, setYear] = useState('');
    const [isLaunch, setLaunch] = useState('');
    const [isLand, setLand] = useState('');
    const yearArr = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

    const selectYear = (year) => {
        setYear(year);
        props.selectYear(year);
    }

    const filterLaunch = (isLaunch) => {
        setLaunch(isLaunch);
        props.filterLaunch(isLaunch);
    }

    const filterLand = (isLand) => {
        setLand(isLand);
        props.filterLand(isLand);
    }

    const getClassname = (year) => {
        if (selectedYear === year) return 'year-label active';
        return 'year-label';
    }

    const getClassForLaunch = (launch) => {
        if (isLaunch === launch) return 'year-label active';
        return 'year-label';
    }

    const getClassForLand = (land) => {
        if (isLand === land) return 'year-label active';
        return 'year-label';
    }

    return (
        <div className="menu-container">
            <span className="title text-left">Filters</span>
            <span className="color-black">Launch Year</span>
            <hr />
            <div className="year-container">
                {yearArr.map(item => <span key={item} className={getClassname(item)} onClick={() => selectYear(item)}>{item}</span>)}
            </div>
            <span className="color-black mt-15">Successful Launch</span>
            <hr />
            <div className="mt-15">
                <span onClick={() => filterLaunch(true)} className={getClassForLaunch(true)}>True</span>
                <span onClick={() => filterLaunch(false)} className={getClassForLaunch(false)}>False</span>
            </div>
            <span className="color-black mt-15 row">Successful Landing</span>
            <hr />
            <div className="mt-15">
                <span onClick={() => filterLand(true)} className={getClassForLand(true)}>True</span>
                <span onClick={() => filterLand(false)} className={getClassForLand(false)}>False</span>
            </div>
        </div>
    )
}

export default SideMenu;