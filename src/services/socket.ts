import { Socket, io } from "socket.io-client";
import store, { User } from '@/store';

class SocketService {
    private socket: Socket;

    constructor() {
        this.socket = io('http://localhost:3000');
        this.socket.on('setupStarted', guns => {
            store.commit('setGuns', guns);
        });
        this.socket.on('gameFinished', () => {
            store.commit('setGameFinished', true);
        });
    }

    public startSetup(): void {
        this.socket.emit('startSetup');
    }

    public announceGun(id: string): void {
        this.socket.emit('announceGun', { id });
    }

    public addUser(gunId: string, username: string): void {
        this.socket.emit('addUser', { gunId, username });
        store.commit('addUser', { gunId, username, tshirtId: null, life: 5} as User);
    }

    public announceTshirt(gunId: string, tshirtId: string): void {
        this.socket.emit('announceTshirt', { gunId, tshirtId });
        store.commit('addTshirt', { gunId, tshirtId });
    }

    public tshirtShot(shooterGunId: string, tshirtId: string): void {
        this.socket.emit('tshirtShot', { shooterGunId, tshirtId });
        store.commit('shootPirla', { shooterGunId, tshirtId });
    }

}
export default new SocketService();