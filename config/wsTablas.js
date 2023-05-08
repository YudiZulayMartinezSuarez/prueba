import tablas from "../app/tablas.js";
self.addEventListener("message", (e)=>{
    let res = tablas[`${e.data.type}`]((e.data.arg) ? e.data.arg : undefined);
    Promise.resolve(res).then(res=>postMessage(res));
})