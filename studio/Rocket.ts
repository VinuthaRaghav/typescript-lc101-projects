import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";


export class Rocket {
    name: string;
    totalCapacityKg :number;
    cargoItems:Cargo[] =[];
    astronauts:Astronaut[] =[];
    

c
    constructor(name:string,totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items:Payload[]):number{
        let totalMassKg:number;
        totalMassKg = 0
       for(let i=0;i<items.length;i++)
            totalMassKg +=  items[i].massKg;
        //}
        return totalMassKg;
    }

    currentMassKg():number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
    }

    canAdd(item:Payload):boolean{
        let totalCapacity = this.currentMassKg() + item.massKg
        return totalCapacity <= this.totalCapacityKg ? true:false
    }

    addCargo(cargo:Cargo):boolean{
         if (this.canAdd(cargo)){
             this.cargoItems.push(cargo);
             return true; 
         }
         else{
             return false;
         }
    }

    addAstronaut(astronaut:Astronaut):boolean{
        //console.log(astronaut.massKg)
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true; 
        }
        else{
            return false;
        }

        
   }


   
}