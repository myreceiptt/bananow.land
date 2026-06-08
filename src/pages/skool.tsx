import PlaceholderPage from "../components/PlaceholderPage";

export default function Skool() {
  return (
    <PlaceholderPage
      id="skool"
      title={
        <>
          Skool{" "}
          <span className="text-yellow-now dark:text-green-now font-extrabold">
            Now
          </span>
        </>
      }
      description={
        <>
          <span className="text-green-now dark:text-yellow-now font-bold">
            BANANOW
          </span>
          &apos;s home for learning programs, playing communities, and
          real-world growth is being prepared.
        </>
      }
    />
  );
}
