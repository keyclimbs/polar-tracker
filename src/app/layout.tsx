import type { Metadata } from "next";
import "./globals.css";
import { Shell } from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Polar Tracker",
  description: "Personal wearable analytics dashboard",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body><Shell>{children}</Shell></body>
    </html>
  );
}
