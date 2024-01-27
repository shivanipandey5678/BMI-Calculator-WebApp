
let calculate=document.getElementsByTagName('button');
let state;
for(let i=0;i<calculate.length;i++){
    calculate[i].addEventListener("click" ,function(){
        let weight=document.getElementById('wg').value;  
        let height=document.getElementById('hg').value;
        let heightinmeter=height/100;
        var ans=weight/(heightinmeter*heightinmeter);
        let bmi =ans.toFixed(2);
        if(bmi <= 18.4){
          state="UnderWeight";
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            state="Normal Weight";
          }
        else if(bmi >= 25 && bmi <= 29.9){
            state="Overweight";
          }
        else if(bmi >= 30){
            state="Obese";
          }
        
        
        document.getElementById('result').innerText = `which is ${bmi} means You are ${state}`;
       
    })

}
