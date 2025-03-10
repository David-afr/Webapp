declare module '@splidejs/react-splide' {
  import { ComponentType } from 'react';

  export interface SplideProps {
    options?: object;
    [key: string]: unknown;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideProps>;
}