import React from 'react';
import './program.css';

const Program = (props) => {
    const programDetail = props.launchDetail
    return (
        <div className="program-container">
            <img defer className="image-container" width="200px" height="200px" src={programDetail.links.mission_patch} alt="no image found" />
            <span className="program-name">{programDetail.mission_name} #{programDetail.flight_number}</span>
            <label className="row mt-15">Mission Ids:</label>
            {programDetail.mission_id.length > 0 &&
                <ul>
                    {programDetail.mission_id.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            }
            <div className="row text-left">
                <label>Launch Year:</label>
                <span className="ml-5">{programDetail.launch_year}</span>
            </div>
            <div className="row text-left">
                <label>Successful Launch: </label>
                <span className="ml-5">{String(programDetail.launch_success)}</span>
            </div>
            <div className="row text-left">
                <label>Successful Landing: </label>
                <span className="ml-5">{String(programDetail.launch_success)}</span>
            </div>
        </div>
    )
}

export default Program;