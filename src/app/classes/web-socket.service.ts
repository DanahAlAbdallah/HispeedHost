import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket!: Socket;

  constructor() { }

  public connect(): Observable<any> {
    this.socket = io('http://localhost:8080/websocket');

    return new Observable((observer) => {
      this.socket.on('connect', () => {
        observer.next();
      });
    });
  }

  public subscribeToFlights(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('/topic/flights', (message) => {
        observer.next(message);
      });
    });
  }

  public loadFlights(): void {
    this.socket.emit('/app/flights', '');
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
