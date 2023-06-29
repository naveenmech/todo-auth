import { useRouter } from "next/navigation";

const Start = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen gap-3">
      <button
        onClick={() => router.push("/login")}
        className="btn btn-active btn-accent w-[6rem]">
        Log in
      </button>
      <button
        onClick={() => router.push("/signup")}
        className="btn btn-active btn-primary">
        Sign up
      </button>
    </div>
  );
};

export default Start;
