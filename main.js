
const Model={
  
  GetData(url){
      
    return fetch(url)

  },


}

const Controller=(Model,View)=>{
  Init=0
  baseUrl = 'http://localhost:4232/movies/'
  Model.GetData(baseUrl).then((response)=>{return response.json()}).then((data)=>{console.log(data); View.render(data.reverse())}).then(()=>{
    let x= document.getElementById('holder')
    let style = x.currentStyle || window.getComputedStyle(x)
    View.InitialMargin = parseInt(style.marginLeft)
  })
  document.getElementById('right').addEventListener('click',()=>{
    if(View.InitialMargin<Init){
      View.InitialMargin+=200
      new_margin=View.InitialMargin
      document.getElementById('holder').style.marginLeft=new_margin+'px'
      document.getElementById('left').style.display='inline'   
      document.getElementById('holder').style.marginTop='0px'
      if(View.InitialMargin==this.Init){
        View.InitialMargin= this.Init
        document.getElementById('right').style.display='none'
      }
    }
  })

  left:document.getElementById('left').addEventListener('click',()=>{
    document.getElementById('right').style.display='inline'
    let x= document.getElementById('holder')
    let style = x.currentStyle || window.getComputedStyle(x)
    if(View.InitialMargin>-1000){
      View.InitialMargin-=200
      new_margin=View.InitialMargin
      console.log(new_margin)
      document.getElementById('holder').style.marginLeft=new_margin+'px'
    }
    if(View.InitialMargin==-1000){
      document.getElementById('left').style.display='none'
      document.getElementById('holder').style.marginTop='287px'
    }
  })

}


const View = {
 
  InitialMargin:0,
  holder:document.getElementById('holder'),
  render(data){
    for(item of data){
      holder.innerHTML+=("<div class='item'><img src="+item.imgUrl+"><h3>"+item.name+"</h3><span>"+item.outlineInfo+"</span></div>")
    }
}
}



Controller(Model,View)
