"use strict";var gameEngine={ele:null,allBullets:{},allEnemys:{},scoreDiv:null,init:function(){return this.ele=document.getElementById("main"),this},start:function(){console.log("游戏开始"),gameEngine.loading(function(){console.log("游戏已经加载完成!"),myPlane.init().move(),myPlane.fire(),gameEngine.listenKeybord(),gameEngine.createEnemy(),gameEngine.crashEnemy(),gameEngine.calculateScore(),gameEngine.moveBg()})},loading:function(e){var n=document.createElement("div");n.className="logo",gameEngine.ele.appendChild(n);var a=document.createElement("div");a.className="load",gameEngine.ele.appendChild(a);var l=["images2/loading1.png","images2/loading2.png","images2/loading3.png"],t=0,o=setInterval(function(){t>=5?(clearInterval(o),gameEngine.ele.removeChild(n),gameEngine.ele.removeChild(a),e()):a.style.background="url("+l[++t%3]+") no-repeat"},500)},listenKeybord:function(){var e=0,n=0;window.onkeydown=function(a){var l=a||event;37==l.keyCode?e=-10:39==l.keyCode?e=10:38==l.keyCode?n=-10:40==l.keyCode&&(n=10)},window.onkeyup=function(){e=0,n=0},setInterval(function(){var a=myPlane.ele.offsetLeft+e;a<0?a=0:a>gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth&&(a=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth),myPlane.ele.style.left=a+"px",myPlane.ele.style.top=myPlane.ele.offsetTop+n+"px"},50)},createEnemy:function(){setInterval(function(){Math.random()>.3&&new Enemy(Enemy.prototype.ENEMY_TYPE_SMALL).init().move()},1e3),setInterval(function(){Math.random()>.7&&new Enemy(Enemy.prototype.ENEMY_TYPE_MIDDLE).init().move()},1e3),setInterval(function(){Math.random()>.5&&new Enemy(Enemy.prototype.ENEMY_TYPE_LARGE).init().move()},8e3)},crashEnemy:function(){var e=!1;setInterval(function(){for(var n in gameEngine.allEnemys){for(var a in gameEngine.allBullets)isCrash(gameEngine.allEnemys[n].ele,gameEngine.allBullets[a].ele)&&(gameEngine.allBullets[a].boom(),delete gameEngine.allBullets[a],gameEngine.allEnemys[n].hurt());if(!e&&isCrash(gameEngine.allEnemys[n].ele,myPlane.ele)){e=!0,console.log("GameOver!");var l=gameEngine.scoreDiv.innerHTML,t=prompt("您的分数为:"+l+", 请留下您的大名:");t?ajax({type:"post",url:"http://60.205.181.47/myPHPCode4/uploadScore.php",async:!0,data:{name:t,score:l},success:function(e){var n=JSON.parse(e);1==n.status?location.href="rank.html":(alert("提交失败: "+n.msg),location.reload())},error:function(){console.log("error")}}):(alert("提交失败: 未输入用户名"),location.reload())}}},30)},calculateScore:function(){this.scoreDiv=document.createElement("div"),this.scoreDiv.className="score",gameEngine.ele.appendChild(this.scoreDiv),this.scoreDiv.innerHTML="0"},moveBg:function(){var e=0;setInterval(function(){gameEngine.ele.style.backgroundPositionY=e+++"px"},30)}};