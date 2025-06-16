import './globals.css';
import Sidebar from './components/Sidebar/Sidebar';

export const metadata = {
  title: 'Fear to Fuel',
  description: '30-Day Fear of Failure Journal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 transition-all duration-300 ml-[250px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
