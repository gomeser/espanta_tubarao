const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['ÁREA Nº 1', 'ÁREA Nº 2', 'ÁREA Nº 3', 'ÁREA Nº 4'], // Labels
        datasets: [{
            label: 'Valores',
            data: [50, 75, 30, 90], // Valores para cada área
            backgroundColor: ['black', 'black', 'black', 'black'], // Cores
            borderWidth: 1,
        }]
    },
    options: {
        indexAxis: 'y', // Inverte para barras horizontais
        responsive: true,
        plugins: {
            legend: {
                display: false // Esconde a legenda, se necessário
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `Valor: ${context.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Nº de funcionários'
                }
            },
            y: {
                title: {
                    display: true,
                    text: ''
                }
            }
        }
    }
});

// Dados hierárquicos para a árvore
const data = {
    name: "CARGO",
    children: [
        {
            name: "CARGO",
            children: [
                { name: "CARGO" },
                { name: "CARGO" }
            ]
        },
        {
            name: "CARGO",
            children: [
                { name: "CARGO" },
                { name: "CARGO" },
                { name: "CARGO" }
            ]
        },
        {
            name: "CARGO",
            children: [
                { name: "CARGO" },
                { name: "CARGO" }
            ]
        }
    ]
};

const width = 625;
const height = 240;

const svg = d3.select("#tree-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(50, 50)"); 
const root = d3.hierarchy(data);

const treeLayout = d3.tree().size([width - 100, height - 100]); 
treeLayout(root);

svg.selectAll("line")
    .data(root.links())
    .enter()
    .append("line")
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y)
    .attr("stroke", "#ccc");

svg.selectAll("circle")
    .data(root.descendants())
    .enter()
    .append("circle")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", 5)
    .attr("fill", "black");

svg.selectAll("text")
    .data(root.descendants())
    .enter()
    .append("text")
    .attr("x", d => d.x)
    .attr("y", d => d.y - 10)
    .text(d => d.data.name)
    .attr("font-size", "12px")
    .attr("text-anchor", "middle"); 

const arrayShow = [
    document.querySelector('.ver-todos'),
    document.querySelector('.ver-av-func'), 
]

const arrayClose = [
    document.querySelector('.close-rank'),
    document.querySelector('.close-func'),
]

const arrayContainer = [
    document.querySelector('.ranking-geral'),
    document.querySelector('.avalia-person'),
]

for ( let i = 0; i < arrayShow.length; i++ ) {
    arrayShow[i].onclick = () => {
        arrayContainer[i].style.marginLeft = '0';
    }

    arrayClose[i].onclick = () => {
        arrayContainer[i].style.marginLeft = '-150vw';
    }
}

