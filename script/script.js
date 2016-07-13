$(document).ready(function() {
    var allWords;

    var shuffle = function(array) {
  		var currentIndex = array.length, temporaryValue, randomIndex;

  		// While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	};

	var setRandomWord = function(aw){
    	//console.log(aw);
    	var item = aw[Math.floor(Math.random()*aw.length)];
		$.getJSON('data/words/'+item+'.json', function(data){
			$("#word").html(item);
			$("#meaning").html(data.meaning);
		});
    }; 
        

    $.getJSON('data/words.json', function(data) {    	
        allWords = shuffle(data.words);

        var wordlist = $("#wordlist");
        var code = "";
        code = code + ("<table class='table table-hover'>");
        code = code + ("<thead><tr><td>பதம் ("+allWords.length+")</td></tr></thead><tbody>");
        var i;
		for (i = 0; i < allWords.length; i++) {
			var j;
			code = code + "<tr>";
			for(j=0;j<6;j++){
				if(i<allWords.length){
					
    				code = code + ("<td class='wordclass'>"+allWords[i]+"</td>");
    				if(j<5){
    					i++;
    				}
    			}else{
    				break;
    			}    			    			
    		}
    		code = code + "</tr>";
		}
		code = code + ("</tbody></table>");
		wordlist.append(code);

		setRandomWord(allWords);
    });
    

    var displayWordDetail = function(word){
    	$.getJSON('data/words/'+word+'.json', function(data){
			var descRender = "<div class='row'><div class='col-md-2'>பொருள் </div><div class='col-md-10'>"+data.meaning+"</div></div>"
			var code = "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button>" +
        		"<h4 class='modal-title'>"+word+"</h4></div><div class='modal-body'><p>"+descRender+"</p></div><div class='modal-footer'>" +
        		"<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div>";
        	$("#myModal").html(code);
			$("#myModal").modal().show();
		});
    }

    

    $("#wordlist").on('click', 'table tbody tr td', function(e){
		var word = $(e.target).text();		
		displayWordDetail(word);			
	});

    

	$("#randomsel").click(function(e){
		setRandomWord(allWords);
	});

	
});

