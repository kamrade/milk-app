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
  
  { type: 'heading', label: 'TextInput' },
  { type: 'link', label: 'TextInput primitive', link: '/showcase/text-input-primitive' },
  { type: 'link', label: 'TextInput Primitive Actions', link: '/showcase/text-input-primitive-actions' },
  { type: 'link', label: 'TextInput with label', link: '/showcase/text-input-with-label' },
  { type: 'link', label: 'TextInput autofocus', link: '/showcase/text-input-autofocus' },
  { type: 'link', label: 'TextInput Milk', link: '/showcase/text-input-milk' },
  { type: 'link', label: 'TextInput Milk Autofocus', link: '/showcase/text-input-milk-autofocus' },
]
