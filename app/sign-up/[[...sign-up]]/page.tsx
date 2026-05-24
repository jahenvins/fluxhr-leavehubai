import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      
      <SignUp
        appearance={{
          elements: {
            card: "bg-zinc-950 border border-white/10 shadow-none",
            formButtonPrimary:
              "bg-teal-500 hover:bg-teal-400 text-black",
            footerActionLink: "text-teal-400",
          },
        }}
      />
    </div>
  );
}