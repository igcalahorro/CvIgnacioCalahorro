
// function muButton1() {
//   window.open(href="Studies.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=900,height=600")
// }


// function muButton2() {
//     window.open( href="Experience.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=900,height=600")
//   }

  
function myButton(page) {
    window.open(href=page, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=900,height=600")
}

function myButton(page) {
    window.open(href=page, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=900,height=600")
}
  
function pera() {
  
    var moreText = document.getElementById("aboutmostrar");
    if (moreText.style.display ==='none'){
        moreText.style.display = 'block';
    }
    else {
    moreText.style.display = 'none';
    }
  
}

function pera1() {
  
    var moreText1 = document.getElementById("estudios");
    if (moreText1.style.display ==='none'){
        moreText1.style.display = 'block';
        document.querySelector('.estudios').scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
    else {
    moreText1.style.display = 'none';
    }
  
}
function pera2() {
  
    var moreText2 = document.getElementById("experiencia");
    if (moreText2.style.display ==='none'){
        moreText2.style.display = 'block';
    }
    else {
    moreText2.style.display = 'none';
    }
  
}

function pera3() {
  
    var moreText3 = document.getElementById("aptitudes");
    if (moreText3.style.display ==='none'){
        moreText3.style.display = 'block';
    }
    else {
    moreText3.style.display = 'none';
    }
  
}

function print(pdf) {
    // Create an IFrame.
    var iframe = document.createElement('iframe');  
    // Hide the IFrame.  
    iframe.style.visibility = "hidden"; 
    // Define the source.  
    iframe.src = pdf;        
    // Add the IFrame to the web page.
    document.body.appendChild(iframe);  
    iframe.contentWindow.focus();       
    iframe.contentWindow.print(); // Print.
}
  
  
  
  
  