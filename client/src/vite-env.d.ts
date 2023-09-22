/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLIENT_HOST_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
