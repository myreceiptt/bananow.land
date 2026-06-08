import PlaceholderPage from "../components/PlaceholderPage";

export default function News() {
  return (
    <PlaceholderPage
      id="news"
      title={
        <>
          Na{" "}
          <span className="text-yellow-now dark:text-green-now font-extrabold">
            Now
          </span>{" "}
          News
        </>
      }
      description={
        <>
          <span className="text-green-now dark:text-yellow-now font-bold">
            BANANOW
          </span>
          &apos;s space for updates, stories, and ordinary something is being
          prepared.
        </>
      }
    />
  );
}
