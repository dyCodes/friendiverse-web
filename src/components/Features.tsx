import { Users, MessageCircle, Camera, Shield, Globe, Zap } from "lucide-react";
import Container from "./custom/container";

const Features = () => {
	const features = [
		{
			icon: Users,
			title: "Connect Instantly",
			description: "Find and connect with friends from around the world with our advanced matching system.",
			color: "from-primary to-yellow-400",
		},
		{
			icon: MessageCircle,
			title: "Real-time Chat",
			description: "Stay connected with lightning-fast messaging and group conversations.",
			color: "from-gray-800 to-black",
		},
		{
			icon: Camera,
			title: "Share Moments",
			description: "Capture and share your favorite moments with stunning photo and video features.",
			color: "from-primary to-yellow-400",
		},
		{
			icon: Shield,
			title: "Privacy First",
			description: "Your data is protected with end-to-end encryption and advanced privacy controls.",
			color: "from-gray-800 to-black",
		},
		{
			icon: Globe,
			title: "Global Community",
			description: "Join a diverse community of users from every corner of the globe.",
			color: "from-primary to-yellow-400",
		},
		{
			icon: Zap,
			title: "Lightning Fast",
			description: "Experience blazing-fast performance with our optimized mobile app.",
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
						Discover the features that make Friendiverse the ultimate social platform for meaningful connections.
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
