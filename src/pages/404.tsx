export default function Custom404() {
  return (
    <>
      <div className="flex h-screen w-screen max-w-full flex-col items-center justify-center overflow-hidden">
        <h1 className="flex w-full items-center justify-center text-9xl font-extrabold ">
          404
        </h1>
        <h2 className="flex items-center  justify-center text-3xl">
          {" "}
          Page Not Found
        </h2>
      </div>
    </>
  );
}
