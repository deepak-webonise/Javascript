$(document).ready(function(){
	$("td").click(function() {
				
		//get selected color from radio button
		var selcol = $("input[type='radio'][name='Color']:checked").val();
		//check the color or radio button selected or no
		if(selcol != undefined){
			//check is the color is already set 
			if($( this ).css( "background-color" ) == 'rgb(255, 0, 0)' || $( this ).css( "background-color" ) == 'rgb(0, 0, 255)' || $( this ).css( "background-color" ) == 'rgb(0, 128, 0)'){
				alert("Color already set");
			}
			else
			{
				//apply background color
				$(this).css("background-color",selcol);

			}
			
			
		}
		else
		{

			alert("Please Select Color First");
		}
		 
	}



	);
	$("#Shuffle").click(function(){
			//assigning the row id to array
        	var row = new Array("#tr1","#tr2","#tr3");
        	for (var b = 0; b<3 ; b++)
        	{
        		//copying the cell or child from selected row
        		var items = $(row[b]).children().clone(true);
        		//swaping the cells
        		for(var j, x, i = items.length; i; j = parseInt(Math.random() * i),x = items[--i], items[i] = items[j], items[j] = x);

        		//write back to row
        		$(row[b]).html(items);

       		 }	


        
    	});
    
});


    

