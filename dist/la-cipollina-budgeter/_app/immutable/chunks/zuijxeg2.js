function s(t){const e=new Date(t.getFullYear(),0,1),o=Math.floor((t-e)/864e5),n=e.getDay(),a=n===0?6:n-1;return Math.floor((o+a)/7)+1}export{s as d};
