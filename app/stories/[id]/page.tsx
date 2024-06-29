import Story from "@/components/Story";
import { getAllStories, getStory } from "@/lib/stories";
import { notFound } from "next/navigation";

interface StoryPageProps {
  params: {
    id: string;
  };
}

function StoryPage({ params: { id } }: StoryPageProps) {
  const decodedId = decodeURIComponent(id);

  const story = getStory(decodedId);

  if (!story) return notFound();

  return <Story story={story} />;
}

export default StoryPage;

export async function generateStaticParams() {
  const stories = getAllStories();

  // Explanation: We need to return an array of objects with the id property set to the story id. This will generate a static page for each story.
  // Example: [{id: "story-1"}, { id: "story2" }, ...]
  const paths = stories.map((story) => {
    id: story.story;
  });

  return paths;
}
