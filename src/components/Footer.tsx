import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import Container from "./custom/container";

const Footer = () => {
	return (
		<footer className="py-8 px-4 border-t border-gray-900 bg-black">
			<Container>
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					{/* Social Media */}
					<div className="flex space-x-3">
						<a
							href="#"
							className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-colors">
							<Facebook className="w-4 h-4" />
						</a>
						<a
							href="#"
							className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-colors">
							<Twitter className="w-4 h-4" />
						</a>
						<a
							href="#"
							className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-colors">
							<Instagram className="w-4 h-4" />
						</a>
						<a
							href="#"
							className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-colors">
							<Github className="w-4 h-4" />
						</a>
					</div>

					{/* Links */}
					<div className="flex flex-wrap justify-center gap-6 text-sm">
						<a href="#" className="text-gray-200 hover:text-white transition-colors">
							Terms of Use
						</a>
						<a href="#" className="text-gray-200 hover:text-white transition-colors">
							Support
						</a>
					</div>
				</div>
			</Container>

			<div className="border-t border-gray-800 mt-6 pt-6 text-center">
				<p className="text-gray-400 text-sm">© 2025 Friendiverse. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
