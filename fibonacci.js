function fibo(n){
  var a=0;
  var b=1;
  var tmp;
  if(n<2) b=0;
  for(var i=1;i<n;i++){
    tmp=a+b;
    a=b;
    b=tmp;
  } 
  return b;
}
fibo(3);