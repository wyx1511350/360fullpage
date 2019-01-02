/**
 * Created by Administrator on 2018/10/19.
 */
$(function(){
    $('#fullpage').fullpage({
        navigation:true,
        verticalCentered:false,
            continuousVertical:true,
        sectionsColor:["rgb(13, 165, 214)","rgb(42, 181, 97)","rgb(222, 137, 16)","rgb(22, 186, 157)","rgb(13, 165, 214)"],
        afterLoad:function(anchorLink,index){
            if(index==1){
                $('.font').removeClass('font-start');
            }else if(index==2){
                $('.s2-box').removeClass('s2-box-start');
            }else if(index==3){
                $('.s3-box').removeClass('s3-box-start');
            }else if(index==4){
                $('.s4-box').removeClass('s4-box-start');
            }else if(index==5){
                $('.s5-box').removeClass('s5-box-start');
            }
        },
        onLeave:function(index,nextIndex){
            if(index==1){
                $('.font').addClass('font-start');
            }else if(index==2){
                setTimeout(function(){
                    $('.s2-box').addClass('s2-box-start');
                },1000);
            }else if(index==3){
                setTimeout(function(){
                    $('.s3-box').addClass('s3-box-start');
                },1000);
            }else if(index==4){
                setTimeout(function(){
                    $('.s4-box').addClass('s4-box-start');
                },1000);
            }else if(index==5){
                setTimeout(function(){
                    $('.s5-box').addClass('s5-box-start');
                },1000);
            }
        }
    });
})