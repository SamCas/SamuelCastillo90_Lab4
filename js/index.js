$(document).ready(function () {
    $('#addItemForm').submit(function (e) { 
        e.preventDefault();
        addItem($('#itemName').val());
    });
    $('#shoppingList').on('click', '.checkButton',function () {
        checkItem(this);
    });
    $('#shoppingList').on('click', '.deleteButton',function () {
        removeItem(this);
    });
});

function addItem(name) {   
    $('#shoppingList').append(
        '<li class="item-container">' +
            '<div class="item">'+
                '<p>' + name + '</p>' +
                '<div class="itemMethods">' +
                    '<button class="checkButton" type="button">' + 'check' + '</button>' +
                    '<button class="deleteButton" type="button">' + 'delete' + '</button>' +
                '</div>' +
            '</div>' +
        '</li>'
    );
}

function checkItem(item) {
    var itemName = $(item).parent().parent();
    if(itemName.hasClass('itemChecked')){
        itemName.removeClass('itemChecked');
    }else{
        itemName.addClass('itemChecked');  
    }
}

function removeItem(item) {
    $(item).parent().parent().parent().remove();
}