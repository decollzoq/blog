import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router";

export default function DefaultLayout() {
    return (
        <>
            <Outlet />
            <ScrollRestoration />
        </>
    );
}
