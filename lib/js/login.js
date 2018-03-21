/**
 * Created by Administrator on 2018/3/14.
 */
/**
 * Created by Administrator on 2017/12/27.
 */
$(function(e){
    $('.connect p').animate({left:'0%'});

    $(".btn").click(function(){
        is_hide();
    });

    var $u = $("input[name=username]");
    var $p = $("input[name=password]");
    var $btnLogin = $('#submit');
    $btnLogin.bind('click',function(e){
        var $phone = $('#username').val();
        var $password = $('#password').val();

        var currentName = JSON.parse(sessionStorage.getItem('current'));

        if($u.val() == '' || $p.val() =='')
        {
            $("#ts").html("用户名或密码不能为空~");
            is_show();
            return false;
        }
        else{
            var reg = /^1[34578]\d{9}$/;
            var pwd= /\d{4}$/;
            if(!reg.exec($u.val()))
            {
                $("#ts").html("用户名错误~");
                is_show();
                return false;
            }
            if(!pwd.exec($p.val())){
                $("#ts").html("密码错误~");
                is_show();
                return false;
            }

        }
        $.post('http://127.0.0.1:12346/interface/ajax/login.php' , {phone:$phone , password:$password}, function(response){

            if(response.Code==100){
                console.log(response);
                sessionStorage.setItem('current',JSON.stringify(response.Data[0]));
                 location.href = "index.html";
            }

        } );
    });

    function is_hide(){ $(".alert").animate({"top":"-40%"}, 300) }
    function is_show(){ $(".alert").show().animate({"top":"40%"}, 300) }
})