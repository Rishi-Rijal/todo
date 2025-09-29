import React from "react";

export default function TodoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Container */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Card */}
                <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm">
                    {/* Header: Editable title */}
                    <div className="p-6 border-b border-gray-200">
                        {/* Editable title (pure UI) */}
                        <div
                            contentEditable
                            suppressContentEditableWarning
                            className="text-2xl font-semibold text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white px-2 py-1"
                            title="Click to edit title"
                        >
                            My Project Todos
                        </div>
                    </div>

                    {/* Add task row (visual only) */}
                    <div className="p-6 border-b border-gray-200">
                        <label className="sr-only" htmlFor="new-task">
                            Add a task
                        </label>
                        <div className="flex gap-2">
                            <input
                                id="new-task"
                                type="text"
                                placeholder="Add a new task..."
                                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <button
                                type="button"
                                className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:opacity-90"
                                title="Add task (UI only)"
                            >
                                Add
                            </button>
                        </div>
                    </div>

                    {/* Task list (static preview) */}
                    <div className="p-6">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                            Tasks
                        </p>

                        <ul className="divide-y divide-gray-100">
                            {/* Task item */}
                            <li className="py-3 flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    className="mt-1 w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    disabled
                                />
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">
                                        Design landing page hero section
                                    </p>
                                    <p className="text-xs text-gray-500">Added today</p>
                                </div>
                                <button
                                    type="button"
                                    className="text-xs text-gray-400 hover:text-red-500"
                                    title="Remove (UI only)"
                                >
                                    ✕
                                </button>
                            </li>

                            <li className="py-3 flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    className="mt-1 w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    defaultChecked
                                    disabled
                                />
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900 line-through text-gray-400">
                                        Set up project repository
                                    </p>
                                    <p className="text-xs text-gray-500">Completed yesterday</p>
                                </div>
                                <button
                                    type="button"
                                    className="text-xs text-gray-400 hover:text-red-500"
                                    title="Remove (UI only)"
                                >
                                    ✕
                                </button>
                            </li>

                            <li className="py-3 flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    className="mt-1 w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    disabled
                                />
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">
                                        Write API endpoints list
                                    </p>
                                    <p className="text-xs text-gray-500">Due tomorrow</p>
                                </div>
                                <button
                                    type="button"
                                    className="text-xs text-gray-400 hover:text-red-500"
                                    title="Remove (UI only)"
                                >
                                    ✕
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
