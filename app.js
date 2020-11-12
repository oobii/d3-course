const canvas = d3.select('.canva');
const svg = canvas.append('svg')
                    .attr('width', 500)
                    .attr('height', 500);

// svg.append('circle')
//                     .attr('cx', 100)
//                     .attr('cy', 100)
//                     .attr('r', 50)
//                     .attr('fill', 'blue');

const rect = svg.selectAll('rect');

rect.data([20, 50, 10, 75, 5])
    .enter().append('rect')
    .attr('fill', 'orange')
    .attr('width', 25)
    .attr('height', (d, i) => {return d;})
    .attr('x', (d, i) => { return i*26; })
    .attr('y', (d, i) => {return 150 - d;});

