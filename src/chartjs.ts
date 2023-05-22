import './style.css'
import { Chart, registerables } from 'chart.js';
// import 'chartjs-adapter-dayjs';
import * as DayJS from 'dayjs';
import 'chartjs-adapter-moment';
import annotationPlugin from 'chartjs-plugin-annotation';
// import annotationPlugin from './plugin.js';
import 'dayjs/locale/ja'
DayJS.locale('ja-jp')

Chart.register(...registerables, annotationPlugin)

export function drawChartJS() {
    setTimeout(() => {
        const ctx: any = document.getElementById('chartjs-week');
        const dataset = new Array(7).fill(null).map(item => 50 + Math.ceil(Math.random() * 20))
        const avg = dataset.reduce((a, b) => a + b, 0) / dataset.length;
        new Chart(ctx, {
            type: 'line',
            data: {
                xLabels: new Array(7).fill(null).map((item, index) => new Date(2023, 5, index + 1)),
                datasets: [{
                    label: '# of Votes',
                    data: dataset,
                    borderWidth: 2,
                    borderColor: '#0072c6',
                    pointBorderColor: '#0072c6',
                    pointBackgroundColor: '#0072c6'
                }]
            },
            options: {
                responsive: true,
                layout: {
                    autoPadding: true
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        position: 'right',
                        grid: {
                            display: false
                        },
                        ticks: {
                            align: 'inner',
                            display: true,
                            color: '#bdc7d6',
                            // padding: -30,
                            stepSize: 5,
                            major: {
                                enabled: false
                            }
                        },
                        min: 50,
                        max: 70,
                        offset: true,
                        border: {
                            color: '#bdc7d6'
                        },
                        display: false
                    },
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day'
                        },
                        ticks: {
                            color: '#38385c',
                            callback: (value, index, ticks) => {
                                return [new Date(value).getDate(), DayJS(value).format('ddd')] as any;
                            },
                            maxRotation: 0,
                        },
                        grid: {
                            display: false
                        },
                        offset: true,
                        offsetAfterAutoskip: true,
                        border: {
                            color: '#bdc7d6'
                        },
                        display: true
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            align: 'inner',
                            display: true,
                            color: '#bdc7d6',
                            // padding: -30,
                            stepSize: 5,
                            major: {
                                enabled: false
                            }
                        },
                        min: 50,
                        max: 70,
                        offset: true,
                        grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                        border: {
                            color: '#bdc7d6'
                        }
                    },
                },
                plugins: {
                    annotation: {
                        annotations: {
                            line1: {
                                type: 'line',
                                yMin: dataset[0],
                                yMax: dataset[dataset.length - 1],
                                borderColor: '#bdc7d6',
                                borderWidth: 2,
                                borderDash: [5],
                                endValue: 10,
                                curve: false,
                            },
                            line2: {
                                type: 'line',
                                yMin: avg,
                                yMax: avg,
                                borderColor: '#bdc7d6',
                                borderWidth: 2,
                                borderDash: [5],
                                endValue: 10,
                                curve: false,
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                } as any
            }
        });
    }, 1000);
    setTimeout(() => {
        const ctx: any = document.getElementById('chartjs-month');
        const dataset = new Array(30).fill(null).map(item => 50 + Math.ceil(Math.random() * 20))
        const avg = dataset.reduce((a, b) => a + b, 0) / dataset.length;
        new Chart(ctx, {
            type: 'line',
            data: {
                xLabels: new Array(30).fill(null).map((item, index) => new Date(2023, 5, index + 1)),
                datasets: [{
                    label: '# of Votes',
                    data: dataset,
                    borderWidth: 2,
                    borderColor: '#0072c6',
                    pointBorderColor: '#0072c6',
                    pointBackgroundColor: '#0072c6'
                }]
            },
            options: {
                responsive: true,
                layout: {
                    autoPadding: true
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        position: 'right',
                        grid: {
                            display: false
                        },
                        ticks: {
                            align: 'inner',
                            display: true,
                            color: '#bdc7d6',
                            // padding: -30,
                            stepSize: 5,
                            major: {
                                enabled: false
                            }
                        },
                        min: 50,
                        max: 70,
                        offset: true,
                        border: {
                            color: '#bdc7d6'
                        },
                        display: false
                    },
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day'
                        },
                        ticks: {
                            color: '#38385c',
                            callback: (value, index, ticks) => {
                                return [new Date(value).getDate()] as any;
                            },
                            maxRotation: 0,
                        },
                        grid: {
                            display: false
                        },
                        offset: true,
                        offsetAfterAutoskip: true,
                        border: {
                            color: '#bdc7d6'
                        },
                        display: true
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            align: 'inner',
                            display: true,
                            color: '#bdc7d6',
                            // padding: -30,
                            stepSize: 5,
                            major: {
                                enabled: false
                            }
                        },
                        min: 50,
                        max: 70,
                        offset: true,
                        grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                        border: {
                            color: '#bdc7d6'
                        }
                    },
                },
                plugins: {
                    annotation: {
                        annotations: {
                            line1: {
                                type: 'line',
                                yMin: dataset[0],
                                yMax: dataset[dataset.length - 1],
                                borderColor: '#bdc7d6',
                                borderWidth: 2,
                                borderDash: [5],
                                endValue: 10,
                                curve: false,
                            },
                            line2: {
                                type: 'line',
                                yMin: avg,
                                yMax: avg,
                                borderColor: '#bdc7d6',
                                borderWidth: 2,
                                borderDash: [5],
                                endValue: 10,
                                curve: false,
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                } as any
            }
        });
    }, 1000);
    setTimeout(() => {
        const ctx: any = document.getElementById('chartjs-year');
        const dataset = new Array(12).fill(null).map(item => 50 + Math.ceil(Math.random() * 20))
        const avg = dataset.reduce((a, b) => a + b, 0) / dataset.length;
        new Chart(ctx, {
            type: 'line',
            data: {
                xLabels: new Array(12).fill(null).map((item, index) => new Date(2023, index, 0)),
                datasets: [{
                    label: '# of Votes',
                    data: dataset,
                    borderWidth: 2,
                    borderColor: '#0072c6',
                    pointBorderColor: '#0072c6',
                    pointBackgroundColor: '#0072c6'
                }]
            },
            options: {
                responsive: true,
                layout: {
                    autoPadding: true
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        position: 'right',
                        grid: {
                            display: false
                        },
                        ticks: {
                            align: 'inner',
                            display: true,
                            color: '#bdc7d6',
                            // padding: -30,
                            stepSize: 5,
                            major: {
                                enabled: false
                            }
                        },
                        min: 50,
                        max: 70,
                        offset: true,
                        border: {
                            color: '#bdc7d6'
                        },
                        display: false
                    },
                    x: {
                        type: 'time',
                        time: {
                            unit: 'month'
                        },
                        ticks: {
                            color: '#38385c',
                            callback: (value, index, ticks) => {
                                return [DayJS(value).format('MMM')] as any;
                            },
                            maxRotation: 0,
                        },
                        grid: {
                            display: false
                        },
                        offset: true,
                        offsetAfterAutoskip: true,
                        border: {
                            color: '#bdc7d6'
                        },
                        display: true
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            align: 'inner',
                            display: true,
                            color: '#bdc7d6',
                            // padding: -30,
                            stepSize: 5,
                            major: {
                                enabled: false
                            }
                        },
                        min: 50,
                        max: 70,
                        offset: true,
                        grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                        border: {
                            color: '#bdc7d6'
                        }
                    },
                },
                plugins: {
                    annotation: {
                        annotations: {
                            line1: {
                                type: 'line',
                                yMin: dataset[0],
                                yMax: dataset[dataset.length - 1],
                                borderColor: '#bdc7d6',
                                borderWidth: 2,
                                borderDash: [5],
                                endValue: 10,
                                curve: false,
                            },
                            line2: {
                                type: 'line',
                                yMin: avg,
                                yMax: avg,
                                borderColor: '#bdc7d6',
                                borderWidth: 2,
                                borderDash: [5],
                                endValue: 10,
                                curve: false,
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                } as any
            }
        });
    }, 1000)
}
