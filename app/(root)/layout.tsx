import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName:"Hasibul", lastName:"Hasan"}

  return (
    <main className="flex h-screen w-full font-inter">
       <Sidebar user={loggedIn} />
       <div className="flex size-full flex-col">
        <div className="root-layout">

        </div>
       </div>
      {children}
    </main>
  );
}
