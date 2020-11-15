const canvas = d3.select('.canva');
const svg = canvas.append('svg')
    .attr('width', 500)
    .attr('height', 500);

const c = svg.append('circle')
  .attr('cx', 200)
  .attr('cy', 200)
  .attr('r', 50)
  .attr('fill', 'lightgreen');    

  const c2 = svg.append('circle')
  .attr('cx', 200)
  .attr('cy', 200)
  .attr('r', 50)
  .attr('fill', 'lightblue');

  const c3 = svg.append('circle')
  .attr('cx', 200)
  .attr('cy', 200)
  .attr('r', 100)
  .attr('fill', "none")
  .attr('stroke-width', 4)
  .attr('stroke', 'lightblue');

//   function f1(s) {
//       s.transition().duration(3000).attr('r', 100)
//       .transition().duration(3000).attr('r', 100);

//       f2(s);
//   }

//   function f2(s) {
//     s.transition().duration(3000).attr('r', 50)
//     .transition().duration(3000).attr('r', 50);
//     f1(s);
// }

//     const selectedCircle = d3.selectAll("circle");
//     f1(selectedCircle); 

    // selectedCircle.transition().duration(3000).attr('r', 50)
    // .transition().duration(3000).attr('r', 100)
    // .transition().duration(3000).attr('r', 100)
    // .transition().duration(3000).attr('r', 50)

    // d3.selectAll("circle").transition().duration(3000).attr('r', 100)
  
    const time = 4000;
    d3.select("circle").transition()
    .on("start", function repeat() {
        d3.active(this)
        .duration(time).attr('r', 100)
          .transition()
          .duration(time).attr('r', 100)
          .transition()
          .duration(time).attr('r', 50)
          .transition()
          .duration(time).attr('r', 50)
          .transition()
            .on("start", repeat);
      });