   window.onload = function() {
       //获取按钮标签
       var items = document.getElementsByClassName("item")
       var points = document.getElementsByClassName("point")
       var left = document.getElementById("left")
       var right = document.getElementById("right")
       var box = document.getElementsByClassName("navbar-right")[0]
           //初始化下标值，表示第Index张显示在当前页面
       var index = 0
           //封装清除active函数，只允许一张图片被添加active类名
       var clearActive = function() {
               for (var i = 0; i < items.length; i++) {
                   items[i].className = 'item';
                   points[i].className = "point"
               }
           }
           //将当前Index图片添加active类
       var goIndex = function() {
               clearActive()
               items[index].className = "item active"
               points[index].className = "point active"
           }
           //封装goNext函数，实现切换下一个图片
       var goNext = function() {
               //判断当到第五张时，继续循环
               if (index < 4) {
                   index++
               } else {
                   index = 0
               }
               goIndex()
           }
           //封装切换上一张函数
       var goPre = function() {
               //判断当index为0时
               if (index == 0) {
                   index = 4
               } else {
                   index--
               }
               goIndex()
           }
           //给right按钮绑定事件

       right.addEventListener("click", function() {
           goNext()
       })
       left.addEventListener("click", function() {
           goPre()
       })

       //给point绑定事件
       for (var i = 0; i < points.length; i++) {
           points[i].addEventListener("mouseover", function() {
               var pointIndex = this.getAttribute("data-index")
               index = pointIndex
               goIndex()
           })
       }
       //定时器封装
       var timer

       function myVar() {
           timer = setInterval(function() {
               goNext()
           }, 2000)
       }
       //打开页面后执行定时器
       setTimeout(myVar, 0)
           //鼠标移入清除定时器
       box.onmouseover = function() {
               clearInterval(timer)
           }
           //鼠标移出打开定时器
       box.onmouseout = function() {
               myVar()
           }
           //登入按钮封装
       var login = document.getElementsByClassName("login")[0]
       login.onclick = function() {
               location.href = "../登录界面/index.html"
           }
           //返回顶部
       var top = document.getElementsByClassName("top")[0]
       window.onscroll = function() {
           let res = document.documentElement.scrollTop //滚动条到顶部的距离
           console.log(res);
           if (res >= 700) {
               top.style.display = "block"
           } else {
               top.style.display = "none"
           }
       }
       top.onclick = function() {
           document.documentElement.scrollTop = 0
       }
   }