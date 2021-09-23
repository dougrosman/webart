$(document).mousemove(function(event) {
    $('#cursor').css('transform', `translate(calc(${event.pageX}px - 50%), calc(${event.pageY}px - 50%))`);
});