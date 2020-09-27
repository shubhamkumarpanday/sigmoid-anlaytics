/* App.js */
import React from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react'

// const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const ColumnChart = ({chart_array, caption}) => {
    const options = {
        title: {
            text: caption
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: chart_array
        }
        ]
    }
    return (
    <div>
        <CanvasJSChart options = {options}/>
    </div>
    );
}
export default ColumnChart;