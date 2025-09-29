import { useLoaderData } from "react-router";

export default function UserDetail() {
  const user = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden ring-1 ring-slate-900/5">
        {/* Header */}
        <div className="p-8 flex flex-col sm:flex-row gap-6 sm:gap-8">
          {/* Avatar */}
          <div className="flex-none">
            <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-400 text-white flex items-center justify-center text-2xl font-bold shadow-md">
              {user.name
                .split(" ")
                .map((s) => s[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  {user.name}
                </h1>
                <p className="text-slate-500">@{user.username}</p>
              </div>
              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-sm font-medium">
                ID #{user.id}
              </span>
            </div>

            <p className="mt-3 text-slate-600">{user.company.catchPhrase}</p>
          </div>
        </div>

        {/* Details */}
        <div className="px-8 py-6 border-t border-slate-200 grid sm:grid-cols-2 gap-6 text-sm text-slate-700">
          <div>
            <h3 className="text-xs uppercase font-semibold text-slate-500 mb-1">
              Email
            </h3>
            <a
              href={`mailto:${user.email}`}
              className="text-indigo-600 hover:underline"
            >
              {user.email}
            </a>
          </div>
          <div>
            <h3 className="text-xs uppercase font-semibold text-slate-500 mb-1">
              Phone
            </h3>
            <p>{user.phone}</p>
          </div>
          <div>
            <h3 className="text-xs uppercase font-semibold text-slate-500 mb-1">
              Website
            </h3>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              {user.website}
            </a>
          </div>
          <div>
            <h3 className="text-xs uppercase font-semibold text-slate-500 mb-1">
              Company
            </h3>
            <p>{user.company.name}</p>
          </div>
          <div className="sm:col-span-2">
            <h3 className="text-xs uppercase font-semibold text-slate-500 mb-1">
              Address
            </h3>
            <p>
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="text-xs text-slate-500">
            Geo: {user.address.geo.lat}, {user.address.geo.lng}
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${user.address.geo.lat},${user.address.geo.lng}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:underline"
          >
            View on Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
