var items = [];
$(document).ready(function () {
   ///* $("#btn").click(function () {
   //     $('#h1').css("color", "red")
   // })

   // $('#h1').hover(function () {
   //     $('#h1').css('background-color', "navy")
   // })

   // $('#h1').mouseout(function () {
   //     $('h1').css('background-color','gray')
   // })*/

   
   // var items = new Array();   to create an array
    $("#btn").click(function () {
        var txt = $('#txt').val()
        if (txt.length < 3) {
            alert("please enter min 3 char")
        }
        else {
            if (items.indexOf(txt) >= 0) {
                alert("this item aready exist")
            }
            else {
                if ($('#btn').text() == "update") {
                    items.splice($('#hdn').val(), 1, txt)
                    $('#btn').text("Add")
                }
                else {
                    items.push(txt)
                    
                }
                printList(items)
                $('#txt').val("")
            }
        }
    })
    $("#txt").keyup(function () {
        var txt = $(this).val(); 
        var sitems = items.filter(function (item) { return item.startsWith(txt) })
        if (sitems.length == 0) {
            sitems = items
        }
        printList(sitems)
    })
})

        function printList(items) {
        var list = "<ol>"
            items.forEach(function (item, index) {
                list += "<li>" + item + "<a onclick='editItems(" + index + ")'><span class ='close'>edit </span></a> <a onclick='removeItems(" + index + ")'><span class='close'>&times;</span></a></li>"
        })
        list += "</ol>"
        $("#displayList").html(list)
}
function removeItems(index) {
    items.splice(index, 1);
    printList(items)
}
function editItems(index) {
    $('#txt').val(items[index])
    $('#btn').text("Update")
    $('#hdn').val(index)
}
    //$('#txt').keyup(function () {
    //    var txt = $("#txt").val()
    //    $('#txt').val(txt.toUpperCase())
 
var student = {"name": "Abhay" ,"age": 23 , "gender": "male"}