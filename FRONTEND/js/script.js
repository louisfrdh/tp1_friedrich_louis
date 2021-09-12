$(document).ready(function(){
    $("#form-submit").bind("click", onformsubmit);
    function onformsubmit(){
        var thereIsAWrongInput = false;
        var wrongInputs = new Array();
        $(":input").each(function(){
            var input = $(this);
            var pattern = input.prop("pattern")
            var value = input.prop("value");
            var patternOk = pattern && value ? new RegExp(pattern).test(value) : true;
            if(!patternOk){
                thereIsAWrongInput = true;
                wrongInputs.push(input.prop("id"));
            }
        });
        if(thereIsAWrongInput){
            var message = "Les champs suivants sont incorrects :\n";
            wrongInputs.forEach(i => message += i + "\n")
            alert(message);
        }
    }
})

