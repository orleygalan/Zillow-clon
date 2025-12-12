export default function ListSell() {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-b-xl shadow-md w-full max-w-4xl">
      {/* COLUMNA 1 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-3">Resources</h6>

        <ul className="space-y-2 text-gray-700">
          <li>
            <p>Explore your options</p>
          </li>
          <li>
            <p>See your home's Zestimate</p>
          </li>
          <li>
            <p>Houston home values</p>
          </li>
          <li>
            <p>Sellers guide</p>
          </li>
        </ul>
      </div>

      {/* LÍNEA VERTICAL */}
      <div className="hidden md:block w-px bg-gray-300"></div>

      {/* COLUMNA 2 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-3">Selling options</h6>

        <ul className="space-y-2 text-gray-700">
          <li>
            <p>Find a seller's agent</p>
          </li>
          <li>
            <p>Post For Sale by Owner</p>
          </li>
          <li>
            <p>Houston home values</p>
          </li>
          <li>
            <p>Sellers guide</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
