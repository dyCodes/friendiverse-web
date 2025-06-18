import Container from "../components/custom/container";
import Footer from "../components/Footer";

const TermsOfUse = () => {
	return (
		<>
			<section className="min-h-screen py-8">
				<Container>
					<div className="">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms and Conditions of Use</h1>
						<p className="text-gray-900 mb-6">
							Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Friendiverse mobile application (the
							"Service") operated by Friendiverse ("us", "we", or "our"). By accessing or using the Service, you agree to be bound by these Terms. If
							you disagree with any part of the terms, you may not access the Service.{" "}
							<b>All users must agree to these terms before using the app.</b>
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Eligibility</h2>
						<p className="text-gray-900 mb-4">
							You must be at least 13 years old to use this Service. By using the Service, you represent and warrant that you meet this requirement.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. User Accounts</h2>
						<p className="text-gray-900 mb-4">
							When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding
							the password that you use to access the Service and for any activities or actions under your password.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. User-Generated Content</h2>
						<p className="text-gray-900 mb-4">
							You are responsible for the content you post, upload, or otherwise make available on or through the Service. You agree not to post
							content that is unlawful, offensive, abusive, defamatory, obscene, or otherwise objectionable. We reserve the right to remove any
							content that violates these Terms or is deemed inappropriate at our sole discretion.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. No Tolerance for Objectionable Content or Abusive Users</h2>
						<p className="text-gray-900 mb-4">
							Friendiverse has a strict no-tolerance policy for objectionable content and abusive users. Any user found to be posting objectionable
							content or engaging in abusive behavior may have their content removed and/or their account terminated without notice. Objectionable
							content includes, but is not limited to, hate speech, harassment, threats, explicit material, and any content that violates the rights
							or safety of others.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5. Content Filtering and Moderation</h2>
						<p className="text-gray-900 mb-4">
							We use automated and manual moderation tools to filter and prevent objectionable material from being posted to the app. Our team reviews
							flagged content and takes appropriate action to maintain a safe environment for all users.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">6. Reporting and Blocking</h2>
						<p className="text-gray-900 mb-4">
							Users can report offensive content or abusive behavior using the "Report" feature available on all user-generated content. We review all
							reports promptly and take appropriate action, including removing content or banning users. Users can also block other users to prevent
							unwanted interactions.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">7. Published Contact Information</h2>
						<p className="text-gray-900 mb-4">
							If you have any questions or concerns, you can contact us at{" "}
							<a href="mailto:support@friendiverse.app" className="text-yellow-400 hover:underline">
								support@friendiverse.app
							</a>
							. Our support team responds to all inquiries in a timely manner.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">8. Intellectual Property</h2>
						<p className="text-gray-900 mb-4">
							The Service and its original content, features, and functionality are and will remain the exclusive property of Friendiverse and its
							licensors. You may not use, copy, or distribute any content from the Service without our express written permission.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">9. Termination</h2>
						<p className="text-gray-900 mb-4">
							We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, for any reason
							whatsoever, including without limitation if you breach the Terms.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">10. Limitation of Liability</h2>
						<p className="text-gray-900 mb-4">
							In no event shall Friendiverse, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect,
							incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
							intangible losses, resulting from (i) your use or inability to use the Service; (ii) any unauthorized access to or use of our servers
							and/or any personal information stored therein; (iii) any interruption or cessation of transmission to or from the Service.
						</p>
						<h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">11. Changes to Terms</h2>
						<p className="text-gray-900 mb-4">
							We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to
							provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole
							discretion.
						</p>
					</div>
				</Container>
			</section>
			<Footer />
		</>
	);
};

export default TermsOfUse;
