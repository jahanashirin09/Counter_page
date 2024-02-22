let countId=document.getElementById("cound_id")
let saveId=document.getElementById("number")
let count=0
function increment(){
    count+=1
    countId.textContent=count
    
}
function save(){
    let countre=count+"-"
    saveId.textContent+=countre
    countId.textContent=0
    count=0

}