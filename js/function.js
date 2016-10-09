//兼容性
	//简化获取和页面加载和创建
		function $ (selector,range){
			var range=range||document;//未传范围的话默认为document
			if (typeof selector=='function') {
				//页面加载
				window.onload=selector;
			}else if (typeof selector=='string') {
				// alert('获取') 获取元素
				if (selector.charAt(0)=='#') {
					//判断字符串的第一位
					// alert('id')
					return document.getElementById(selector.slice(1))
					//将字符串的第二位之后的截取出来 即所需获得的类名或id名
				};
				if (selector.charAt(0)=='.') {
					// alert('类名')
					return getClass(selector.slice(1),range);

				};
				if (/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)) {
					//正则表达式/^[第一位规则][第二位规则]{第二位最少的个数，最多的个数}$/
					return range.getElementsByTagName(selector,range)
				};
				if (/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)) {return document.createElement(selector.slice(1,-1))

				};

			};
		}


	// 一、在I6-8中获取类名
	function getClass(classname,range){//形参1是类名,形参2是对象
		if (range.getElementsByClassName) {//判断浏览器是否支持获取类名，可以的话可以弹出一个函数：否则是未定义(undefined的布尔值为false)
			return range.getElementsByClassName(classname);
			/*alert('支持')*/
		}else{
			/*alert('不支持')*/

			var all=range.getElementsByTagName('*');//获取range内的所有标签如title script，输出的all是一个类数组
			var arr=[];

			for (var i = 0; i < all.length; i++) {//遍历所有标签
				// all[i].className==classname
				if (checkClass(all[i].className,classname)) {//判断标签的类名名是否是我们所需的上传的类名
					arr.push(all[i])//将符合要求的标签名放入数组内
				};
			};
			return arr;
		}
	}


	//当一个标签有多个类名的时候，需用到的函数(参数1，参数2)
	// 作用：将多个类名(字符串)，以空格的分隔符形式拆分(split)成数组，遍历数组中的每个元素，与我们需要获取的类名进行判断
		function checkClass(tagclass,cclass){
			var arr=tagclass.split(' ');
			for (var i = 0; i < arr.length; i++) {
				if (arr[i]==cclass) {
					return true;
				};
			};
			return false;
		}


	//获取文本内容
		//获取并设置文本内容

		// 因为实参2可以是空/实参1的textContent也可以为空，所有需用undefined来判断
		function text(obj,val){
			
			if (val==undefined) {//判断第二个实参是否是空或者没上传；若为undefined则为文本转换；
				if (obj.textContent!=undefined) {//判断浏览器支不支持这个属性
					alert('textContent')
					return obj.textContent;
				}else{
					alert('innerText')

					return obj.innerText;
				}

			}else{//若有实参，则为文本重新定义赋值
				if (obj.textContent!=undefined) {
					alert('textContent')
					 return obj.textContent=val;
				}else{
					alert('innerText')
					 return obj.innerText=val;
				}
			}
		}
    


    //获取样式兼容  IE FF
	    function getStyle(obj,attr){
	    	if (window.getComputedStyle==undefined) {
	    		// alert('current')
	    		return obj.currentStyle[attr];
	    	}else{
	    		// alert('get')
	    		return getComputedStyle(obj,null)[attr];
	    	}
	    }


    //获取子节点并排除子节点换行和注释内容
	    function getChilds(parent){
	    	var childs=parent.childNodes;
	    	var arr=[];
	    	for (var i = 0; i < childs.length; i++) {
	    		if (!(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==''))) {
	    			arr.push(childs[i]);    			
	    		};
	    	};
	    	return arr;
	    }

	// childs[i].nodeType==8  注释文本
	// childs[i].nodeType==3&&trim(childs[i].nodeValue)==''


    //判断文本节点是空换行还是有字符的文本
	    function trim(str){
	    	return str.replace(/^\s+|\s+$/g,'')
	    }

    //获取第一个子节点
	    function getFirst(parent){
	    	return getChilds(parent)[0];
	    }

    //获取最后一个子节点
	    function getLast(parent){
	    	var last=getChilds(parent)
	    	return last[last.length-1]

	    }
    //获取任意下标的子节点
	    function getIndex(parent,i){
	    	return getChilds(parent)[i]
	    }
    //获取下一个兄弟节点
	    function getNext(obj){
	    	var next=obj.nextSibling;
	    	if (!next) {
	    		return false
	    	};
	    	while(next.nodeType==8||(next.nodeType==3&&(trim(next.nodeValue)==''))){
	    		next=next.nextSibling
	    		if (!next) {
	    			return false;
	    		};
	    	}
	    	return next;
	    }

    //获取上一个兄弟节点
	    function getPrev(obj){
	    	var prev=obj.previousSibling;
	    	if (prev) {
	    		return false
	    	};
	    	while(prev.nodeType==8||(prev.nodeType==3&&(trim(prev.nodeValue)==''))){
	    		prev=prev.previousSibling;
	    		if (prev) {
	    			return false;
	    		};
	    	}
	    	return prev;
	    }


	//obj1加载到页面某个节点obj2之前
		function insertBefore(obj1,obj2){
			var parent=obj2.parentNode;
			parent.insertBefore(obj1,obj2)
		}

	//obj1加载到页面某个节点obj2之后
		function insertAfter(obj1,obj2){
			var after=getNext(obj2)
			var parent=obj2.parentNode

			if (after) {//判断是否有下一个兄弟节点
				insertBefore(obj1,after)
			}else{
				parent.appendChild(obj1)
			}

		}

	//事件添加
	function on(obj,ev,callback){//记得传事件的时候加引号
		if (obj.addEventListener) {
			obj.addEventListener(ev,callback)
		}else{
			obj.fffnnn=function(){
				callback.call(obj)
			}
			obj.attachEvent('on'+ev,obj.fffnnn);
			
		}
	}
	//事件删除

	function off(obj,ev,callback){
		if (obj.removeEventListener) {
			obj.removeEventListener(ev,callback)
		}else{
			obj.detachEvent('on'+ev,obj.fffnnn);
			
		}
	}




