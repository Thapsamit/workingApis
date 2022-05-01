async function getData(){
    const res  = await fetch('tempData.csv')
    const data = await res.text()
    const rows = data.split('\n').slice(1) // split with new line
    rows.forEach((elt)=>{
        const row = elt.split(',')
        const year = row[0] 
        const temp = row[1]
        console.log(year,temp);
    })

}
getData();