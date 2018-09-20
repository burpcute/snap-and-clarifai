chrome.runtime.getBackgroundPage(function(bg) {
	bg.capture(window);
});

$(function(){    ///doc ready
// $( document ).ready(function() {
try {
	var app = new Clarifai.App({
	 apiKey: "e806d305ca32413ab54eaed155e5c7bc"
	});
}
catch(err) {
	alert("Need a valid API Key!");
	throw "Invalid API Key";
}

var imgb64src, width, height, imgdetail;

	$('.action-button').click(function(){
	try {
		  imgb64src = $('img').attr('src');  // get b64 string
			    width = $('img').width();
         height = $('img').height();
		 	imgdetail = imgb64src.replace(/^data:image\/(.*);base64,/, '');  // pure b64 string for Clarifai
			console.log(height);

			}
	catch(err) {
				alert("I can't seem to finding any videos...");
				throw "I can't seem to finding any videos...";
				// $('.load-wrapp').hide();

							}
			//// clarifai there
			$(this).hide();
			$('.load-wrapp').show();
					doPredict({ base64: imgdetail });
		});   //end ('action-button').click(function(){





	//  after some appetize, now its time for the main dish
function doPredict(value) {
	app.models.predict("e466caa0619f444ab97497640cefc4dc", value).then(
	    function(response) {
	      // do something with response
				console.log(response); // test response, get familiar with the API strucure
				var name, prob, boundingbox;




		// check for region and concepts tag in API, if none then nothing was found.
		// if found then its a successful call
				if(response.outputs[0].data.hasOwnProperty("regions") ||
						response.outputs[0].data.hasOwnProperty("concepts")){
				regionArray = response.outputs[0].data.regions;

				for(var i = 0; i < regionArray.length; i++) {

   // if found, then for i , grab these datas
				         name = response.outputs[0].data.regions[i].data.face.identity.concepts[0].name;
					processname =  name.split(" ")[0];
		processfamilyname =  name.split(" ")[1];
					    capname = capitalize(processname);
    capfamilynamename = capitalize(processfamilyname);

								 prob = response.outputs[0].data.regions[i].data.face.identity.concepts[0].value;
       percentageprob = percentile(prob);

					//gather data to draw a box
					top  = response.outputs[0].data.regions[i].region_info.bounding_box.top_row;
					left = response.outputs[0].data.regions[i].region_info.bounding_box.left_col;
				 right = response.outputs[0].data.regions[i].region_info.bounding_box.right_col;
				bottom = response.outputs[0].data.regions[i].region_info.bounding_box.bottom_row;
				 // end draw box
					console.log(response.outputs[0].data.regions[i].data.face.identity.concepts[0].name);



					var source = "https://www.youtube.com/results?search_query="+capname + "+" + capfamilynamename;
					var catDiv = document.createElement("h3");
					console.log(typeof source);									//target=" + "_top" + " " + "
					catDiv.innerHTML = "Name:" + " " + "<a"  + " "+  "target=" + "_blank" + " " + "class=" + "linky" + " " + " " + "href=" +  source + ">" + capname + " " + capfamilynamename + "</a>" + " " +  " " + percentageprob + "</h3>";
					// catDiv.setAttribute('alt', 'namee');
					catDiv.setAttribute('class', 'namee');
					// catDiv.setAttribute('id', "name"+i );
					// $('h3').on('click', 'a', function (){  // point user to the link stated by a tag
					// 	chrome.tabs.create({active: false, url: $(this).attr('href')});
					// 			return false;
					// 			});

					catDiv.setAttribute('align', 'center');
					document.body.appendChild(catDiv);
					// chrome.tabs.create({active: false, url: $(this).attr('https://www.youtube.com/results?search_query="+capname + "+" + capfamilynamename')});
					$('.load-wrapp').hide();

					// $('h3').on('click', 'a', function (){  // sth wrong... 
					// 	chrome.tabs.create({active: false, url: source});
					// 			return false;
					// 			});

					// if()

					// $('.action-button').click(function(){



				} // end check for region for loop
			} // end if
			else {
				var catDiv = document.createElement("h3");
				catDiv.innerHTML = "I didn't see faces. :(";
				catDiv.setAttribute('align', 'center');
				document.body.appendChild(catDiv);
				$('.load-wrapp').hide();
						}
	    },  // end response
	  );  // end app model predict
	} // end doPredict
}); /// end doc ready function

// document.addEventListener('DOMContentLoaded', function () {
//     var links = document.getElementById("link");
//     for (var i = 0; i < links.length; i++) {
//         (function () {
//             var ln = links[i];
//             var location = ln.href;
//             ln.onclick = function () {
//                 chrome.tabs.create({active: true, url: location});
//             };
//         })();
//     }
// });

//  Purpose: Return a capitalized String
//  Args:
//    s - A String
function capitalize(s)
{
  return s[0].toUpperCase() + s.slice(1);
};

function percentile(s){  /// convert probability
	return (s*100).toFixed(2) + '%'
};