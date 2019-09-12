$(function ()
{
    $.getJSON("/leagues/data", () => {})
        .done(function(data)
        {
            $(data).each(function(index, league) {
                $('#leaguesList').append($('<li />').text(league.Name)
                )
            });
        })
        .fail(function() {
            console.log("error");
        });
});