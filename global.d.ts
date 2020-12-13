import './vuex-shim'

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace JSX {
    interface IntrinsicElements {
        // 'import': React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>
        [key: string]: any
    }
}

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
    [key: string]: any;
  }
}

declare const wx: any;

interface SimpleObject {
  [key: string]: any;
  [key: number]: any;
}
interface Window {
  [key: number]: any;
  [key: string]: any;
}
