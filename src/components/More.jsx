// src/components/More.jsx
import React from "react";

const moreCategories = [
  {
    name: "TopStop Plus",
    tag: "Membership",
    tagline: "Free delivery, priority support & exclusive member-only offers.",
    image:
      "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Gift Cards",
    tag: "Gifting",
    tagline: "Instant digital gift cards for every occasion.",
    image:
      "https://images.pexels.com/photos/1342778/pexels-photo-1342778.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Top Deals",
    tag: "Offers",
    tagline: "Daily price drops on your favourite essentials.",
    image:
      "https://images.pexels.com/photos/5632372/pexels-photo-5632372.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Business for TopStop",
    tag: "Business",
    tagline: "Bulk buying, GST invoices & team-friendly tools.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Download App",
    tag: "Mobile",
    tagline: "Shop faster with personalised alerts & 1‑tap checkout.",
    image:
      "https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Customer Stories",
    tag: "Stories",
    tagline: "See how shoppers use TopStop to save time.",
    image:
      "https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function More() {
  return (

    // <div className='conatiner mx-auto py-4 pt-20 px-6 md:px-20
    // lg:px-32 my-20 w-full overflow-hidden' id='Shop'></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-full">
            {/* <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              More from TopStop
            </p> */}
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> More    
            <span className='underline underline-offset-4 decoration-1 under font-light'>Explore more ways to shop</span>
            </h1>
            <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
              Discover extra categories and programs designed to make your
              shopping smarter and smoother.
            </p>
          </div>
        </div>

   





        {/* Cards */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreCategories.map((cat) => (
            <article
              key={cat.name}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Banner image */}
              <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-emerald-50/95 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                  {cat.tag}
                </span>
              </div>

              {/* Text content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  {cat.name}
                </h3>
                <p className="mt-2 text-xs text-slate-500">{cat.tagline}</p>

                <button className="mt-3 inline-flex items-center text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                  Explore
                  <svg
                    className="ml-1 h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.22 4.22a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06L10.94 10 7.22 6.28a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
  );
}