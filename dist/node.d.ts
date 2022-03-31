import init, { OpenCascadeInstance } from "./opencascade.full";
export * from "./opencascade.full";

type OpenCascadeModuleObject = {
  [key: string]: any;
};

export default function initOpenCascade(
  settings?: {
    mainJS?: init;
    mainWasm?: string;
    worker?: string;
    libs?: string[];
    module?: OpenCascadeModuleObject;
  },
): Promise<OpenCascadeInstance>;
