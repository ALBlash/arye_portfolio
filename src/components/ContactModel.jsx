import { useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
    const [allValues, setAllValues] = useState({
        username: '',
        contactInfo: '',
        otherInfo: ''
    });

    const changeHandler = (e) => {
        setAllValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async () => {
        const response = await fetch("https://formspree.io/f/myzwypde", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: allValues.username,
                contact: allValues.contactInfo,
                message: allValues.otherInfo,
            }),
        });

        if (response.ok) {
            alert("Thanks! I'll get back to you soon.");
            setAllValues({ username: '', contactInfo: '', otherInfo: '' });
            onClose();
        } else {
            alert("Something went wrong. Please try again.");
        }
    };


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white hover:cursor-pointer rounded-lg shadow-lg p-6 w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">Leave your contact</h2>
                <input
                    type="text"
                    placeholder="Your full name"
                    name="username"
                    className="text-indigo-950 w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={allValues.username}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    placeholder="Your email or phone"
                    name="contactInfo"
                    className=" text-indigo-950 w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={allValues.contactInfo}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    placeholder="Anything you would like to add?"
                    name="otherInfo"
                    className=" text-indigo-950 w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={allValues.otherInfo}
                    onChange={changeHandler}
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
