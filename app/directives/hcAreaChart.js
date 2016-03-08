var hcAreaChart = angular.module('App1.hcAreaChart', [])
    .directive('hcAreaChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '=',
                data: '=',
                categories: '='
            },
            link: function (scope, element) {
                Highcharts.chart(element[0], {
                    chart: {
                        type: 'area'
                    },
                    title: {
                        text: scope.title
                    },
                    subtitle: {
                        text: 'Source: Wikipedia.org'
                    },
                    yAxis: {
                        title: {
                            text: 'Billions'
                        },
                        labels: {
                            formatter: function () {
                                return this.value / 1000;
                            }
                        }
                    },
                    xAxis: {
                        categories: scope.categories,
                        tickmarkPlacement: 'on',
                        title: {
                            enabled: false
                        }
                    },
                    tooltip: {
                        shared: true,
                        valueSuffix: ' millions'
                    },
                    plotOptions: {
                        area: {
                            stacking: 'normal',
                            lineColor: '#666666',
                            lineWidth: 1,
                            marker: {
                                lineWidth: 1,
                                lineColor: '#666666'
                            }
                        }
                    },
                    series: scope.data

                });
            }
        };
    });
