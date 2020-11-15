const canvas = d3.select('.myjbod');
const svg = canvas.append('svg')
            .attr('width', 800)
            .attr('height', 800);

const jbod = [
    {
        slot: 0,
        model: 'SSD'
    }
];

const ar = [];

// creating new Object every time from "template" object
for(let i=0; i<24; i++) {
    ar.push(Object.assign({},{slot: i, model: 'SSD'}))
}

// disk() function
//const j = (slot, model) => ({slot: slot, model: model});
// same as below because slor is used twice!
const disk = (slot, model) => ({slot, model});
 
const ar2 =[];
for(let i=0; i<24; i++) {
    ar2.push(disk(i,'SSD'));
}


const rect = svg.selectAll('rect');
rect.data(ar)
    .enter().append('rect')
    .attr('width', 25)
    .attr('height', 30)
    .attr('x', (d, i) => {return i * 26;})
    .attr('y', (d, i) => {return 200;})
    .attr('fill', 'orange')
    .attr('id', (d,i) => 'slot' + i);

    const text1 = svg.selectAll('text');

    text1.data(ar)
    .enter().append('text')
    .attr('x', (d, i) => {return i * 26 + 3;})
    .attr('y', (d, i) => {return 225;})
    .attr('font-size',20)
    .attr('fill','green')
    .text(d => d.slot);


