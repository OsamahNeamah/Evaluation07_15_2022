
const Model={
  
  GetData(url){
      
    return fetch(url)

  },


}

const Controller=(Model,View)=>{
  baseUrl = 'http://localhost:4232/movies/'
  Model.GetData(baseUrl).then((response)=>{return response.json()}).then((data)=>{console.log(data); View.render(data.reverse())})
}


const View = {
  holder:document.getElementById('holder'),
  render(data){
    for(item of data){
      holder.innerHTML+=("<div class='item'><img src="+item.imgUrl+"><h3>"+item.name+"</h3><span>"+item.outlineInfo+"</span></div>")
    }
},
right:document.getElementById('right').addEventListener('click',()=>{
  let x= document.getElementById('holder')
  let style = x.currentStyle || window.getComputedStyle(x)
  if(parseInt(style.marginLeft)<0){
    let new_margin = parseInt(style.marginLeft)+200
    document.getElementById('holder').style.marginLeft=new_margin+'px'
  }
}),
left:document.getElementById('left').addEventListener('click',()=>{
  let x= document.getElementById('holder')
  let style = x.currentStyle || window.getComputedStyle(x)
  if(parseInt(style.marginLeft)>-1000){
    let new_margin = parseInt(style.marginLeft)-200
    document.getElementById('holder').style.marginLeft=new_margin+'px'
  }
})
}



Controller(Model,View)
