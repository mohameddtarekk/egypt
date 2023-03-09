$(".s").click( function()
{
    $(this).next().slideToggle(500)
    $("p").not($(this).next()).slideUp(500)

})

let countDown = new Date("Jan 23, 2024 15:37:25").getTime()

let x = setInterval(function()
{
    let dateNow = new Date().getTime()

    let dis =  countDown - dateNow

    var day = Math.floor(dis / (1000 * 60 * 60 * 24));
    
    var hour = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var min = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));

    var sec = Math.floor((dis % (1000 * 60)) / 1000);

    document.querySelector(".day").innerHTML = `<h3 class="p-5">${day} D</h3>`
    document.querySelector(".hour").innerHTML = `<h3 class="p-5">${hour} h</h3>`
    document.querySelector(".min").innerHTML = `<h3 class="p-5">${min} m</h3>`
    document.querySelector(".sec").innerHTML = `<h3 class="p-5">${sec} s</h3>`

    if(dis < 0)
     {
        clearInterval(x);
    }

} , 1000)


$(".close").click(function()
{
   let width=  $(".sidenav").outerWidth(true)
   
    
    $(".sidenav").animate({left : `-${width}px`} , 400 )
    $(".link").hide(100)

})


$(".open").click(function()
{
    $(".sidenav").animate({left : `0px` } , 400 )
    
    $(".link").show(100)
   
})


$('#textArea').keyup(function() {
    
    let characterCount = $(this).val().length

      let num = document.querySelector(".sp").innerHTML

      let c = Number(num)

        let x = c -1
        
        if(characterCount < 100)
        {
          num = document.querySelector(".sp").innerHTML = `${x}`
        }


        if(characterCount == 0)
        {
          num = document.querySelector(".sp").innerHTML = `100`
        }


        if(characterCount >= 100)
        {
          num = document.querySelector(".sp").innerHTML = `your available character finished`
        }
        
})
   
    
