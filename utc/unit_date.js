function r(t,e){switch(e){case"years":return new Date(Date.UTC(t.getUTCFullYear(),0));case"months":return new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth()));case"days":return new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()));case"hours":return new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()));case"minutes":return new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes()));case"seconds":return new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getSeconds()));default:return new Date(t)}}function m(t,e){let s={years:t.getUTCFullYear()};switch(e){default:s.seconds=t.getSeconds();case"minutes":s.minutes=t.getUTCMinutes();case"hours":s.hours=t.getUTCHours();case"days":s.days=t.getUTCDate();case"months":s.months=t.getUTCMonth()+1;case"years":}return s}function o(t,e,s){let n=r(t,s);switch(s){default:case"seconds":"seconds"in e&&n.setUTCSeconds(Math.max(0,Math.min(59,e.seconds)));case"minutes":"minutes"in e&&n.setUTCMinutes(Math.max(0,Math.min(59,e.minutes)));case"hours":"hours"in e&&n.setUTCHours(Math.max(0,Math.min(23,e.hours)));case"days":case"months":"months"in e&&n.setUTCMonth(Math.max(0,Math.min(11,e.months-1)));case"years":"years"in e&&n.setUTCFullYear(e.years)}if("days"in e&&["days","hours","minutes","seconds",void 0].includes(s)){let a=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()+1,0));n.setUTCDate(Math.max(1,Math.min(e.days,a.getUTCDate())))}return n}function u(t,e,s){let n=s?r(t,s):new Date(t);switch(s){default:case"seconds":"seconds"in e&&n.setUTCSeconds(e.seconds+n.getSeconds());case"minutes":"minutes"in e&&n.setUTCMinutes(e.minutes+n.getUTCMinutes());case"hours":"hours"in e&&n.setUTCHours(e.hours+n.getUTCHours());case"days":"days"in e&&n.setUTCDate(e.days+n.getUTCDate());case"months":"months"in e&&n.setUTCMonth(e.months+n.getUTCMonth());case"years":"years"in e&&n.setUTCFullYear(e.years+n.getUTCFullYear())}return n}function c(t,e,s){switch(s){case"years":return t.getUTCFullYear()-e.getUTCFullYear();case"months":return(t.getUTCFullYear()-e.getUTCFullYear())*12+t.getUTCMonth()-e.getUTCMonth();default:{let n=r(t,s).getTime()-r(e,s).getTime();switch(s){case"days":return n/864e5;case"hours":return n/36e5;case"minutes":return n/6e4;case"seconds":return n/1e3;default:return n}}}}function F(t,e,s){let n="months"in e?"years":"days"in e?"months":"hours"in e?"days":"minutes"in e?"hours":"minutes",a=r(t,n),D=o(a,e);return c(t,D,s)<0?D:o(u(a,{[n]:1}),e)}function i(t,e,s){return new Intl.DateTimeFormat(e,s).format(t)}function O(t,e="YYYY-MM-DDTHH:mm:ssZ",s){return e.replace(/y{1,5}|Y{4}|M{1,4}|d{3,4}|D{1,2}|H{1,2}|h{1,4}|m{1,2}|s{1,2}|f{1,3}|z{1,3}/g,n=>{switch(n){case"yy":case"yyyy":return("0000"+t.getUTCFullYear()).slice(-n.length);case"YYYY":return t.getUTCFullYear()+"";case"M":return t.getUTCMonth()+1+"";case"MM":return("0"+(t.getUTCMonth()+1)).slice(-2);case"MMM":return i(t,s,{month:"short",timeZone:"UTC"});case"MMMM":return i(t,s,{month:"long",timeZone:"UTC"});case"D":return t.getUTCDate()+"";case"DD":return("0"+t.getUTCDate()).slice(-2);case"ddd":return i(t,s,{weekday:"short",timeZone:"UTC"});case"dddd":return i(t,s,{weekday:"long",timeZone:"UTC"});case"H":return t.getUTCHours()+"";case"HH":return("0"+t.getUTCHours()).slice(-2);case"h":return t.getUTCHours()%12+"";case"hh":return("0"+t.getUTCHours()%12).slice(-2);case"hhh":return i(t,s,{hour:"numeric",hour12:!0,timeZone:"UTC"});case"hhhh":return i(t,s,{hour:"2-digit",hour12:!0,timeZone:"UTC"});case"m":return t.getUTCMinutes()+"";case"mm":return("0"+t.getUTCMinutes()).slice(-2);case"s":return t.getSeconds()+"";case"ss":return("0"+t.getSeconds()).slice(-2);case"f":return Math.floor(t.getUTCMilliseconds()/100)+"";case"ff":return("0"+Math.floor(t.getUTCMilliseconds()/10)).slice(-2);case"fff":return("00"+t.getUTCMilliseconds()).slice(-3);default:return""}})}export{u as add,c as diff,O as format,m as get,F as next,o as set,r as unit};
