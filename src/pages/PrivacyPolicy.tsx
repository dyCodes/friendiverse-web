import Container from "../components/custom/container";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
	return (
		<>
			<section className="min-h-screen py-8 bg-gray-50">
				<Container>
					<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
						<p className="text-gray-900 mb-6">
							This Privacy Policy explains how Friendiverse ("we", "us", or "our") collects, uses, discloses, and safeguards your information when you
							use our mobile application (the "Service"). By using the Service, you agree to the collection and use of information in accordance with
							this policy.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Information We Collect</h2>
						<p className="text-gray-900 mb-4">
							We may collect personal information you provide directly, such as your name, email address, username, and any content you submit. We
							also collect usage data, device information, and cookies to improve our Service.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. How We Use Your Information</h2>
						<p className="text-gray-900 mb-4">
							We use your information to provide, maintain, and improve the Service, communicate with you, personalize your experience, and ensure the
							safety and security of our users.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Sharing Your Information</h2>
						<p className="text-gray-900 mb-4">
							We do not sell your personal information. We may share information with service providers who help us operate the Service, comply with
							legal obligations, or protect our rights and users.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. Data Security</h2>
						<p className="text-gray-900 mb-4">
							We implement reasonable security measures to protect your information. However, no method of transmission over the Internet or
							electronic storage is 100% secure.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5. Your Rights and Choices</h2>
						<p className="text-gray-900 mb-4">
							You may access, update, or delete your personal information at any time by contacting us. You may also opt out of certain communications
							or request account deletion.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">6. Changes to This Policy</h2>
						<p className="text-gray-900 mb-4">
							We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. Continued
							use of the Service after changes constitutes acceptance of the new policy.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">7. Contact Us</h2>
						<p className="text-gray-900 mb-4">
							If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
							<a href="mailto:support@friendiverse.app" className="text-yellow-400 hover:underline">
								support@friendiverse.app
							</a>
							.
						</p>
					</div>
				</Container>
			</section>
			<Footer />
		</>
	);
};

export default PrivacyPolicy;
