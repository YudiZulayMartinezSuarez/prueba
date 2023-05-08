import config  from "../config/wsTablas";
export default class Tablas extends HTMLElement{
    static url = import.meta.url
    static async componentes(){
        return await (await fetch(config.uri(Tablas.url))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    handleEvent(e){
        e.preventDefault();
        (e.type==="submit") ? this.wsTablas (e) : undefined;
    }
    wsTablas (e){
        let ws = new Worker("../config/wsTablas .js", {type:"module"});
        let data = Object.fromEntries(new FormData(e.target));
        switch (e.submitter.dataset.valor){
            case "get": 
                ws.postMessage({type:"getTablasAll"});
                console.log("get eliminar ");
                break;
            case "post":
                console.log("post eliminar ");
                ws.postMessage({type:"postTablas ", arg:data});
                break;
            case "delete":
                console.log("delete eliminar ");
                ws.postMessage({type:"delteTablas ", arg:data});
                break;
            default:
                break;
        }
        ws.addEventListener("message", (e)=>{
            console.log(e.data);
            ws.terminate();
        })
    }

    static get observedAttributes(){
        return ['data-accion'];
    }
    
    atributeChangedCallback(id,edad, name,telefono, emal,direcion,fecha_nacimiento,numero_identificacion,fecha_ingreso_programa,is_team){
        console.log("dato");
    console.log(id,edad, name,telefono, emal,direcion,fecha_nacimiento,numero_identificacion,fecha_ingreso_programa,is_team);
    console.log(this.dataset.accion);
    }
    connectedCallback(){
        Promise.resolve(Tablas.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.form=this.shadowRoot.querySelector("#formTablas ");
            this.form.addEventListener("submit",this.handleEvent.bind(this));
        })
    } 
}
customElements.define(config.name(Tablas.url), Tablas ); 