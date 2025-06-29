import { Users, Heart, MessageCircle } from "lucide-react";
import Container from "./custom/container";

const Hero = () => {
	const PlayStoreLink = "https://play.google.com/store/apps/details?id=com.friendiverse&pcampaignid=web_share";
	const AppStoreLink = "https://apps.apple.com/us/app/friendiverse/id6746367932";

	return (
		<section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
			{/* Background decorative elements with reduced opacity for better contrast */}
			<div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
			<div className="absolute top-40 right-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
			<div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>

			<Container>
				<div className="relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Text Content */}
						<div className="text-center lg:text-left">
							<div className="mb-8 animate-fade-in">
								<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
									Connecting the World with{" "}
									<span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Friendiverse</span>
								</h1>
								<p className="text-base md:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
									Friendiverse connects people worldwide, helping travelers adapt, share cultural experiences, and find local insights and friends.
								</p>
							</div>

							{/* Feature highlights */}
							<div className="flex flex-wrap text-sm justify-center lg:justify-start gap-2 mb-12 animate-fade-in">
								<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-3 text-white">
									<Users className="w-4 h-4 text-primary" />
									<span>Global Connections</span>
								</div>
								<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-3 text-white">
									<MessageCircle className="w-4 h-4 text-primary" />
									<span>Share Moments</span>
								</div>
								<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-3 text-white">
									<Heart className="w-4 h-4 text-primary" />
									<span>Explore Culture</span>
								</div>
							</div>

							{/* Download buttons */}
							<div className="flex flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in">
								<a href={AppStoreLink} className="transition-all duration-300 hover:scale-105" target="_blank" rel="noopener noreferrer">
									<img src="/uploads/2f9fbb7a-b9d2-4b54-ade8-3d754f04e87d.png" alt="Download on the App Store" className="h-14 w-auto" />
								</a>
								<a href={PlayStoreLink} className="transition-all duration-300 hover:scale-105" target="_blank" rel="noopener noreferrer">
									<img src="/uploads/b63f8935-a055-4d99-a898-a4de453ff09c.png" alt="Get it on Google Play" className="h-14 w-auto" />
								</a>
							</div>
						</div>

						{/* App Preview */}
						<div className="relative mx-auto max-w-xs lg:max-w-sm animate-fade-in">
							<img
								src="/uploads/6dda6f8d-f53f-407d-b91f-25bfb8e46d9b.png"
								alt="Friendiverse App Preview"
								className="w-full h-auto rounded-[2rem] object-cover"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
