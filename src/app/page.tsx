import { Suspense } from "react";
import FormModal from "@/components/Authentication/FormModal";
import ArtGalleria from "@/components/Authentication/ArtGalleria";

export default function Home() {
  return (

    <div className="grid grid-cols-[1.5fr_1fr] h-full w-full">
      <ArtGalleria />
      <Suspense fallback={<p>Loading</p>}>
        <FormModal />
      </Suspense>
    </div>
  );
}

