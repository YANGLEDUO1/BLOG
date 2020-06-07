window.onload = function(){
	var showSet = document.querySelector('.heade')
	var set = document.querySelector('.set')
    var heade = document.querySelector('#heade')
    var int = document.querySelector('#int')
    var serachBox = document.querySelector('.search')
    var serachImg = document.querySelector('.serach-img img')
    var menu = document.querySelector('#menu')
    var Aside = document.querySelector('.aside')
    var Article = document.querySelector('.article')

	showSet.addEventListener('click',ShowSet)
    int.addEventListener('click',ShowSet)
    
    serachImg.addEventListener('click',function(ev){
      ev.stopPropagation()
      serachBox.classList.remove('fadeWidth')
    	serachBox.classList.add('showWidth')
    })
    
    let x=0;
    menu.addEventListener('click',Showmenu)
   document.addEventListener('click',function(ev){
   	 if (ev.target.id!="heade") {
   	 	showSet.classList.remove('showcolor')
   	 	set.classList.remove('show')
   	 	
   	 }
   	  if (ev.target.id!="serachImg" && ev.target.id!="input") {
        serachBox.classList.add('fadeWidth')  
        serachBox.classList.remove('showWidth')
   	 }
   })

    function ShowSet(e){
      e.stopPropagation()
		showSet.classList.toggle('showcolor')
		set.classList.toggle('show')
	}

	function Showmenu(){
      x=x+1
      if (x%2==0) {
      	Aside.classList.add('fadeAside')
      	Aside.classList.remove('showAside')
      	Article.classList.add('ArticlshowWidth')
      	 Article.classList.remove('ArticleWidth')
      	
      }else{
      	Aside.classList.add('showAside')
       Article.classList.add('ArticleWidth')
      }
    }
    var lf = document.querySelectorAll('.lf')
    // var rf = document.querySelectorAll('.rf')
   
    circle(lf)
    function circle(dr){
      var dir = dr
      for(let i = 0;i<dir.length;i++){
        dir[i].index = i
        dir[i].addEventListener('mouseover',function(){
        this.classList.remove('sample')
        this.classList.add('LfandRf')
      })
      dir[i].addEventListener('mouseout',function(){
        this.classList.add('sample')
        this.classList.remove('LfandRf')
      })
    }


 }
}
