import Hero from "../components/Hero";
import MetaHead from "../components/MetaHead";

export default function notFound() {
  return (
    <>
      <MetaHead
        title="Server | 404"
        description="Seems like you have not found what you are looking for."
      />
      <Hero
        introduction="I put a 404 on you"
        benefits="You seem to be lost!"
        information="I will show you the path back to your destination."
      />
    </>
  );
}
