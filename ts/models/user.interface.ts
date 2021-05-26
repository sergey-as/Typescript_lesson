import {ICar} from "./car.interface";
import {EGenders} from "../constants/genders.enum";

export interface IUser {
    age: number,
    name: string,
    // gender: string,
    gender: EGenders,
    wife?: boolean,
    goWork?: Function,
    // cars?: Array<Object>

    cars?: Array<ICar>
    // cars?: [ICar]
    // cars?: ICar[]
}
