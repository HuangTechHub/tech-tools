declare module 'vue' {
  export function ref<T>(value: T): { value: T };
  export function computed<T>(getter: () => T): { value: T };
  export function onMounted(cb: () => void): void;
  export function onUnmounted(cb: () => void): void;
  export function watch<T>(source: T, cb: (val: any) => void): void;
  export function defineComponent(options: any): any;
  export function h(...args: any[]): any;
  export type ComponentOptions = any;
  export type Plugin = any;
}

declare module 'vue-router' {
  export function useRoute(): any;
  export function useRouter(): any;
  export function createRouter(options: any): any;
  export function createWebHistory(base?: string): any;
}

declare module '@vueuse/head' {
  export function useHead(obj: any): any;
  export type HeadObject = any;
}

declare module 'vue-i18n' {
  export function useI18n(): { t: (key: string, ...args: any[]) => string };
  export function createI18n(options: any): any;
}

declare module '@playwright/test' {
  export const expect: any;
  export const test: any;
}

declare module '@vicons/tabler' {
  export const ArrowsShuffle: any;
  export const Unlink: any;
}

declare module '*.vue' {
  import type {  ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}

declare module '*.md' {
  import type {  ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}

declare module 'iarna-toml-esm' {
  export const parse: (toml: string) => any;
  export const stringify: (obj: any) => string;
}

declare module 'emojilib' {
  const lib: Record<string, string[]>;
  export default lib;
}

declare module 'unicode-emoji-json' {
  const emoji: Record<string, {
    name: string;
    slug: string;
    group: string;
    emoji_version: string;
    unicode_version: string;
    skin_tone_support: boolean;
    skin_tone_support_unicode_version: string;
  }>;
  
  export default emoji;
}

declare module 'pdf-signature-reader' {
  const verifySignature: (pdf: ArrayBuffer) => ({signatures: SignatureInfo[]});

  export default verifySignature;
}