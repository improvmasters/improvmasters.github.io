$(document).ready(function(){function e(e){var t=(0|e)%100;return t>3&&21>t?"th":["th","st","nd","rd"][t%10]||"th"}var t=new Date,n=t.getDate(),a=t.getMonth()+1,r=t.getFullYear(),o=5-t.getDay();o=0>o?7+o:o;var d=new Date(r+"/"+a+"/"+(n+o)+" 20:05:00"),i=new Date(r+"/"+a+"/"+(n+o-7)+" 20:05:00"),l="1ApJ3oi1-VApk3r5IpxWfUj3wI5yjl6UQWtbBPlt5qAQ",c="https://spreadsheets.google.com/feeds/list/"+l+"/od6/public/values?alt=json-in-script&callback=?",m="See you at ImprovMasters!";$.getJSON(c,{},function(){}).done(function(t){var n=t.feed.updated.$t,a=new Date(n);if(a>=i&&d>=a){for(var r,o,l,c=t.feed.entry,s=c.length,u=document.createDocumentFragment(),f=0,g=0;s>g;g++)if(o=c[g].gsx$role.$t,l=c[g].gsx$name.$t,""!=$.trim(l)&&""!=$.trim(o)){var p=document.createElement("td");p.innerHTML=o;var v=document.createElement("td");v.innerHTML=l;var r=document.createElement("tr");r.appendChild(p),r.appendChild(v),u.appendChild(r),f++}f>0&&(document.getElementById("roster").appendChild(u),m="This Friday the "+d.getDate()+e(d.getDate())+" at ImprovMasters...")}}).fail(function(e,t){console.log("getJSON request failed! "+t)}).always(function(){document.getElementById("fridayHeading").innerHTML=m;var e=document.querySelector("div.firstState").className;document.querySelector("div.firstState").className=e.replace("firstState","secondState")})}),function(){function e(e){return String.fromCharCode(e.charCodeAt(0)+1)}var t="mailto:",n="improv"+e("l")+"ast"+e("d")+"rs@gmail.co"+e("l"),a=document.getElementById("targetEmail");null!==a&&(a.href=t+n,a.innerHTML=n);var r=document.getElementById("forBrace");if(null!==a){var o="http://forms.brace.io/";r.setAttribute("action",o+n)}}();