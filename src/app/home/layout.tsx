import Header from "@/components/Header";
import Aside from "@/components/Home/Aside";



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-[250px_2fr] 2xl:grid-cols-[300px_2fr] gap-5 py-8 px-5">
        <Aside />
        <main className="ml-10 -mt-1">
          {children}
        </main>
      </div>
    </div>
  )
}
