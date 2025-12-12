export default function ListRent() {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-b-xl shadow-md w-full max-w-5xl">
      
      {/* COLUMNA 1 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-3">Houston rentals</h6>

        <ul className="space-y-2 text-gray-700">
          <li><p>Rental buildings</p></li>
          <li><p>Apartments for rent</p></li>
          <li><p>Houses for rent</p></li>
          <li><p>All rental listings</p></li>
          <li><p>All rental buildings</p></li>
        </ul>
      </div>

      {/* LÍNEA VERTICAL */}
      <div className="hidden md:block w-px bg-gray-300"></div>

      {/* COLUMNA 2 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-3">Renter hub</h6>

        <ul className="space-y-2 text-gray-700">
          <li><p>Contacted rentals</p></li>
          <li><p>Your rental</p></li>
          <li><p>Messages</p></li>
        </ul>
      </div>

      {/* LÍNEA VERTICAL */}
      <div className="hidden md:block w-px bg-gray-300"></div>

      {/* COLUMNA 3 */}
      <div className="flex-1">
        <h6 className="text-lg font-semibold mb-3">Resources</h6>

        <ul className="space-y-2 text-gray-700">
          <li><p>Affordability calculator</p></li>
          <li><p>Rent Guide</p></li>
        </ul>
      </div>

    </div>
  );
}
