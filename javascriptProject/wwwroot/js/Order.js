﻿//var menus = [
//    {"item": "pasta" , "price": 200},
//    {"item": "paratha" , "price": 150},
//    {"item": "manchuriyan" , "price": 350},
//    {"item": "pizza" , "price": 400},
//    {"item": "samosa" , "price": 32},
//    {"item": "paneer samosa" , "price": 320}
//]

var customerItems = [];

$(document).ready(function () {
    binMenuDDL()

    $("#btnAdd").click(addOrder)
    $("#ddlMenu").change(function () {
        if (!($("#ddlMenu").val() == "" || $("#ddlMenu").val() == "-1")) {
            var price = $("#ddlMenu").val()
            $("#lblPrice").text("Price" + price.split("_")[1] + "Rs.")
        }
        else {
            $("#lblPrice").text("")
            
        }
    })
})
    function addOrder() {
        if ($("#ddlMenu").val() == "" || $("#ddlMenu").val() == "-1") {
            alert('Please select ')
        }
        else if ($("#txtQuantity").val() == "" || $("#txtQuantity").val() == "0") {
            alert("please enter quantity")
        }
        else {
            /*  var menu = $('#ddlMenu option:selected').text()
              var price = $('#ddlMenu').val()
              var quantity = $('#txtQuantity').val()
              var obj = { "item": menu, "price": price, "quantity": quantity, "totalprice": price * quantity }
              customerItems.push(obj)
              $("#ddlMenu").val("-1")
              $('#txtQuantity').val("0")
              bindOrder()
          }*/
            var menuId = $("#ddlMenu").val().split("_")[0]
            var price = $("#ddlMenu").val().split("_")[1]
            var quantity = $("#txtQuantity").val()
            var obj = { "ItemId": menuId, "Quantity": quantity }
            // customerItems.push(obj)
            $.post("/Order/PlaceOrder", obj, function (response) {
                console.log(response)
                bindOrder(response)
                $("#ddlMenu").val("-1")
                $("#txtQuantity").val("0")
            })
        
       
        }
    }


function bindOrder(customerItems) {

     var tbl = "<table class='table table-bordered table-hover'><tr class='table-dark'><th>SNo.</th><th>Menu</th><th>Price</th><th>Quantity</th><th>Total Price</th></tr>"
    var grandPrice = 0;
    customerItems.forEach(function (item,index) {
        tbl += "<tr><td>" + item.id + "</td><td>" + item.item + "</td><td>" + item.price + "</td><td>" + item.quantity + "</td><td>" + (item.price * item.quantity) + "</td></tr>"
                grandPrice += (item.price * item.quantity)
            })
        
        tbl += "<tr><td colspan='3'></td><td colspan='2'><span>Greand total :" + grandPrice + "</span></td></tr>"
        tbl += "</table>"
        $("#divOrder").html(tbl)
    }

    function binMenuDDL() {

        $.get("/Order/GetMenues", function (response) {
            console.log(response)
            var op = "<option value ='-1'>Select</option>"

            response.forEach(function (item) {
                op += "<option value='" + item.id + "_" + item.price + "'>" + item.item + "</option>"
            })
        
            $("#ddlMenu").html(op)
        
        })

    }

