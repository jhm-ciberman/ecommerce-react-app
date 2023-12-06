import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scrolls to the top of the page on route change.
 *
 * @see https://dev.to/kunalukey/scroll-to-top-when-route-changes-reactjs-react-router-3bgn
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
