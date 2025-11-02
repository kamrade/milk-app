export type NavigationType = 'heading' | 'link';

export type INavigationItem = {
  type: NavigationType;
  label: string;
  link?: string;
}

export const navigationData: INavigationItem[] = [
  { type: 'link', label: 'Home', link: '/' },
  { type: 'heading', label: 'Badge' },
  { type: 'link', label: 'Badge', link: '/showcase/badge' },
  { type: 'heading', label: 'Menu Dropdown' },
  { type: 'link', label: 'Menu. Show on click', link: '/showcase/menu-on-click' },
  { type: 'link', label: 'Menu. Show on hover', link: '/showcase/menu-on-hover' },
  { type: 'heading', label: 'Button' },
  { type: 'link', label: 'Button primitive', link: '/showcase/button-primitive' },
  { type: 'link', label: 'Button Milk', link: '/showcase/button-milk' },
]
