$(function(){function n(){var n=0;$(".my-shop-contain").each(function(){var e=$(this).find("input").prop("checked");e&&(n+=parseInt($(this).find("span").eq(0).html())*parseFloat($(this).find("span").eq(1).html()))}),$(".my-shop-column2").find("span").html(n+".00")}var e=$(".my-shop-column1").length;$(".my-shop-column1").eq(e-1).css("paddingBottom","2rem"),$(".edit").each(function(e){var t=$(this).parent().siblings().children("*:nth-child(2)").find("li:nth-child(1)"),i=t.children("a:nth-child(1)"),h=t.children("a:nth-child(3)");i.mousedown(function(){var e=$(this).parent().children("a:nth-child(2)").html();1==e&&(alert("不能在减少了"),$(this).parent().children("a:nth-child(2)").html(1),parseInt(e)=1),$(this).parent().children("a:nth-child(2)").html(parseInt(e)-1),$(this).parent().siblings().find("span:nth-child(3)").html(parseInt(e)-1+"件"),n()}),h.mousedown(function(){var e=$(this).parent().children("a:nth-child(2)").html();$(this).parent().children("a:nth-child(2)").html(parseInt(e)+1),$(this).parent().siblings().find("span:nth-child(3)").html(parseInt(e)+1+"件"),n()}),$(".edit").eq(e).mousedown(function(){var n=$(this).parent().siblings().children("*:nth-child(3)");t.css("display","block");var e=$(this).parent().siblings().children("*:nth-child(2)").find("span"),i=$(this).parent().siblings().children("*:nth-child(2)").find("b");e.css("display","none"),i.css("display","none"),t.next().css("display","none"),n.hasClass("my-shop-del1")?(n.removeClass("my-shop-del1"),n.animate({marginRight:"-1.4rem"},500),$(this).html("编辑"),t.css("display","none"),e.css("display","inline-block"),i.css("display","inline-block"),t.next().css("display","block")):(n.addClass("my-shop-del1"),n.animate({marginRight:"-0.2rem"},500),$(this).html("完成"),t.css("display","block"),e.css("display","none"),i.css("display","none"),t.next().css("display","none"),n.mousedown(function(){var n=$(this).parent().parent().find(".my-shop-contain").length,e=$(this).parent().siblings();$(this).parent().remove(),1==n&&e.remove()}))})});var t=$(".my-shop-column1")[0],i=t.getElementsByTagName("input");i[0].onclick=function(){for(var n=1;n<i.length;n++)i[n].checked=this.checked};for(var h=1;h<i.length;h++)i[h].onclick=function(){c()};var c=function(){for(var n=1,e=0;n<i.length;n++)i[n].checked&&e++;i[0].checked=e==i.length-1},s=$(".my-shop-column1")[1],l=s.getElementsByTagName("input");l[0].onclick=function(){for(var n=1;n<l.length;n++)l[n].checked=this.checked};for(var h=1;h<l.length;h++)l[h].onclick=function(){a()};var a=function(){for(var n=1,e=0;n<l.length;n++)l[n].checked&&e++;l[0].checked=e==l.length-1},o=$(".my-shop-column1")[2],d=o.getElementsByTagName("input");d[0].onclick=function(){for(var n=1;n<d.length;n++)d[n].checked=this.checked};for(var h=1;h<d.length;h++)d[h].onclick=function(){r()};var r=function(){for(var n=1,e=0;n<d.length;n++)d[n].checked&&e++;d[0].checked=e==d.length-1},p=document.getElementsByTagName("input");p[p.length-1].onclick=function(){for(var e=0;e<p.length;e++)p[e].checked=this.checked;n()},$(".my-shop-column1 input").on("click",function(){var e=$("input[type='checkbox']:checked").length;e==p.length-1?p[p.length-1].checked=!0:p[p.length-1].checked=!1,n()})});