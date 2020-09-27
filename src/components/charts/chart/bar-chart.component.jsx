/* App.js */
import React from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react'

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const addSymbols = (e) => {
	var suffixes = ["", "K", "M", "B"];
	var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
	if(order > suffixes.length - 1)
		order = suffixes.length - 1;
	var suffix = suffixes[order];
	return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}
const BarChart = ({chart_array, x_title, y_title, caption}) => {
	const options = {
		animationEnabled: true,
		theme: "light2",
		title:{
			text: caption
		},
		axisX: {
			title: x_title,
			reversed: true,
		},
		axisY: {
			title: y_title,
			includeZero: true,
			labelFormatter: addSymbols
		},
		data: [{
			type: "bar",
			dataPoints: chart_array
		}]
	}
	return (
	<div>
		<CanvasJSChart options = {options}/>
	</div>
	);
}


   
export default BarChart;