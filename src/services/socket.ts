import { Socket, io } from "socket.io-client";
import store from '@/store';

class SocketService {
    private socket: Socket;

    constructor() {
        this.socket = io('http://localhost:3000');
        this.socket.on('gameStarted', guns => {
            store.commit('setGuns', guns);
        });
    }

    public startGame(): void {
        this.socket.emit('startGame');
    }

    public announceGun(id: string): void {
        this.socket.emit('announceGun', { id });
    }
}
export default new SocketService();