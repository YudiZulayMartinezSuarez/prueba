import config  from "../config/wsReclutas";

export default class registroReclutas extends HTMLElement{
    static url = import.meta.url
    
    static async componentes(){
        return await (await fetch(config.uri(registroReclutas))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        
    }

    handleEvent(e){
        e.preventDefault();
        (e.type==="submit") ? this.wsReclutas(e) : undefined;
    }
    wsReclutas(e){
        let ws = new Worker("../config/wsReclutas.js", {type:"module"});
        let data = Object.fromEntries(new FormData(e.target));
        switch (e.submitter.dataset.valor){
            case "get":
                ws.postMessage({type:"getReclutasAll"});
                break;
            case "post":
                ws.postMessage({type:"postReclutas", arg:data});
                break;
            case "delete":
                ws.postMessage({type:"deleteReclutas", arg:data});
                break;
            case "put":
                ws.postMessage({type:"putReclutas", arg:data});
                break;
            case "search":
                ws.postMessage({type:"getReclutasId", arg:data});
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
    console.log(id,edad, name,telefono,emal, direcion,fecha_nacimiento,numero_identificacion,fecha_ingreso_programa,is_team);
    console.log(this.dataset.accion);
    }
    connectedCallback(){
        Promise.resolve(Reclutas.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.form=this.shadowRoot.querySelector("#fromReclutas");
            this.form.addEventListener("submit",this.handleEvent.bind(this));
        })

    }


}

customElements.define(config.name(Reclutas.url), Reclutas);

