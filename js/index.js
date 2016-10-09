$(function(){
	//导航下拉菜单
		var daor=$('.daohang_right')[0]
		var xiahua=$('.xiahua');
		// alert(xiahua.length)//3
		var contents=$('.content',daor);
		// alert(contents.length)

		for (var i = 0; i < xiahua.length; i++) {
			xiahua[i].index=i;



			// alert(contents.length)
			hover(xiahua[i],function(){
				contents[this.index].style.display='block'
				xiahua[this.index].style.background='#fff'
			},function(){
				contents[this.index].style.display='none'
				xiahua[this.index].style.background=''


			})
		};

	//侧导详情
		var cedao=$('.cedao')[0];
		// alert(cedao.length)//1
		var cedaos=$('.cedao_icon',cedao);
		// alert(cedaos.length)//13
		var detail1s=$('.detail1',cedao);
		// alert(details.length)//13
		var detail2s=$('.detail2',cedao);
		// alert(detail2s.length)//13
		for (var i = 0; i < cedaos.length; i++) {
			cedaos[i].index=i;
			hover(cedaos[i],function(){
				this.style.background='#fff'
				detail1s[this.index].style.display='block'
				detail2s[this.index].style.display='block'
			},function(){
				detail1s[this.index].style.display='none'
				detail2s[this.index].style.display='none'
				this.style.background=''

			})
		};

	//banner轮播开始  层级和透明度
		var banner=$('.banner')[0];
		var bgs=$('.bg',$('.banner-box')[0]);
		// alert(bgs.length)//4
		var wheel=$('.wheel-box')[0]
		var imgBox=$('.img-box',wheel)[0];
		var lunbo=$('.lunbo',wheel)[0];
		var lis=$('li',lunbo);
		var imgs=$('img',imgBox);
		// alert(imgs.length)
		var num=0;
		var next=0;
		var t=setInterval(move,2000)
		function move(){
				num++;
				if (num==imgs.length) {
					num=0
				};
				for (var j = 0; j < imgs.length; j++) {
					imgs[j].style.opacity=0;
					// imgs[j].style.zIndex=0;
					lis[j].style.background='#333';
					bgs[j].style.zIndex=0;
				};
				

				animate(imgs[num],{opacity:1},300,function(){
					imgs[num],{opacity:1},1000,function(){
						imgs[num],{opacity:0},300
					}
				})

				imgs[num].style.zIndex=10;
				lis[num].style.background='#fff';
				bgs[num].style.zIndex=10;
		}//move函数结束

		banner.onmouseover=function(){
				clearInterval(t)
		}
		banner.onmouseout=function(){
				t=setInterval(move,2000)
		}
			
		
			

		for (var i = 0; i < lis.length; i++) {
			lis[i].index=i;
			lis[i].onclick=function(){
				for (var j = 0; j < imgs.length; j++) {

					imgs[j].style.opacity=0;
					// imgs[j].style.zIndex=0;
					// imgs[j].style.display='none';
					bgs[j].style.zIndex=0;

					lis[j].style.background='#ccc'
				};
				// imgs[this.index].style.zIndex=110;
				 // imgs[this.index].style.display='block';
				 // imgs[this.index].style.opacity=1;
				bgs[this.index].style.zIndex=10;
				lis[this.index].style.background='#fff'


				animate(imgs[this.index],{opacity:1},300)

				// animate(lis[this.index],{background:#fff},500)
			}
		};
	//banner轮播开始  层级和透明度

	//亲子 图片左右移动
		
		// alert(part2.length)//6
		// var pics=$('.part2_tu1',box2);
		// alert(pics.length)//6
		
		// var rpics=$('img',box3)
		// alert(rpics.length)//3

		//亲子中间动画
		var part2Box=$('.part2_box');
		// alert(part2Box.length)//6

			for (var i = 0; i < part2Box.length; i++) {
				 wai(part2Box[i])
			};


			function wai(part2Box){
					var box2=$('.part2_box2',part2Box)[0];

					var part2=$('.part2',box2);

					for (var j = 0; j < part2.length; j++) {
						li(part2[j])
					};
					function li(part2){
						var pics=$('.part2_tu1',part2)[0];
						part2.onmouseover=function(){
							animate(pics,{left:70},300)
							
						}
						part2.onmouseout=function(){
							animate(pics,{left:80},300)
							
						}
						
					}
				}
			
		//亲子中间动画
		
		//亲子右边动画


			// alert(box3)
			for (var i = 0; i < part2Box.length; i++) {
				rwai(part2Box[i])
			};

			function rwai(part2Box){
				var box3=$('.part2_box3',part2Box)[0];

				var rpart2=$('.part2_right_tu_box',box3);
				// alert(rpart2.length)
				for (var i = 0; i < rpart2.length; i++) {
					rli(rpart2[i])
				};
				function rli(rpart2){

					var rpics=$('img',rpart2)[0];
					// alert(rpics.length)
					// console.log(rpics)
					rpart2.onmouseover=function(){
						animate(rpics,{left:110},300)
						
					}
					rpart2.onmouseout=function(){
						animate(rpics,{left:130},300)
						
					}
				}
			}
		//亲子右边动画

	//亲子 图片左右移动

	//潮流图片放大
		var chaoliu=$('.chaoliu')[0];
		var chaos=$('.chaoliu_tu1',chaoliu)
		// alert(chaos.length)//10
		// for (var i = 0; i < chaos.length; i++) {
		// 	var dis=$('.chaoliu_di',chaos[i])[0];
		// 	var img=$('img',chaos[i])[0];
		// 	// alert(img.length)//10
		// 	chaos[i].onmouseover=function(){
		// 		animate(img,{width:120,height:120},500)
		// 	}
		// 	chaos[i].onmouseout=function(){
		// 		animate(img,{width:100,height:100},500)
		// 	}
		// };
		for (var i = 0; i < chaos.length; i++) {
			big(chaos[i])
		};
		function big(chaos){
			var imgss=$('img',chaos)[0];
			var dis=$('.chaoliu_di',chaos)[0];
			// alert(imgss.length)
			chaos.onmouseover=function(){
				animate(imgss,{width:110,height:110,bottom:25},200)
				// animate(dis[0],{bottom:10},200)

			}
			chaos.onmouseout=function(){
				animate(imgss,{width:100,height:100,bottom:30},200)
				// animate(dis[0],{bottom:20},200)
			}
		}
		
	//潮流图片放大
	//潮流图片优化
		var chaoliutop=chaoliu.offsetTop;
		var chaoliuflag=true;
		on(window,'scroll',function(){
			var chaostop=document.documentElement.scrollTop||document.body.scrollTop;
			if (chaostop+ch>chaoliutop&&chaoliuflag) {
				var chaoliuimgs=$('img',chaoliu);
				// alert(chaoliuimgs.length)//10
				chaoliuflag=false;
				for (var i = 0; i < chaoliuimgs.length; i++) {
					chaoliuimgs[i].src=chaoliuimgs[i].getAttribute('asrc')
				};
			};




		})


	//潮电酷玩图片移动
		var part2box4=$('.part2_box4')[0];
		// alert(part2box4)
		// var chaodianimgs=$('img',part2box4);
		// alert(chaodianimgs.length)//7
		var ones=$('.one',part2box4);
		// alert(ones.length)//7
		for (var i = 0; i < ones.length; i++) {
			// ones[i].dd=i;
			kuwan(ones[i])
			

		}
		function kuwan(ones){
			var chaodianimgs=$('img',ones)[0];
			// alert(chaodianimgs.length)//1

			ones.onmouseover=function(){
					animate(chaodianimgs,{left:70},300)
			};
			ones.onmouseout=function(){
					animate(chaodianimgs,{left:80},300)
			};
		}
	
	//打造爱巢右图移动
		var p2b3box=$('.part2_box3',part2Box[2])[0];
		// alert(p2b3box.length)//1

		var aichao=$('.part22_right_tu_box');
		// alert(aichao.length)//4
		for (var i = 0; i < aichao.length; i++) {
			ai(aichao[i])
		};
		function ai(aichao){
			var aichaoimgs=$('img',aichao)[0];
			// alert(aichaoimgs.length)//1
			aichao.onmouseover=function(){
				animate(aichaoimgs,{right:10},500)
			}
			aichao.onmouseout=function(){
				animate(aichaoimgs,{right:0},500)
			}
		}
		
	var  ch=document.documentElement.clientHeight;//获取浏览器窗口高度
	//顶部固定搜索框显示隐藏
		//楼层标识 元素获取
			var floor=$('.floor')[0];
			// alert(floor.length)//1
			var qinziflags=[];

			var floordaos=$('.floor_daohang',floor);
			// alert(floordaos.length)//7
			var tops=[];
			for (var i = 0; i < part2Box.length; i++) {
				tops.push(part2Box[i].offsetTop)
				qinziflags.push(true);
			};
			var part3Box=$('.part3_box')[0];
			// alert(part3Box.length)//1
			// tops.push(part3Box.offsetTop);//加上品牌旗舰
			// alert(tops.length)//7
			var ding=$('.big')[0];
			// alert(ding.length)//1
			var gg=0;
			floorflag=true;
			// var flags=[];
		on(window,'scroll',function(){
			var floorstop=document.documentElement.scrollTop||document.body.scrollTop;
			//楼层标识
				for (var i = 0; i < tops.length; i++) {
					if (tops[i]<floorstop+ch) {
						// gg++;
						// document.title=gg;
						for(var j=0;j<floordaos.length;j++){
						floordaos[j].style.background="";

						}
						floordaos[i].style.background="orange";
						floorflag=false;

					};
				};

			//楼层显示隐藏 顶部搜索显示隐藏
				if (floorstop>1200) {
					
					if (floorflag) {
						// gg++;
						// document.title=gg;
						floorflag=false;
						animate(floor,{marginLeft:-660},300);
						animate(ding,{top:0},300);
					};
					
				}else{
					if (!floorflag) {
						floorflag=true;
						animate(floor,{marginLeft:-820},300);
						animate(ding,{top:-50},300);

					};
				}

			//楼层跳转
				for (var i = 0; i < floordaos.length; i++) {
					floordaos[i].ee=i;
					floordaos[i].onclick=function(){
						// document.documentElement.scrollTop=tops[this.ee];
						// document.body.scrollTop=tops[this.ee];
						animate(document.documentElement,{scrollTop:tops[this.ee]});
						animate(document.body,{scrollTop:tops[this.ee]});
					}
				};


			


		})//滚动条事件结束




		//亲子图片优化
			var hh=0;
			on(window,'scroll',function(){
				var qinzistop=document.documentElement.scrollTop||document.body.scrollTop;
				for (var i = 0; i < part2Box.length; i++) {
					if (qinzistop+ch>tops[i]&&qinziflags[i]) {
						// hh++;
						// document.title=hh;
						qinziflags[i]=false;
						var qinziimgs=$('img',part2Box[i]);
						// alert(qinziimgs.length)//8 10 11
						for (var j = 0; j < qinziimgs.length; j++) {
							qinziimgs[j].src=qinziimgs[j].getAttribute('asrc')
						};

					};
					
				};



			})


	//楼层跳转

	//返回顶部

	//猜你喜欢图片透明度
	var part4Box=$('.part4_box');
		// alert(part4Box.length)//2
		for (var i = 0; i < part4Box.length; i++) {
			cai(part4Box[i])
		};
		
		function cai(part4Box){
			var part4s=$('.part4',part4Box);
			// alert(part4s.length)//5
			var caiimgs=$('img',part4Box);
				// alert(caiimgs.length)//5
			for (var i = 0; i < part4s.length; i++) {
				part4s[i].ff=i;
				

				part4s[i].onmouseover=function(){
					part4s[this.ff].style.border='1px solid red';
					caiimgs[this.ff].style.opacity=0.7;
					caiimgs[this.ff].style.filter=alpha(opacity=70);
					// console.log(caiimgs)
				}
				part4s[i].onmouseout=function(){
					part4s[this.ff].style.border='';
					caiimgs[this.ff].style.opacity=1;

				}
			};
		}

	//品牌旗舰店优化
	var part3Box=$('.part3_box');
		// alert(part3Box.length)//2
		var pintops=[];
		var pinflags=[];
		for (var i = 0; i < part3Box.length; i++) {
			pintops.push(part3Box[i].offsetTop)
			pinflags.push(true);
		};
		// alert(pintops.length)//2
		on(window,'scroll',function(){
			var pinstop=document.documentElement.scrollTop||document.body.scrollTop;
			for (var i = 0; i < pintops.length; i++) {
				var pinimgs=$('img',part3Box[i]);//????
					// alert(pinimgs.length)//6
					pinflags[i]=false;

				if (pinstop+ch>pintops[i]&&pinflags) {

					for (var j = 0; j < pinimgs.length; j++) {
						pinimgs[j].src=pinimgs[j].getAttribute('asrc')
						
					};
				};
				
			};
		})//滚动条结束
		
		// var part3Boxs=$('.part3_box')[0];
		// var qitop=part3Boxs.offsetTop;
		// on(window,'scroll',function(){
		// 	var qistop=document.documentElement.scrollTop||document.body.scrollTop;
		// 	var qiimgs=$('img',part3Boxs);
		// 	// alert(qiimgs.length)//6
		// 	for (var i = 0; i < qinimgs.length; i++) {
		// 		qinimgs[i].src=qinimgs[i].getAttribute('asrc')
		// 	};

		// })

	//图片透明度
		for (var i = 0; i < part3Box.length; i++) {
			qijian(part3Box[i])
		};
		function qijian(part3Box){
			var jius=$('.jiu_tu_box',part3Box);
			// alert(jius.length)//6
			var jiuimgs=$('img',part3Box);
			// alert(jiuimgs.length)//6
			for (var i = 0; i < jius.length; i++) {
				jius[i].gg=i;
				jius[i].onmouseover=function(){
					// jius[this.gg].style.border='1px solid #e5004f';
					jiuimgs[this.gg].style.opacity=0.7;
					jiuimgs[this.gg].style.filter=alpha(opacity=70);
				}
				jius[i].onmouseout=function(){
					// jius[this.gg].style.border='';
					jiuimgs[this.gg].style.opacity=1;
				}
			};
		}
	
	
	//组图优化

	// var part4Box=$('.part4_box');
		// alert(part4Box.length)
		var p4tops=[];
		var p4flags=[];
		for (var i = 0; i < part4Box.length; i++) {
			p4tops.push(part4Box[i].offsetTop);
			p4flags.push(true)
		};

		on(window,'scroll',function(){
			var p4stop=document.documentElement.scrollTop||document.body.scrollTop;
			for (var i = 0; i < p4tops.length; i++) {
				
				if (p4stop+ch>p4tops[i]&&p4flags[i]) {
					var p4imgs=$('img',part4Box[i]);
					// alert(p4imgs.length)
					p4flags[i]=false;
					for (var j = 0; j < p4imgs.length; j++) {
						p4imgs[j].src=p4imgs[j].getAttribute('asrc')
					};
				};
			};





		})


	//固定
		var fix=$('.fix_right')[0];
		var tians=$('.tian',fix);
		// alert(tians.length)//8

		for (var i = 0; i < tians.length; i++) {
			tians[i].index=i;
			hover(tians[i],function(){
	            this.style.background='#a50000';
	            var zis=$('.zi-box',this)[0];
	            animate(zis,{left:-70,opacity:1},500)
			},function(){
				this.style.background='';
	            var zis=$('.zi-box',this)[0];
	            animate(zis,{left:-90,opacity:0},500)
			})
		};



})//加载结束