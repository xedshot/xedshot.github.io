function toStart(){
	fullpage_api.moveTo(1);
	setTimeout(function(){location.reload(true)},800);
	
}

function toGoogleMaps(){
	window.open('https://goo.gl/maps/eobm9nDJTFt');
}

function switchImage(counter){
				switch(counter){
        	case 0:
          		document.getElementsByClassName('text-wrapper')[0].style.display = "block";
          		document.getElementsByClassName('text-wrapper-2')[0].style.display = "none";
          		document.getElementsByClassName('text-wrapper-3')[0].style.display = "none";
          		list.style.marginLeft = '0%';
          	break;
        	case 1:
          		document.getElementsByClassName('text-wrapper')[0].style.display = "none";
          		document.getElementsByClassName('text-wrapper-2')[0].style.display = "block";
          		document.getElementsByClassName('text-wrapper-3')[0].style.display = "none";
          		list.style.marginLeft = '-100%';
          	break;
        	case 2:
          		document.getElementsByClassName('text-wrapper-2')[0].style.display = "none";
          		document.getElementsByClassName('text-wrapper-3')[0].style.display = "block";
          		list.style.marginLeft = '-200%';
          	break;
        	default:
          	break;
      		}
      		
		}