export default function PasswordPage() {
    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Change Password</h1>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="current-password" className="block text-sm font-medium mb-2">
                            Current Password
                        </label>
                        <input
                            id="current-password"
                            type="password"
                            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600"
                            placeholder="Enter current password"
                        />
                    </div>

                    <div>
                        <label htmlFor="new-password" className="block text-sm font-medium mb-2">
                            New Password
                        </label>
                        <input
                            id="new-password"
                            type="password"
                            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600"
                            placeholder="Enter new password"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">
                            Confirm New Password
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600"
                            placeholder="Confirm new password"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full mt-6 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors"
                    >
                        Update Password
                    </button>
                </div>
            </div>
        </div>
    );
}
