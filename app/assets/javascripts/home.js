window.onload = function(){
	if ($("addCandidateButton")) {
		$("addCandidateButton").addEvent('click',function(){addCandidate()});
		$("candidateName").addEvent('blur',function(e){checkNewCandidateFied(e)});
		$("candidateUrl").addEvent('blur',function(e){checkNewCandidateFied(e)});
	}

	if ($("addUrlButton")) {
		$("addUrlButton").addEvent('click',function(){addUrl('')});
		$("candidateUrl").addEvent('blur',function(e){checkNewCandidateFied(e)});
	}



  var width = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    width = window.innerWidth;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    width = document.documentElement.clientWidth;
  }

  if (width>1000){
    $('mainFrame').style.width="1080px";
    $('container').style.width="1080px";
  }
};

function checkNewCandidateFied(event){
	if (event.target.value.length>0)
	switch (event.target.id){
		case "candidateName":
		

	/// Check if name exists
			
			event.target.set('class', 'inputText-valid');

			break;
		case "candidateUrl":


	/// Validate URL
			if (validateURL(event.target.value)) 
			{
				event.target.set('class', 'inputText-valid');
			}
			else
			{
				event.target.set('class', 'inputText-invalid');
			}
			break;

	}
}


function addCandidate(){

	var req = new Request({
	    url: '/target/new.json',
	    method: 'post',
	    data: 'target_name='+$('candidateName').value+'&url='+$('candidateUrl').value,
	    onRequest: function(){
//		myElement.set('text', 'loading...');
	    },
	    onSuccess: function(responseText){
//		myElement.set('text', responseText);
	    },
	    onFailure: function(){
//		myElement.set('text', 'Sorry, your request failed :(');
	    }
	});

	req.send();

}

 function validateURL(textval) {
      var urlregex = new RegExp(
            "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
      return urlregex.test(textval);
    }


function addUrl(){

	var req = new Request({
	    url: '/link/new.json',
	    method: 'post',
	    data: 'target_id='+CANDIDATE_ID+'&url='+$('candidateUrl').value,
	    onRequest: function(){
//		myElement.set('text', 'loading...');
	    },
	    onSuccess: function(responseText){
//		myElement.set('text', responseText);
	    },
	    onFailure: function(){
//		myElement.set('text', 'Sorry, your request failed :(');
	    }
	});

	req.send();

}
