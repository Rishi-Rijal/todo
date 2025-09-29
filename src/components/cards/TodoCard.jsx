
export default function TodoCard() {
    return (
        <div>
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-5 flex flex-col justify-between min-h-[220px]">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900">My First Todo</h3>
                    <p className="text-sm text-gray-500 mt-1">Author: John Doe</p>
                </div>

                <div className="pt-4">
                    <button className="text-indigo-600 font-medium hover:underline inline-flex items-center gap-1">
                        Click here
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
