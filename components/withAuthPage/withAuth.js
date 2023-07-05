// hoc/withAuth.js
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("users"));
      const userIsAuthenticated = user !== null;
      if (!userIsAuthenticated) {
        router.push("/login");
      }
    }, []);

    return <Component {...props} />;
  };
}
