"use client";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-bold">CHOLO-BANGLA</span>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CHOLO-BANGLA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
