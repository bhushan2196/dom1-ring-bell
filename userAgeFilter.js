const names=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
const age=[32, 30, 26, 28, 44]
let str=""
const data=[]
function createObj(name,age){
    this.name=name,
    this.age=age
}

for(let i=0;i<age.length;i++){
    data.push(new createObj(names[i],age[i]))
}
console.log(data);

data.forEach(itm=> {
    if(itm.age>30){
        str+=itm.name+" "
    }
})
console.log(str);