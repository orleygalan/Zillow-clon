export default function ListFinder() {
  return (
    <div className="w-full max-w-4xl bg-white p-8 rounded-b-2xl shadow-xl flex flex-col md:flex-row gap-12">

      {/* COLUMNA 1 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-4">Houston homes for sale</h6>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ul className="space-y-2 text-gray-700">
            <li>Home improvement pros</li>
            <li>Home builders</li>
            <li>Real estate photographers</li>
          </ul>
        </div>
      </div>

      {/* LÍNEA DIVISORA */}
      <div className="hidden md:block w-px bg-gray-300" />

      {/* COLUMNA 2 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-4">Houston homes for sale</h6>

        <ul className="space-y-2 text-gray-700">
          <li>Real estate business plan</li>
          <li>Real estate agent scripts</li>
          <li>Listing flyer templates</li>
        </ul>
      </div>

    </div>
  );
}
