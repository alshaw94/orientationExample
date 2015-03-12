$(document).ready(function() {
        $.ajax({
            url: 'http://www.cineworld.com/api/quickbook/cinemas',
            type: 'GET',
            data: {key: 'Pq9Z9U3G'},
            dataType: 'jsonp', // Setting this data type will add the callback parameter for you
            success: parseCinemas
        });
  

    $('a.clear').click(function() {
        $('span.cinema.count').text('8');
        $('ol.cinema.list').empty();
    });
});

function parseCinemas(response, status) {
    var html = '';

    // Check for errors from the server
    if (response.errors) {
        $.each(response.errors, function() {
            html += '<li>' + this + '</li>';
        });
    } else {
        $('span.cinema.count').text(response.cinemas.length);
        $.each(response.cinemas, function() {
            html += '<li>' + this.name + '</li>';
        });
    }

    // Faster than doing a DOM call to append each node
    $('ol.cinema.list').append(html);
}