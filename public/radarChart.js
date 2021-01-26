

/* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

//////////////////////////////////////////////////////////////
//////////////////////// Set-Up //////////////////////////////
//////////////////////////////////////////////////////////////

var margin = { top: 100, right: 100, bottom: 100, left: 100 },
    width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

//////////////////////////////////////////////////////////////
////////////////////////// Data //////////////////////////////
//////////////////////////////////////////////////////////////
var loadedData = []
var names = []
for (let i = 0; i < data.length; i++) {
    loadedData.push([
        { axis: "Information Visualization", value: data[i].information_visualization },
        { axis: "Statistical", value: data[i].statistics },
        { axis: "Programming", value: data[i].programming },
        { axis: "Human-computer interaction programming", value: data[i].hcp },
        { axis: "Evaluating", value: data[i].evaluation },
        { axis: "Collaboration", value: data[i].collaboration }
    ])
    names.push(data[i].alias)
}

console.log(loadedData[names.indexOf("Rella666")])

//////////////////////////////////////////////////////////////
//////////////////// Draw the Chart //////////////////////////
//////////////////////////////////////////////////////////////

var color = d3.scale.ordinal()
    .range(["#EDC951", "#CC333F", "#00A0B0"]);

var radarChartOptions = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: color
};
//Call function to draw the Radar chart
RadarChart(".radarChart", loadedData, radarChartOptions);