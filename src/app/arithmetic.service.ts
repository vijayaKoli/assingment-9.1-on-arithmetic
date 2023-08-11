import {Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  add(x: number, y: number): number {
    return x + y;
  }

  sub(x: number, y: number): number {
    return x - y;
  }
}