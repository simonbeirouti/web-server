import Hero from "../components/Hero";
import MetaHead from "../components/MetaHead";
import APIs from "../components/APIs";

export default function Home(props) {
  const { intro } = props;
  return (
    <>
      <MetaHead
        title="Server | Home"
        description="This is the home page of the server."
      />
      <Hero
        introduction="Made by Developers, for Developers"
        benefits="Quality resources shared by the community"
        information="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula"
      />
      {intro.map((intro) => (
        <APIs
          id={intro.id}
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
  const res = await fetch("http://localhost:3000/api");
  const intro = await res.json();
  return {
    props: {
      intro,
    },
  };
}
