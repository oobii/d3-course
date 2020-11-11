// import { svg } from "./d3.v6";

// // d3.select("p")
// // .style("color","red");

const canvas = d3.select('.canva');
const svg = canvas.append('svg')
    .attr('width', 500)
    .attr('height', 250);

svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('r', 50)
    .attr('fill', 'blue');

svg.append('rect')
    .attr('x', 100)
    .attr('y', 100)
    .attr('width', 70)
    .attr('height', 60)
    .attr('fill', 'red');
