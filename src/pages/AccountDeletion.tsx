import { useState } from "react";
import Container from "../components/custom/container";
import Footer from "../components/Footer";

const AccountDeletion = () => {
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setAlert(false);
		setTimeout(() => {
			setLoading(false);
			setAlert(true);
			e.currentTarget.reset();
		}, 2000);
	};

	return (
		<>
			<section className="min-h-screen py-8 flex items-center justify-center bg-gray-50">
				<Container>
					<img src="/icon.png" alt="Friendiverse" className="w-12 h-12 rounded-sm mx-auto mb-4" />
					<div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
						<h2 className="text-center mb-3 text-2xl font-semibold text-gray-900">Delete Your Account</h2>
						<form id="deleteAccountForm" onSubmit={handleSubmit}>
							<div className="mb-4">
								<label htmlFor="username" className="block text-gray-700 mb-1">
									Username
								</label>
								<input type="text" className="form-input w-full border border-gray-300 rounded px-3 py-2" id="username" name="username" required />
							</div>
							<div className="mb-4">
								<label htmlFor="password" className="block text-gray-700 mb-1">
									Password
								</label>
								<input
									type="password"
									className="form-input w-full border border-gray-300 rounded px-3 py-2"
									id="password"
									name="password"
									required
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition flex items-center justify-center"
								disabled={loading}>
								{loading ? (
									<svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
										<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
										<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
									</svg>
								) : null}
								{loading ? "Processing..." : "Delete Account"}
							</button>
						</form>
						{alert && (
							<div className="mt-4 bg-blue-100 border border-blue-300 text-blue-800 px-4 py-3 rounded" role="alert">
								Account deletion is being processed. Please wait...
							</div>
						)}
					</div>
				</Container>
			</section>
			<Footer />
		</>
	);
};

export default AccountDeletion;
