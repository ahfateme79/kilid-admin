import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const shouldShowLoader =
      !req.url.includes('/address') &&
      !req.body?.coupon_code &&
      !req.url.includes('/notifications');

    if (shouldShowLoader) {
      this.loaderService.setLoading('http', true);
    }

    return next.handle(req).pipe(
      finalize(() => {
        if (shouldShowLoader) {
          this.loaderService.setLoading('http', false);
        }
      })
    );
  }
}
