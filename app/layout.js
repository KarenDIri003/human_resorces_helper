import { Header } from './components/header/header'
import './globals.css'
import { Montserrat } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

const montserratFont = Montserrat({
	weight: ["400", "700"],
	styles: ['normal'],
	subsets: ['latin-ext'],
})


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserratFont.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
