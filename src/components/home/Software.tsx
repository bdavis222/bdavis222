import SoftwarePageCard from "../profile-card/SoftwarePageCard";

function Software() {
  return (
    <>
      <h2>Software</h2>
      <p>
        This page showcases several different software products{" "}
        <i>
          (including this website itself, written in TypeScript using the React
          library)
        </i>
        . All of these are free to use, and instructions for their installation
        and use are provided for each. To see more, visit my software page:
      </p>
      <SoftwarePageCard />
    </>
  );
}

export default Software;
