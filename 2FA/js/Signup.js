// The code below includes your Project ID (P2lFAe5NEhvZ1CdFyJBl68mV5vVa)
import { AuthProvider } from '@descope/nextjs-sdk';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<AuthProvider projectId="P2lFAe5NEhvZ1CdFyJBl68mV5vVa">
			<html lang="en">
				<body>{children}</body>
			</html>
		</AuthProvider>
	);
}
