import { ConfigProvider } from "antd";
const Provider = ({ config, children }) => <ConfigProvider locale={config.settings.locale.antd}>{children}</ConfigProvider>;
export default Provider;