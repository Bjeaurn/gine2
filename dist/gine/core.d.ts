import { Handle } from './handle';
import { Canvas } from './canvas';
import { Config } from './config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/share';
export declare class Gine {
    readonly config: Config;
    readonly canvas: Canvas;
    readonly handle: Handle;
    fps: number;
    private frameCount;
    private delta;
    private tickrate;
    private tickNr;
    private then;
    private second;
    readonly fpsMs: number;
    readonly tickMs: number;
    readonly update$: Observable<string>;
    private updateSubscription;
    readonly clock$: Observable<number>;
    constructor(config: Config);
    start(): void;
    stop(): void;
    fn(type: string): void;
    frame(): void;
    tick(): void;
}
