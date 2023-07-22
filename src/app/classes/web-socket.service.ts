import { Injectable } from '@angular/core';
import { Client, Frame, Message } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  // private stompClient: any;
  // private flightSubject: Subject<any> = new Subject<any>();
  // public flightObservable: Observable<any> = this.flightSubject.asObservable();

  // constructor() {
  //   const socket = new SockJS('http://localhost:8080/websocket');
  //   this.stompClient = new Client();

  //   this.stompClient.webSocketFactory = () => {
  //     return socket;
  //   };

  //   this.stompClient.onConnect = (frame: Frame) => {
  //     this.stompClient.subscribe('/topic/flights', (message: Message) => {
  //       const flight = JSON.parse(message.body);
  //       this.flightSubject.next(flight);
  //     });

  //     console.log(this.flightSubject);
  //   };

  //   this.stompClient.activate();
  // }

  // public connect(): Observable<any> {
  //   return new Observable((observer) => {
  //     this.stompClient.onConnect = (frame: Frame) => {
  //       observer.next();
  //     };
  //   });
  // }

  // public loadFlights(): void {
  //   this.stompClient.publish({
  //     destination: '/app/flights',
  //     body: ''
  //   });
  // }

  // public disconnect(): void {
  //   this.stompClient.deactivate();
  // }
}