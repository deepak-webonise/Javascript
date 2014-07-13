$(document).ready(function(){
	$("td").click(function() {
				
		var selcol = $("input[type='radio'][name='Color']:checked").val();
		//alert(selcol);
		if(selcol != undefined){

			if($( this ).css( "background-color" ) == 'rgb(255, 0, 0)' || $( this ).css( "background-color" ) == 'rgb(0, 0, 255)' || $( this ).css( "background-color" ) == 'rgb(0, 128, 0)'){
				alert("Color already set");
			}
			else
			{
				$(this).css("background-color",selcol);

			}
			
			
		}
		else
		{

			alert("Please Select Color First");
		}
		 
	});

	
});
