
let draw=document.querySelector('.play');
let layoutShower=document.querySelector('.layout');
let range=document.querySelector('#slide');
let submit=document.querySelector('button');
let layout=0;
let colorchoice=document.querySelector('#colorpicker');




range.addEventListener('input',function(event)
{
    layout=event.target.value;
    layoutShower.textContent=`${layout}X ${layout}`;
})

submit.addEventListener('click',function(){
     
    removingLayout()
    draw.setAttribute("style",`grid-template-rows:repeat(${layout},1fr);
    grid-template-columns: repeat(${layout},1fr);`);

    coloring(layout)


    
    })

function coloring(layout)
{
    
    let loop=layout*layout;
    for(let i=0;i<loop;i++)
    {
        let paint=document.createElement('div');
        paint.setAttribute('class','fill');
        draw.appendChild(paint);
         document.querySelectorAll(".fill")[i].addEventListener("click",function(){
        this.setAttribute("style",`background-color:${layoutcolor()}`)
       
     });
}


}


function removingLayout()
{
    while (draw.hasChildNodes())
    {
        draw.removeChild(draw.firstChild)
    }
               
}



let choice='';
colorchoice.addEventListener('input',function(event){
         choice=event.target.value;
        
    });

    
function layoutcolor()
{   console.log(choice);
    return choice

}