import reclutas from "../app/reclutas.js";

self.addEventListener("message", (e)=>{
    let res = reclutas[`${e.data.type}`]((e.data.arg) ? e.data.arg : undefined);
    Promise.resolve(res).then(res=>postMessage(res));
})

