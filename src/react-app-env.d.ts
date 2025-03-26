/// <reference types="react-scripts"/>
declare namespace NodeJS {
    interface ProcessEnv {
        readonly REACT_APP_API_URL: string;
        readonly REACT_APP_TITLE: string;
        readonly REACT_APP_UPLOAD_PRESET: string;
        readonly REACT_APP_CLOUD_NAME: string;
    }
}
