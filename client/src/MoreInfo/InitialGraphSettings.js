import { drawerWidth } from '../styles/WeatherAppStyles';

let initialSettings = {
    options: {
        chart: {
            type: 'line',
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            column: {
                colors: ['#d2d3c9', '#e9eae5'],
                opacity: '0.24',
            },
        },
        stroke: {
            curve: 'smooth',
            colors: ['#0e918c'],
            lineCap: 'round',
            width: 4,
        },
        xaxis: {
            categories: [],
            title: {
                text: 'Date',
            },
            labels: {
                trim: true,
            },
        },
        yaxis: {
            title: {
                text: 'Temperature °C',
            },
        },
        tooltip: {
            enabled: true,
            custom: '',
        },
        responsive: [
            {
                breakpoint: 1280,
                options: {
                    chart: {
                        height: drawerWidth * 0.55,
                        width: drawerWidth * 0.8,
                    },
                    stroke: {
                        curve: 'smooth',
                        colors: ['#0e918c'],
                        lineCap: 'round',
                        width: 3,
                    },
                },
            },
            {
                breakpoint: 640,
                options: {
                    chart: {
                        height: drawerWidth * 0.48,
                        width: '106%',
                    },
                },
            },
        ],
    },
    series: [
        {
            name: 'Temperature',
            data: [],
        },
    ],
};

export default initialSettings;
