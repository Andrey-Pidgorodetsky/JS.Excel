import { capitalize } from "./utils"

export class DomListener {
    constructor($root, listeners=[]){
        if (!$root){
            throw new Error(' No $root provided')
        }
        this.$root = $root
        this.listeners=listeners
    }


    initDOMListener(){
        // console.log(this.listeners , this.$root)
        this.listeners.forEach(listener=>{
            const method= getMethodName(listener)
            if(!this[method]){
                const name= this.name || ''
                throw new Error(`Нет метода ${method} в  ${this.name} копоненте`)
            }
            this[method]= this[method].bind(this)
        // Тоже что и addEventListener
          this.$root.on(listener,this[method])
        })
    }

    removeDOMListener(){
        
        this.listeners.forEach(listener=>{
            const method= getMethodName(listener)
            console.log('removeDOM', method)
            this.$root.off(listener, this[method])
        })

    }
 }


 function getMethodName (eventName) {
     return 'on'+capitalize(eventName)
 }