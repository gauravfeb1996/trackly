import Navbar from "@/app/_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 ">
        <Navbar />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
