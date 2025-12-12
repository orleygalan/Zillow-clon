export default function ListBuy() {
  return (
    <div className="flex flex-col md:flex-row gap-20 bg-white p-6 shadow-xl rounded-b-xl w-full max-w-4xl">
      
      {/* COLUMNA 1 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-3">Houston homes for sale</h6>

        <div className="grid grid-cols-2 gap-20 mr-5">
          <ul className="space-y-2 text-gray-700">
            <li><p>Homes for sale</p></li>
            <li><p>Foreclosure</p></li>
            <li><p>For sale by owner</p></li>
            <li><p>Open houses</p></li>
          </ul>

          <ul className="space-y-2 text-gray-700">
            <li><p>New construction</p></li>
            <li><p>Coming soon</p></li>
            <li><p>Recent home sales</p></li>
            <li><p>All home</p></li>
          </ul>
        </div>
      </div>

      {/* LÍNEA VERTICAL */}
      <div className="hidden md:block w-px bg-gray-300"></div>

      {/* COLUMNA 2 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-3">Houston homes for sale</h6>

        <ul className="space-y-2 text-gray-700">
          <li><p>Homes Buying Guide</p></li>
          <li><p>Foreclosure center</p></li>
          <li><p>Real estate app</p></li>
          <li><p>Down payment assistance</p></li>
          <li><p>Find a buyer’s agent</p></li>
        </ul>
      </div>
    </div>
  );
}
