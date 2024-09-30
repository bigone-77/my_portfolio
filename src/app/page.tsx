import AboutDiv from '@/components/about';
import ContactDiv from '@/components/contact';
import ProjectDiv from '@/components/projects';
import SkillDiv from '@/components/skills';

export default function Home() {
  return (
    <div>
      <AboutDiv />
      <SkillDiv />
      <ProjectDiv />
      <ContactDiv />
    </div>
  );
}
