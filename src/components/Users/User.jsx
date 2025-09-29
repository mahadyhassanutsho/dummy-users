import { Link } from "react-router";

export default function User({ user }) {
  return (
    <div className="block max-w-md w-full mx-auto bg-gradient-to-br from-white/60 to-slate-50/60 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-slate-900/5 overflow-hidden">
      <div className="p-6 flex gap-4">
        {/* avatar */}
        <div className="flex-none">
          <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 text-white flex items-center justify-center text-xl font-semibold shadow-md">
            {user.name
              .split(" ")
              .map((s) => s[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </div>
        </div>

        {/* main content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 truncate">
                {user.name}
              </h3>
              <p className="text-sm text-slate-500">@{user.username}</p>
            </div>

            <Link to={`/users/${user.id}`} className="text-sm text-right">
              <span className="inline-block px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-300 text-slate-700 text-xs font-medium transition-colors">
                ID #{user.id}
              </span>
            </Link>
          </div>

          <p className="mt-3 text-sm text-slate-600">
            {user.company.catchPhrase}
          </p>

          <dl className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7-5 7 5M5 19h14a2 2 0 002-2V8M5 19V8"
                />
              </svg>
              <Link className="truncate" to={`mailto:${user.email}`}>
                {user.email}
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h6l2 5 7 2-4 4-1 3H3z"
                />
              </svg>
              <span className="truncate">{user.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l4 4-4 4-4-4 4-4zM6 10v6a2 2 0 002 2h8a2 2 0 002-2v-6"
                />
              </svg>
              <Link
                className="truncate"
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </Link>
            </div>

            <div className="flex items-start gap-2">
              <svg
                className="w-4 h-4 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5V8a2 2 0 00-2-2h-5M3 20h14M7 4v4M7 12v4"
                />
              </svg>
              <div className="text-slate-600">
                <div className="truncate">
                  {user.address.street}, {user.address.suite}
                </div>
                <div className="text-xs text-slate-500">
                  {user.address.city} • {user.address.zipcode}
                </div>
              </div>
            </div>
          </dl>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${user.address.geo.lat},${user.address.geo.lng}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 text-white text-xs font-medium hover:brightness-90 transition"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                  />
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-4 7-10a7 7 0 10-14 0c0 6 7 10 7 10z"
                  />
                </svg>
                View on map
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-between gap-4 px-6 py-3 bg-slate-50/60 border-t border-slate-100">
        <div className="text-xs text-slate-500">
          Geo: {user.address.geo.lat}, {user.address.geo.lng}
        </div>
        <div className="text-xs text-slate-500">
          Joined company: {user.company.name}
        </div>
      </footer>
    </div>
  );
}
