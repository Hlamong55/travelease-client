import {
  FaCar,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const stats = [
  {
    title: "Total Vehicles",
    value: 14,
    icon: <FaCar />,
  },
  {
    title: "My Bookings",
    value: 12,
    icon: <FaClipboardList />,
  },
  {
    title: "Completed Trips",
    value: 9,
    icon: <FaCheckCircle />,
  },
  {
    title: "Pending Requests",
    value: 3,
    icon: <FaClock />,
  },
];

const chartData = [
  { name: "Jan", bookings: 2 },
  { name: "Feb", bookings: 4 },
  { name: "Mar", bookings: 6 },
  { name: "Apr", bookings: 3 },
  { name: "May", bookings: 8 },
];

// const recentBookings = [
//   {
//     id: 1,
//     vehicle: "Toyota Premio",
//     date: "2025-01-10",
//     status: "Completed",
//   },
//   {
//     id: 2,
//     vehicle: "Audi E-tron",
//     date: "2025-01-14",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     vehicle: "Ford Transit",
//     date: "2025-01-18",
//     status: "Completed",
//   },
// ];

const DashboardHome = () => {
  return (
    <div className="space-y-10 px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-1 ">Dashboard Overview</h2>
        <p className="text-gray-700 ">
          Welcome back! Here’s a summary of your activity.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border p-6 flex items-center gap-4 hover:shadow-md transition"
          >
            <div className="text-2xl p-4 rounded-lg bg-primary text-white">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

   
      <div className="bg-white p-6 rounded-xl border">
        <h3 className="font-semibold mb-4">Monthly Bookings</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#7c3aed" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Bookings Table */}
      {/* <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b font-semibold">
          Recent Bookings
        </div>

        <table className="w-full text-sm">
          <thead className="bg-base-200">
            <tr>
              <th className="text-left px-4 py-3">Vehicle</th>
              <th className="text-left px-4 py-3">Date</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="px-4 py-3">{b.vehicle}</td>
                <td className="px-4 py-3">{b.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      b.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default DashboardHome;
