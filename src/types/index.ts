export interface Tagger {
    taggerId: string;
    socketId: string;
}

export interface User {
    username: string;
    taggerId: string;
    tshirtId: string | null;
    life: number;
}

export enum Mode {
    init,
    setup_mode,
    game_mode
}

export interface Data {
    mode: Mode;
    taggers: Tagger[];
    users: User[];
}