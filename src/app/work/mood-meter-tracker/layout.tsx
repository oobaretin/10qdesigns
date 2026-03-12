import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mood Meter Tracker | 10Q Designs",
  description: "Wellness / Data Visualization — emotional wellness companion with mood logging and pattern insights.",
};

export default function MoodMeterTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
