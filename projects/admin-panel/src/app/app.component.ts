import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DisplayType } from './core/types/display.type';
import { DisplayService } from './core/services/display.service';
import { LoaderService } from './core/services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  public display: DisplayType | null = this.displayService.display;
  title = 'admin-panel';
  public loading: boolean = false;
  private loadingChanged: Subscription;

  constructor(
    public titleService: Title,
    private readonly cdRef: ChangeDetectorRef,
    private readonly loaderService: LoaderService,
    private readonly displayService: DisplayService,
  ) {
    this.displayService.onDisplayChanged.subscribe((display: DisplayType) => {
      this.display = display;
    });
  }

  ngOnInit(): void {
    this.getLoadingStatus();
  }

  getLoadingStatus() {
    this.loadingChanged = this.loaderService.onChanged.subscribe(
      (loading: boolean) => {
        this.loading = loading;
        this.cdRef.detectChanges();
      }
    );
  }


  ngOnDestroy() {
    this.loadingChanged.unsubscribe();
  }
}
