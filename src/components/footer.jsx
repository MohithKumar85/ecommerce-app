import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand / description */}
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-900">
              TopStop
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Your one-stop shop for everyday essentials—fast delivery, secure
              payments, easy returns.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                className="rounded-lg p-2 text-slate-600 hover:bg-white hover:text-slate-900"
                aria-label="TopStop on Twitter/X"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.6L6 22H2.9l7.3-8.4L1 2h6.3l4.4 6L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-lg p-2 text-slate-600 hover:bg-white hover:text-slate-900"
                aria-label="TopStop on Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4z" />
                  <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  <path d="M17.6 6.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-lg p-2 text-slate-600 hover:bg-white hover:text-slate-900"
                aria-label="TopStop on Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.5V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.4v3H10v8h3.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">About</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Help</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Returns &amp; Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Policy</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* More – SAME STYLE as others */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">More</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  TopStop Plus Membership
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Top Deals
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Business for TopStop
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-slate-900">
                  Download App
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} TopStop. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Help Center
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Track Order
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}