import Container from "../components/custom/container";
import Footer from "../components/Footer";

const Support = () => {
	return (
		<>
			<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20">
				<Container>
					<div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-xl mx-auto text-center shadow-lg">
						<h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Support</h1>
						<p className="text-gray-200 mb-6">
							Need help or have questions about Friendiverse? We're here to assist you! Please check our FAQ or reach out to our support team.
						</p>
						<div className="mb-4">
							<span className="block text-gray-300">Email:</span>
							<a href="mailto:support@friendiverse.app" className="text-yellow-400 hover:underline">
								support@friendiverse.app
							</a>
						</div>
						<p className="text-gray-400 text-sm">
							We aim to respond to all inquiries within 24-48 hours. Thank you for being part of the Friendiverse community!
						</p>
					</div>
				</Container>
			</section>
			<Footer />
		</>
	);
};

export default Support;
