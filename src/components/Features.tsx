import { Users, MessageCircle, Camera, Shield, Globe, Zap } from "lucide-react";
import Container from "./custom/container";

const Features = () => {
	const features = [
		{
			icon: Users,
			title: "Global Connections",
			description: "Foster meaningful connections with people and guides from around the world, bridging cultures and building friendships.",
			color: "from-primary to-yellow-400",
		},
		{
			icon: MessageCircle,
			title: "Personalized Recommendations",
			description: "Receive curated local tips and authentic insights tailored to your interests and destinations.",
			color: "from-gray-800 to-black",
		},
		{
			icon: Globe,
			title: "Supportive Community",
			description: "Join a vibrant, supportive community of travelers, expats, and locals ready to help you adapt and thrive.",
			color: "from-primary to-yellow-400",
		},
		{
			icon: Camera,
			title: "Share Experiences",
			description: "Document and share your cultural journeys, stories, and discoveries with a global audience.",
			color: "from-gray-800 to-black",
		},
		{
			icon: Zap,
			title: "Seamless Onboarding",
			description: "Get started quickly with an intuitive onboarding process that connects you to relevant communities and experiences from day one.",
			color: "from-primary to-yellow-400",
		},
		{
			icon: Zap,
			title: "Seamless Communication",
			description: "Enjoy fast, reliable messaging and collaboration tools for effortless interaction between locals and travelers.",
			color: "from-gray-800 to-black",
		},
	];

	return (
		<section className="py-20 relative bg-black">
			<Container>
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Why Choose <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Friendiverse?</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						A platform designed to help travelers adapt quickly, connect globally, and experience authentic local culture through a supportive
						community.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in border border-gray-200"
							style={{ animationDelay: `${index * 0.1}s` }}>
							<div
								className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
								<feature.icon className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
							<p className="text-gray-600 leading-relaxed">{feature.description}</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Features;
