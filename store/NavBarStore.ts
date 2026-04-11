import { create } from "zustand";

export interface NavStore{
    navigation: Map<string,boolean>;
    setNav: (key:string)=>void;
    isActive: (key:string)=>boolean;
}


const defaultState = new Map<string,boolean>([
    ['Home',true],
    ['About',false],
    ['Work',false],
])

export const useNav = create<NavStore>((set,get)=>({
    navigation :new Map(defaultState),
    
    setNav: (key:string)=>{
        const updated = new Map(get().navigation);
        updated.forEach((_,k)=> updated.set(k,k===key));
        set({navigation:updated});
    },
    isActive:(key:string)=>{
       return  get().navigation.get(key) ?? false;
    }
  
}))