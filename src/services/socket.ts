import { Socket, io } from "socket.io-client";

import store from '@/store';
import { Data, User } from "@/types";
import router from "@/router";

class SocketService {
    private socket: Socket;

    constructor() {
        this.socket = io('http://localhost:3000');

        this.socket.on('state', (data: Data) => {
            // if (data.mode === Mode.init) {
            store.commit('setTaggers', data.taggers.map(tagger => tagger.taggerId));
            // }
        });

        this.socket.on('taggerAnnounced', (data: { id: string }) => {
            store.commit('addTagger', data.id);
        });

        this.socket.on('taggerDisconnected', (data: { taggerId: string }) => {
            store.commit('removeTagger', data.taggerId);
        });

        this.socket.on('setupStarted', () => {
            router.push('/setup');
        });

        this.socket.on('userAdded', (user: User) => {
            store.commit('addUser', user);
        });

        this.socket.on('tshirtBound', (data: { username: string, tshirtId: string }) => {
            store.commit('bindTshirt', data);
        });

        this.socket.on('gameStarted', () => {
            router.push('/game');
        });

        this.socket.on('userTagged', (data: { whoDidIt: string, username: string }) => {
            store.commit('tagUser', data);
        });

        this.socket.on('userDied', (data: { username: string }) => {
            store.commit('dieUser', data);
        });

        this.socket.on('gameFinished', () => {
            store.commit('setGameFinished', true);
        });
    }

    public startSetup(): void {
        this.socket.emit('startSetup');
    }

    public addUser(taggerId: string, username: string): void {
        this.socket.emit('addUser', { taggerId, username });
    }

    public startGame(): void {
        this.socket.emit('startGame');
    }

}
export default new SocketService();