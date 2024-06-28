import { Story as StoryType } from "../types/stories";

interface Props {
  story: StoryType;
}

function Story({ story }: Props) {
  return (
    <div>
      <div className="px-20"></div>
    </div>
  );
}

export default Story;
