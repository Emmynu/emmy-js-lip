let paragraphContent = [
    `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Expedita, error. Iure maxime, 
    neque expedita nisi totam minus vitae sequi. 
    Officiis fuga corrupti repellendus non totam explicabo possimus 
    recusandae iure numquam!`,

    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Earum expedita pariatur reiciendis quam optio, labore provident, 
    illum corporis iure velit error dolorem nemo. Rerum maxime, 
    exercitationem quam atque debitis in totam impedit saepe? Atque, accusamus?`,

    `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Corporis voluptates soluta quae aliquam incidunt excepturi illo asperiores. 
     Cupiditate ipsa totam vitae ad, natus aliquid ullam fuga dolore provident 
    explicabo voluptates eos debitis ut laborum adipisci expedita nostrum temporibus 
    accusamus distinctio.`,

    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Cupiditate voluptatibus reiciendis, quod similique necessitatibus laudantium veniam
     omnis nemo neque dolorem numquam amet enim. Esse modi facere distinctio saepe 
     aliquam facilis ducimus quaerat consequuntur amet. 
    Laudantium voluptates ab nobis vel enim.`,

    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Dolorum architecto porro ipsum voluptatibus repellat deleniti voluptates laborum, 
    incidunt expedita iusto adipisci alias unde sint quas sed doloremque. 
    Eveniet dolores repudiandae repellat eos velit quam, qui magni vero a saepe iure?`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Soluta dolore tempore enim omnis harum? Ipsum sint voluptate dolor cum. 
    Eum, quidem alias incidunt fugiat atque accusantium, 
    tenetur repellendus ducimus qui corporis id ut,
     illo doloribus et deserunt odio? Facere, tempora!`,
     
     `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Asperiores architecto sunt laboriosam ullam cupiditate, consequatur perferendis
      veniam porro facere ab, ipsam, earum ducimus corporis rem amet labore magni. 
      Suscipit magnam aliquid 
     aperiam exercitationem distinctio at necessitatibus sed delectus, dolores quaerat!`,

     `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Alias provident necessitatibus quas adipisci iusto ab laboriosam ea, vero saepe, 
      inventore suscipit porro cumque animi error blanditiis, eligendi quos architecto
       dolores rem? Labore nemo, 
     nihil aliquam rem velit itaque commodi obcaecati.`,

     `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Quam eum temporibus voluptatem illum sequi doloremque quos voluptates, recusandae quidem? Eveniet 
     asperiores inventore amet suscipit culpa soluta sunt mollitia tempora tenetur?`
]



function submit(){
   const inputVal=  document.querySelector("#num").value
    const newInputVal =  parseInt(inputVal)
    const newArray =  paragraphContent.slice(0,newInputVal)

    if(newInputVal){
        if(newInputVal <= 0){
            $("#modal").text("Invalid Input").css({color: "red"}).fadeToggle(2000).hide(2000)
            $("#line").fadeToggle(2000).css({backgroundColor:"red"}).hide(2000)
            document.querySelector("#display").innerHTML = ""
        }
        else if(newInputVal > 10){
            $("#modal").text("Sucessfully Generated").css({color: "green"}).fadeToggle(2000).hide(2000)
            $("#line").fadeToggle(2000).css({backgroundColor:"green"}).hide(2000)
        }
        else{ 
            const display = newArray.map(function(item){
                return `<p>${item}</p>`
            }).join("")
            document.querySelector("#display").innerHTML = display
            $("#modal").text("Sucessfully Generated").css({color: "green"}).fadeToggle(2000).hide(2000)
            $("#line").fadeToggle(2000).css({backgroundColor:"green"}).hide(2000)
        }
    }
    else{
        $("#modal").text("Invalid Input").css({color: "red"}).fadeToggle(2000).hide(2000)
        $("#line").fadeToggle(2000).css({backgroundColor:"red"}).hide(2000)
        document.querySelector("#display").innerHTML = ""
    }
}
