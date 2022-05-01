/*
fetch('https://images.unsplash.com/photo-1562177257-977b3bd4d7ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80')
.then((res)=>{
    console.log(res);
    return res.blob();
})
.then((blob)=>{
    console.log(blob);
    document.getElementById('rainbow').src= URL.createObjectURL(blob);
})
*/
// geting url only
/*
fetch('https://images.unsplash.com/photo-1562177257-977b3bd4d7ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80')
.then((res)=>{
    console.log(res);
    return res.url;
})
.then((getUrl)=>{
   console.log(getUrl)
   document.getElementById('rainbow').src= getUrl;

})
*/
async  function catchRainbow(){
  const res = await fetch('https://images.unsplash.com/photo-1562177257-977b3bd4d7ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80')
  console.log('resolved')
  const blob = await res.blob();
  document.getElementById('rainbow').src= URL.createObjectURL(blob);
}
console.log(catchRainbow())
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log('i will first')
    // expected output: "resolved"
  }
  
  asyncCall();