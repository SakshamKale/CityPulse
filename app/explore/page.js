import ExplorePage from "@/components/ExplorePage";

export const metadata = {
  title: "Explore Pune",
  description: "Search and filter sample places in Pune by category, budget and rating.",
};

// Server component: it only sets the page title and renders the interactive client component.
export default function Page() {
  return <ExplorePage />;
}
