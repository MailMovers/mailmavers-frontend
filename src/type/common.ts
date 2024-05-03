export type TResMsg = {
  message: string;
  success: string;
};

export type TResonse = {
  message: string;
};

export interface AxiosResponseData {
  success: boolean;
  message: string;
}

export interface PageProps {
  title?: string;
  ogImage?: string;
  ogDescription?: string;
  keywords?: string;
  ogImageAlt?: string;
}
