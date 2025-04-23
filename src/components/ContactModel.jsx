import { useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
    const [contact, setContact] = useState("");

    const handleSubmit = () => {
        console.log("Contact submitted:", contact);
        alert("Thanks! I'll get back to you soon.");
        setContact("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">Leave your contact</h2>
                <input
                    type="text"
                    placeholder="Your email or phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
