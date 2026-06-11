import PlaceholderPage from "../../components/ui/PlaceholderPage";

export default function Nfts() {
  return (
    <PlaceholderPage
      id="nfts"
      title={
        <>
          <span className="text-green-now dark:text-yellow-now font-extrabold">
            BANANOW
          </span>{" "}
          NFT
        </>
      }
      description={
        <>
          The marketplace is being prepared. The{" "}
          <span className="text-yellow-now dark:text-green-now font-bold">
            HEADS
          </span>{" "}
          will have a new place to grow soon.
        </>
      }
    />
  );
}
