import { useRouter } from "next/navigation";

const Start = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen gap-3">
      <button className="btn btn-active btn-accent">Sign in</button>
      <button
        onClick={() => router.push("/Signup")}
        className="btn btn-active btn-primary">
        Sign up
      </button>
    </div>
  );
};

export default Start;
