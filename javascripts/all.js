$(document).ready(function(){function e(e){var t=(0|e)%100;return t>3&&21>t?"th":["th","st","nd","rd"][t%10]||"th"}var t=new Date,a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear(),d=5-t.getDay();d=0>d?7+d:d;var o=new Date(r+"/"+n+"/"+(a+d)+" 20:05:00"),i=new Date(r+"/"+n+"/"+(a+d-7)+" 20:05:00"),c="1ApJ3oi1-VApk3r5IpxWfUj3wI5yjl6UQWtbBPlt5qAQ",l="https://spreadsheets.google.com/feeds/list/"+c+"/od6/public/values?alt=json-in-script&callback=?",s="See you at ImprovMasters!";$.getJSON(l,{},function(){}).done(function(t){var a=t.feed.updated.$t,n=new Date(a);if(n>=i&&o>=n){for(var r,d,c,l=t.feed.entry,u=l.length,m=document.createDocumentFragment(),f=0,p=0;u>p;p++)if(d=l[p].gsx$role.$t,c=l[p].gsx$name.$t,""!=$.trim(c)&&""!=$.trim(d)){var g=document.createElement("td");g.innerHTML=d;var v=document.createElement("td");v.innerHTML=c;var r=document.createElement("tr");r.appendChild(g),r.appendChild(v),m.appendChild(r),f++}f>0&&(document.getElementById("roster").appendChild(m),s="This Friday the "+o.getDate()+e(o.getDate())+" at ImprovMasters...")}}).fail(function(e,t){console.log("getJSON request failed! "+t)}).always(function(){document.getElementById("fridayHeading").innerHTML=s;var e=document.querySelector("div.firstState").className;document.querySelector("div.firstState").className=e.replace("firstState","secondState")})});