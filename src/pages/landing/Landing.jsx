import Hero from "../../components/Hero";
import About from "../../components/AboutMe";
import { Suspense } from "react";

/**
 * Represents the Landing page component.
 * Displays the main landing page content including Hero, Drawing, and About sections.
 *
 * @component
 * @param {string} name - The name of the user displayed in the Hero section.
 */

const Landing = ({ name }) => {
  // Inline styles for the main landing container
  const styles = {
    landing: {
      // height: 900,
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // marginBottom: 100
    },
  };

  return (
    <>
        {/* Main Landing Page */}
        {/* need container  */}
        <main className="landing" style={styles.landing}> 

          {/* Display the hero component */}
          <Hero/>
          {/* Display the drawing component */}
          {/* <Draw /> */}
        </main>

        {/* Display the about section */}
        {/* <About /> */}
    </>
  );
};

export default Landing;
