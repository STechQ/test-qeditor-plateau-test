import { AlertPayload } from '../services/alert.service';
import '../assets/css/components/alert.css';
type AlertItem = AlertPayload & {
    id: number;
};
export declare const Alert: ({ item, onClose }: {
    item: AlertItem;
    onClose: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const AlertsContainer: () => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Alert.d.ts.map