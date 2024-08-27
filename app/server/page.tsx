import ActivarServer from "@/lib/server";

export default function ServerPage() {

  ActivarServer()

  return (
    <div className="h-full w-full flex align-middle items-center justify-center bg-blue-200">
      <h1>SERVER</h1>
    </div>
  );
}
