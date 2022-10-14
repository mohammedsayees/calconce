    function buttonclick(val)
    {
        document.getElementById("screen").value+=val
    }

    function clr(){
        document.getElementById("screen").value=""
    }

    function equalClick(){
        var text=document.getElementById("screen").value
        var result=eval(text)
        document.getElementById("screen").value=result
    }

var one=(function (){
    var ab;
    var text1=false;
    return function(){
        if(!text1){
        var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
     text1=true;
     ab=text;
        }
        else {
            var result=eval(ab)
            document.getElementById("screen").value=result
        }
    }
})()    