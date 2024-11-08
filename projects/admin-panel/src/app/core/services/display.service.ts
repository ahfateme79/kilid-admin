import { Injectable, NgZone } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DisplayType } from '../types/display.type';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  private mobile: number = 320; // MOBILE display
  private tablet: number = 768; // TABLET display
  private desktop: number = 1366; // DESKTOP display

  constructor(ngZone: NgZone) {
    this.onResize();
    window.onresize = (e) => {
      ngZone.run(() => {
        this.onResize();
      });
    };
  }

  private widthValue: number = 0;
  get width(): number {
    return this.widthValue;
  }

  private heightValue: number = 0;
  get height(): number {
    return this.heightValue;
  }

  private displayValue: DisplayType | null = null;
  get display(): DisplayType | null {
    return this.displayValue;
  }

  private displayChanged: Subject<DisplayType> = new Subject<DisplayType>();
  get onDisplayChanged(): Observable<DisplayType> {
    return this.displayChanged.asObservable();
  }

  private onResize() {
    this.widthValue = window.innerWidth;
    const last: DisplayType | null = this.display;
    let display: DisplayType | undefined;
    if (this.widthValue <= this.tablet) display = 'MOBILE';
    if (this.tablet <= this.widthValue && this.widthValue <= this.desktop)
      display = 'TABLET';
    if (this.desktop <= this.widthValue) display = 'DESKTOP';
    if (display !== last) {
      this.displayValue = display;
      this.displayChanged.next(display);
    }
  }
}
