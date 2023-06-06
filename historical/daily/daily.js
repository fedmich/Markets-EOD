function load_html_history(symbol) {

    if (!symbol) {
        return false;
    }
    var letter_low = symbol[0].toLowerCase();

    var url_hist = 'https://raw.githubusercontent.com/fedmich/Markets-EOD/main/historical/daily/' +
        letter_low + '/' +
        symbol.toUpperCase() + '.html';

    $.ajax({
        type: "GET",
        url: url_hist,
        success: function(data) {
            switch (data) {
                case '':
                case '?':
                case '! uri':
                    data = '';
                    break;
            }

            if (!data) {
                console_log('no hist data');
                return false;
            }

            $('#history_table').html(data);


        },
        error: function(e) {
            console_log('err, history');
        }
    });

}