var $container;

$(document).ready(function(){
   $container = $('.js-data');

    getData();
});

function getData(){
    $.ajax({
        url: '/users/data',
        data: {},
        method: 'get',
        dataType: 'json',
        success: function(data, textStatus, jqXHR){
            clearData();
            processData(data);
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(textStatus,errorThrown);
        },
        complete: function(jqXHR, textStatus){
            console.log("getData() Ajax Get Complete:", textStatus);
        }
    });
}

function clearData(){
    $container.empty();
}

function processData(data){
    console.log(data);
    for(var i = 0; i< data.length; i++){
        console.log(data[i]);

        var id = data[i]._id;
        var firstName = data[i].firstName || '';
        var lastName = data[i].lastName || '';
        var username = data[i].username || '';
        var email = data[i].email || '';

        buildAndAppendData(id, firstName, lastName, username, email);
    }
}

function buildAndAppendData(id, firstName, lastName, username, email){
    var section = $('<section/>')
        .attr('id', id)
        .attr('data-firstName', firstName)
        .attr('data-lastName', lastName)
        .attr('data-username', username)
        .attr('data-email', email)
        .addClass('well col-md-4');

    var ul = $('<ul/>')
        .appendTo(section);

    var liFirstName = $('<li/>')
        .text('First Name: ' + firstName)
        .addClass('js-firstName')
        .appendTo(ul);


    var liLastName = $('<li/>')
        .text('Last Name: ' + lastName)
        .addClass('js-lastName')
        .appendTo(ul);


    var liUsername = $('<li/>')
        .text('Username: ' + username)
        .addClass('js-username')
        .appendTo(ul);

    var liEmail = $('<li/>')
        .text('Email: ' + email)
        .addClass('js-email')
        .appendTo(ul);


    $container.append(section);
}
