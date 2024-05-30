import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../providers/theme-provider';

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskTether - Automate Workflows Across Notion, Google Drive, Discord, Slack",
  description: "Discover TaskTether, the leading automation workflow builder that seamlessly connects with Notion, Google Drive, Discord, Slack, and more. Streamline your tasks and boost productivity effortlessly with TaskTether's intuitive platform.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
