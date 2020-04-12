console.log("coucou Morgane");
console.log("Maman, on pourra faire une partie de Nerf après ?");

const send = document.querySelector(".send");
send.addEventListener('click', function(){

        //console.log("send has been clicked");

        const inputForm = document.querySelector(".yearInput");
        inputForm.classList.add("is-hidden");
    
        const A = document.querySelector("#year").value;
        //console.log(A)
    
        let R = A%4;
        let S = A%7;
        let T = A%19;
    
        let B = (19*T)+24;
        let M = B%30;
    
        let C = (2*R)+(4*S)+(6*M)+5
    
        let N = C%7;
    
        let P = M+N;
    
        //console.log(P);
    
    
        const answer = document.querySelector('.answer');
    
        if (P<10){
            let paques = P + 22;
            //console.log(paques + 'mars');
            const date = document.querySelector(".subtitle");
            const visible = document.querySelector(".answer")
            date.innerText = `Pâques tombe le ${paques} mars en ${A}`;
            visible.classList.remove("is-hidden");
        } else {
            let paques = P - 9;
            //console.log(paques + 'avril');
            const date = document.querySelector(".subtitle");
            const visible = document.querySelector(".answer")
            date.innerText = `Pâques tombe le ${paques} avril en ${A}`;
            visible.classList.remove("is-hidden");  
        }
    }

);





const button = document.querySelector(".reset");
button.addEventListener('click', function(){
    window.location.reload(false);
    document.querySelector("#year").value = "";
    
})