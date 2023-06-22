import{createBrowserRouter} from"react-router-dom";
import { MainScreen } from "../Screens/MainScreen";

export const MainRoot = createBrowserRouter([
    {
    path:"/",
    element:<MainScreen/>,
    },
]);