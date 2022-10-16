import Hero from "../components/Hero";
import MetaHead from "../components/MetaHead";
import APIs from "../components/APIs";
import { getIntroduction } from "../helpers/getIntroduction";

export default function Home(props) {
  const { intro } = props;
  return (
    <>
      <MetaHead
        title="Server | Home"
        description="This is the home page of the server."
      />
      <Hero />
      {intro.map((intro) => (
        <APIs
          key={intro.id}
          href={intro.url}
          method={intro.method}
          title={intro.title}
          description={intro.description}
          example={JSON.stringify(intro.example, null, 2)}
        />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const intro = await getIntroduction();
  return {
    props: {
      intro,
    },
  };
}
