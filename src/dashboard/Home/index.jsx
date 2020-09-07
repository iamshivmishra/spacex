import React from 'react';
import './home.css';
import Program from './Program';

const Home = (props) => {
    return (
        <div className="home-container">
            {props.spaceList.length ?
                props.spaceList.map((item, index) => (
                    <Program key={index} launchDetail={item} />
                ))
                :
                <p>No Data Found</p>
            }

        </div>
    )
}

export default Home;