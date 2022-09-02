
$(submit).on("click",function(){
    $(appendHere).prepend(`
    <div id="post">
        <div id="photo"></div>
            <div id="options">
                <span id="userName">`+ $(displayName).val() +`</span>
                
                <span class="post" id="edit">Edit</span>
                <span class="post" id="delete">Delete</span>
            </div>
            <span id="comment">`+ $(commentHere).val() +`</span>
            <form id="repost" class="hidden">
                <input type="text" class="input" id="reType" placeholder="`+ $(commentHere).val() +`">
                <span class="redo" id="reSubmit">Submit</span> 
            </form>
    </div>`)
})

$(commentSection).on("click", "#delete", function(){
    $(this).parent('#options').parent('#post').remove()
})

$(commentSection).on("click", "#edit", function(){
    $(this).parent('#options').next('#comment').next('#repost').toggleClass('hidden')

})

$(commentSection).on("click", "#reSubmit", function(){
    let type = $(this).prev('#reType')
    $(this).parent('#repost').prev('#comment').text(`` + $(type).val() + ``) 
    $(this).parent('#repost').toggleClass('hidden')

})