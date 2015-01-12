/**
 * Created by zhaoyang on 14-7-16.
 */
$(function(){
//    列表滑过显示操作按钮图标
    $('.list_table tr').hover(function(){
        var $this = $(this);
        $this.find('.MakeBtn').stop().animate({width:40},200);
    },function(){
        var $this = $(this);
        $this.find('.MakeBtn').stop().animate({width:0},300);
    });
    $('.list_table_tj tr').hover(function(){
        var $this = $(this);
        $this.find('.MakeBtn').stop().animate({right:0},200);
    },function(){
        var $this = $(this);
        $this.find('.MakeBtn').stop().animate({right:-80},300);
    });
    $('.data_left ul li').hover(function(){
        var $this = $(this);
        $this.find('.MakeBtn').stop().animate({right:-4},200);
    },function(){
        var $this = $(this);
        $this.find('.MakeBtn').stop().animate({right:-50},300);
    });
//    二级菜单
    var $top_nav_a = $('.top_nav a');
    var $second_header = $('.second_header');
    $top_nav_a.click(function(){
        var $this = $(this);
        $this.addClass('current').siblings().removeClass('current');
        $second_header.stop().animate({
            top:40
        },300);
    });
//    home底部按钮划过展开
    var $bottom_nav_a = $('.bottom_nav a');
    var $bottom_nav_s = $('.bottom_nav a span');
    var $bottom_nav_i = $('.bottom_nav a i');
    $bottom_nav_a.hover(function(){
        var $this = $(this);
        $this.find($bottom_nav_i).stop().animate({bottom:-2},200);
        $this.find($bottom_nav_s).stop().show().animate({
            opacity:1,
            top:-40
        },350);
    },function(){
        var $this = $(this);
        $this.find($bottom_nav_i).stop().animate({bottom:0},200);
        $this.find($bottom_nav_s).stop().animate({
            top:-30,
            opacity:0
        },300);
    });
//    switch开关
    var $switch = $('.switch');
    $switch.click(function(){
        var $this = $(this);
        if($this.hasClass('on')){
            $this.removeClass('on');
            $this.find('em').html('关');
        }else{
            $this.addClass('on');
            $this.find('em').html('开');
        }
    });
    //  流程管理滑动展示详细流程
    $ProcessOut = $('.ProcessOut');
    $ProcessOut.hover(function(){
       var $this = $(this);
       var width =0;
       var P_width =$this.width();
       $this.find('li').each(function(){
            width = width + $(this).width();
       });
       var M_width =P_width-width;
       if(M_width<0){
           if(Math.abs(M_width)>200){
                $this.find('.ProcessLi').stop().animate({marginLeft:M_width},4000);
           }else{
               $this.find('.ProcessLi').stop().animate({marginLeft:M_width},600);
           }
       }
    },function(){
        var $this = $(this);
        $this.find('.ProcessLi').stop().animate({marginLeft:0},1500);
    });
    //  角色列表滑过出操作按钮
    $('.UserList li').hover(function(){
        var $this = $(this);
        $this.find('.R-btns').stop().animate({right:0},200);
    },function(){
        var $this = $(this);
        $this.find('.R-btns').stop().animate({right:-40},200);
    });
//   统计表
    var $wait_left = $('.wait_left'),
        $wait_top = $('.wait_top'),
        $ico_left = $('.ico-left'),
        $ico_right = $('.ico-right'),
        $table_main = $('.table_main'),
        $waitW = $wait_left.width(),
        $waitH = $wait_top.height(),
        $table_right = $('.table_right'),
        $table_right_w = $table_right.width();
    $ico_left.click(function(){
        var $wait_left_l = parseInt($wait_left.css('left'));
        if($wait_left_l > ($table_right_w-$waitW)+10){
            $wait_left.stop().animate({left:($wait_left_l-140)},200);
        }
    });
    $ico_right.click(function(){
        var $wait_left_l = parseInt($wait_left.css('left'));
        if($wait_left_l >= ($table_right_w-$waitW) && $wait_left_l<0){
            $wait_left.stop().animate({left:($wait_left_l+140)},200);
        }
    });
//    选择申请表单
    var $this_form = $('#this_form'),
        $new_main = $this_form.parents('.new_main'),
        $form_edit_box = $('.form_edit_box');
    $this_form.click(function(){
        $new_main.fadeOut();
        $form_edit_box.show();
        $('.jscroll').jScrollPane({
            'mouseWheelSpeed':100,
            "showArrows":false
        });
    });
  });

















