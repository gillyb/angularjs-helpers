
// make sure you have d3 available here!

angular.module('myModule').directive('sparkline', [function () {
    return {
        restrict: 'E',
        template: '',
        scope: {
            data: '='
        },
        link: function(scope, elem, attrs) {

            var graphWidth = elem.parent().width();
            var graphHeight = elem.parent().height();

            elem.width(graphWidth).height(graphHeight);

            // x axis
            var x = d3.scale.linear()
                .range([0, graphWidth])
                .domain(d3.extent(scope.data, function(d) { return d.date; }));

            // y axis
            var y = d3.scale.linear()
                .range([graphHeight, 0])
                .domain(d3.extent(scope.data, function(d) { return d.value; }));

            // draw the line
            var line = d3.svg.line()
                .interpolate('basis')
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.value); });

            var svg = d3.select(elem[0])
                .append('svg')
                .attr('width', graphWidth)
                .attr('height', graphHeight)
                .append('g');
            svg.append('path')
                .datum(scope.data)
                .attr('class', 'sparkline')
                .attr('stroke', '#ff0000')
                .attr('stroke-width', 2)
                .attr('fill', 'none')
                .attr('d', line);

        }
    };
}]);
