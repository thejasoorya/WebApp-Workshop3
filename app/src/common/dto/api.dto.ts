export class responseObject {
    status: string;
    message: string;
}

export class deleteUser {
    id: number;
}

export class getUser {
    status: string;
    message: string;
    data?: object;
}