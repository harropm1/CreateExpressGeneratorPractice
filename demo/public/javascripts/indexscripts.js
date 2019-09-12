"use strict"

$(function ()
{
    $("#login").on("click", function ()
    {
        window.location.href = "http://127.0.0.1:3000/users/login"
    });
    $("#register").on("click", function ()
    {
        window.location.href = "http://127.0.0.1:3000/users/register"
    });
});