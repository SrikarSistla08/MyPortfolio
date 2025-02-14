import React from "react";

export default function Photography() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <footer className="text-center text-sm">
                © {new Date().getFullYear()} Srikar Sistla. All rights reserved. Hire me LOL
            </footer>
        </div>
    );
}