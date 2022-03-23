export interface IUser {
    email: string;
    username: string;
    password: string;
    name: Iname;
    address: Iaddress;
    phone:string;
}

export interface Iname{
    firstname: string;
    lastname: string;
}

export interface Iaddress{
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation:Igeolocation;
}

export interface Igeolocation{
    lat: string;
    long: string;
}