import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<nav className="bg-gray-800 text-white p-4">
				<ul className="flex space-x-4">
					<li>
						<a href="#" className="hover:underline">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="hover:underline">
							About
						</a>
					</li>
					<li>
						<a href="#" className="hover:underline">
							Services
						</a>
					</li>
					<li>
						<a href="#" className="hover:underline">
							Contact
						</a>
					</li>
				</ul>
			</nav>
			{children}
		</div>
	);
};

export default Layout;
