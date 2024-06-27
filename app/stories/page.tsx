import { getAllStories } from "@/lib/stories";
import { Story } from "@/types/stories";

function Stories() {
  const stories: Story[] = getAllStories();
  return <div>Stories</div>;
}

export default Stories;
