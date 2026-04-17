export default function ListManage() {
  return (
    <div className="w-full bg-white px-8 py-3 rounded-b-xl shadow-xl space-y-10">

      {/* BLOQUE 1 */}
      <div>
        <h6 className="text-lg font-semibold mb-4">Rental Management Tools</h6>
        <ul className="space-y-2 text-gray-700">
          <li>My Listings</li>
          <li>Messages</li>
          <li>Applications</li>
          <li>Leases</li>
          <li>Payments</li>
        </ul>
      </div>

      {/* LÍNEA SEPARADORA HORIZONTAL */}
      <div className="w-full h-px bg-gray-300"></div>

      {/* BLOQUE 2 */}
      <div>
        <h6 className="text-lg font-semibold mb-4">Learn More</h6>
        <ul className="space-y-2 text-gray-700">
          <li>Zillow Rental Manager</li>
          <li>Price My Rental</li>
          <li>Resource Center</li>
          <li>Help Center</li>
        </ul>
      </div>

    </div>
  );
}
