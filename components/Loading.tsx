import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-end">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt={"loading"} fill src={"/logo.png"} />
      </div>
      <p className="text-sm text-muted-foreground">'AIshwara Ganesha' is thinking...</p>
    </div>
  );
};
