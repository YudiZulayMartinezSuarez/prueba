const results= document.querySelector("#rendertabla");
let puerto = 4005;


(async () =>{

        console.log("inicio");
        const response= await fetch(`http://localhost:4005/productos`)
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
        
        <div class="bg-warning text-center ">
            <div class="card">
                <h1>${data[i].name}</h1>
                <p>id: ${data[i].id}</p> 
            </div>
        </div>
        `;
        results.appendChild(card);
        };
        
        fdsdf
    })();