import { Producto } from "./productos";


//interfaz es la forma que le damos al objeto, es un tipo de dato
export interface Categoria{
    nombre:string,
    id:number,
    img:string,
    productos:Producto[]
}