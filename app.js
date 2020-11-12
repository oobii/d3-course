const canvas = d3.select('.canva');
const svg = canvas.append('svg')
    .attr('width', 500)
    .attr('height', 500);


const rect = svg.selectAll('rect');

const myArrayOfObj = [
  {width: 25, height: 23, fill: 'pink'},
  {width: 25, height: 56, fill: 'orange'},
  {width: 25, height: 15, fill: 'red'},
  {width: 25, height: 77, fill: 'green'},
  {width: 25, height: 20, fill: 'blue'},
];
rect.data(myArrayOfObj)
    .enter().append('rect')
    .attr('fill', d => d.fill)
    .attr('width', 25)
    .attr('height', (d, i) => {
      return d.height * 2;
    })
    .attr('x', (d, i) => {
      return i * (d.width + 1);
    })
    .attr('y', (d, i) => {
      return 200 - d.height * 2;
    });

