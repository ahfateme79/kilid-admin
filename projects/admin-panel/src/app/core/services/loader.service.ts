import { Injectable } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingValue = {
    http: false,
    route: false,
    initialized: false,
  };

  get loading(): boolean {
    return (
      !this.loadingValue.initialized ||
      this.loadingValue.http ||
      this.loadingValue.route
    );
  }

  private changed: Subject<boolean> = new Subject<boolean>();
  get onChanged(): Observable<boolean> {
    return this.changed.asObservable();
  }

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      let loading: boolean | null = null;
      if (event instanceof NavigationStart) loading = true;

      if (
        event instanceof NavigationError ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        loading = false;
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }

      if (loading !== null) this.setLoading('route', loading);
    });

    setTimeout(() => {
      this.loadingValue.initialized = true;
      this.changed.next(this.loading);
    }, 1000);
  }

  setLoading(type: 'http' | 'route', loading: boolean) {
    switch (type) {
      case 'http':
        this.loadingValue.http = loading;
        break;
      case 'route':
        this.loadingValue.route = loading;
        break;
    }

    this.changed.next(this.loading);
  }
}
