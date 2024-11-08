export interface INavbarMenus {
  id: number;
  name: string;
  icon?: string;
  route?: string;
  children?: INavbarMenus[];
}
