export default function ListLoans() {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-b-xl shadow-md w-full max-w-5xl">

      {/* COLUMNA 1 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-3">
          Touring homes & making offers
        </h6>

        <ul className="space-y-2 text-gray-700">
          <li><p>Discover Zillow Home Loans</p></li>
          <li><p>See how much you qualify for</p></li>
          <li><p>Estimate your monthly payment</p></li>
        </ul>
      </div>

      {/* SEPARADOR */}
      <div className="hidden md:block w-px bg-gray-300"></div>

      {/* COLUMNA 2 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-3">
          Just getting started
        </h6>

        <ul className="space-y-2 text-gray-700">
          <li><p>Calculate your budget</p></li>
          <li><p>Learn about the mortgage process</p></li>
        </ul>
      </div>


    </div>
  );
}
