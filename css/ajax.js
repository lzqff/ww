;function createXHR(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}t.XMLHTTP")}function ajax(e){function t(){200==n.status?e.success&&e.success(n.responseText):e.error&&e.error(n.status)}var n=createXHR(),r=getParam(e.data);"get"==e.type&&(e.url+=r.length>0?"?"+r:""),n.open(e.type,e.url,e.async),"get"==e.type?n.send(null):"post"==e.type&&(n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(r)),e.async?n.onreadystatechange=function(){4==n.readyState&&t()}:t()}function getParam(e){var t=[];for(var n in e){var r=n+"="+e[n];t.push(r)}return t.join("&")}