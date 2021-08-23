export function Nav() {
  return (
    <nav className="bg-blue-500 text-white relative shadow flex justify-center ">
      <div className="w-full max-w-5xl flex p-4">
        <div>logo</div>
        <div className="flex-1" />
        <div className="flex">
          {["home", "features", "docs", "pricing"].map(
            (item, index, array) => (
              <div
                key={item}
                className={
                  index + 1 === array.length ? "" : "mr-4"
                }
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
