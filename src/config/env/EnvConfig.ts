import ProdConfig from "./ProdConfig.ts";
import DevConfig from "./DevConfig.ts";

export default function getEnvConfig() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return DevConfig;
  } else {
    return ProdConfig;
  }
}