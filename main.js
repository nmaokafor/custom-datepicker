$(function(){

// The next two methods gives us datefields and datepicker options, styled using the datepicker.css file.
    $("#checkin").datepicker({
    dateFormat: "dd-M-yy",
    minDate: 0,
    changeMonth: true,
    changeYear: true,
    onSelect: function(){
    	let checkout_date = $("#checkin").datepicker('getDate');
    	checkout_date.setDate(checkout_date.getDate() + 1);

    	//I'm commenting the next line out because I don't want the checkin to automatically ...
    	//... change the value of Checkout when selected the first time 
    	// $("#checkout").datepicker('setDate', checkout_date);

    	//The line below makes sure that the minimum date of checkout is always after the checkin date
    	$("#checkout").datepicker('option', 'minDate', checkout_date)
    }
    });

    $("#checkout").datepicker({
    	//default minimum date for checkout is +1 after today.
    	minDate: +1,
    	dateFormat: "dd-M-yy",
    	changeMonth: true,
    	changeYear: true,
    });

    
// This function controls the effect that the 'find rooms and rates' button has on the booking tab.
    $("#booking_button").on("click", function(){
    	let checkin = $("#checkin").val();
	    let checkout = $("#checkout").val();
//	if either the checkin or checkout fields are empty, prevent checking the prices.
		if(checkin == '' || checkout == '') {
			// $(this).addClass(ui-datepicker error)
 			alert("Did you fill in the dates properly?");
		}else{
// 	do the regular functions we want it to do below.
	    	newfieldvalues();
	    	changefieldstext();
	    	calcDate();
    	}
    });


// This function changes the previously hidden values of Checkin dates, checkout dates, number of ... 
// ...rooms, nummber of guests to the selected values. These fields were hidden using the function hidefields() below.
    function newfieldvalues(){
	 let checkin = $("#checkin").val();
	 let checkout = $("#checkout").val();
	 let number_of_rooms = $("#number_of_rooms").val();
	 let number_of_guests = $("#number_of_guests").val();

    	$("#checkin_date").text(checkin);
    	$("#checkout_date").text(checkout);

//	If the value is only 1, make the response singular
    	if(number_of_rooms == 1 || number_of_guests == 1){
    		$("#number_of_rooms_value").text(number_of_rooms + "  Room");
    		$("#number_of_guests_value").text(number_of_guests + "  Guest");
    	}else{
    		$("#number_of_room s_value").text(number_of_rooms + "  Rooms");
    		$("#number_of_guests_value").text(number_of_guests + "  Guests");
    	}
    };


// This function changes the previously hidden fields of Guests and Rooms to the
// the selected values. These fields were hidden using the css :empty { 'display: none'}.
    function changefieldstext(){
    	$("#number_of_guests_text").text("Number of Guests"); 
    	$("#number_of_rooms_text").text("Number of Rooms");
    };


// This function calculates the number of days a user has selected 
//	to sleep in the hotel. It also calculates the price of all selected days.
    function calcDate(){
    	let number_of_rooms = $("#number_of_rooms").val();
	    let number_of_guests = $("#number_of_guests").val();
    	let start = $("#checkin").datepicker("getDate");
    	let end = $("#checkout").datepicker("getDate");
    	let days = 0;

    	if(start && end) {
     		days = Math.floor((end.getTime() - start.getTime()) /(1000*60*60*24));
     	}
     	if(start == end){
     		days = days + 1;
     	}
    	$("#number_of_nights").text(days + " nights selected");
    	calcPric(days, number_of_rooms, number_of_guests);
    };


 // This function calculates the price of the hotel rooms
 	function calcPric(a,b,c){
 		let price = 30000;
 	  	let totalprice = a * b * c * price;
 	  	totalprice = totalprice.toLocaleString("en"); //here I change it a string that allows commas after every 3 digits
 	  	$("#available_from").removeClass().addClass("totalprice").html("Price for " + a + " nights is: <br> <span>" + totalprice + "</span>");
 	  };

});