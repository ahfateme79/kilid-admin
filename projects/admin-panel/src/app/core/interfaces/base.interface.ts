export interface IBase {
  id: number;
  isSelect: boolean;
}

export interface IScheduleOption extends IBase {
  name: string;
  descriptions: string;
}

export interface ITimeSuffix extends IBase {
  value: string;
}

export interface ITip extends IBase {
  value: string;
  price?: string;
  priceValue?: number;
  percent: number;
}

export interface IIcon extends IBase {
  name?: string;
  value: string;
  icons?: any;
  color?: string;
}

export interface ISnackbarConfig {
  svgPath: string;
  heading: string;
}

export interface INavigationItem {
  id: number;
  name: string;
  icons: any;
  route?: string;
}
