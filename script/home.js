window.onload=()=>{

  console.log("hallo");

  var bottom = document.querySelector(".down");
  var top = document.querySelector(".up");
  var full = 0;
  var state= 1;
  console.log(top);

  setInterval(function(){

    top.style.background = 'linear-gradient(90deg, rgba(230,10,10,1) 0%, rgba(3,110,167,1) '+(100-full)+'%)';
    bottom.style.background = 'linear-gradient(90deg, rgba(3,110,167,1)'+ full+'%, rgba(230,10,10,1) 100%)';
    if (full > 75) {
      state= -1;
    } else if (full< -30) {
      state = 1;
    }{

    }
    full+= state;
    // console.log(top.style.background);
  }, 50);

  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', e =>{
    console.log(e);
    cursor.setAttribute("style", "top: "+ (e.pageY-10) + "px; left: "+ (e.pageX-10) + "px;");

  });

  document.addEventListener('click', ()=>{
    cursor.classList.add("expand");

    setTimeout(() =>{
      cursor.classList.remove("expand");
    }, 500);
  });




  }
