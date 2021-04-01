import portfoilo2020 from "../views/portfoilo2020";
import portfoilo2021 from "../views/portfoilo2021";
import about from "../views/about";
import skill from "../views/skill";

export default () => {
  const router = document.querySelector(".router-view");

  if (router !== null) {
    const portfoilo2020Router = document.createElement(
      "portfoilo2020-router-view"
    );
    const portfoilo2021Router = document.createElement(
      "portfoilo2021-router-view"
    );
    const aboutRouter = document.createElement("about-router-view");
    const skillRouter = document.createElement("skill-router-view");

    router.appendChild(portfoilo2020Router);
    router.appendChild(portfoilo2021Router);
    router.appendChild(aboutRouter);
    router.appendChild(skillRouter);

    customElements.get("portfoilo2020-router-view") ||
      customElements.define("portfoilo2020-router-view", portfoilo2020);

    customElements.get("portfoilo2021-router-view") ||
      customElements.define("portfoilo2021-router-view", portfoilo2021);

    customElements.get("about-router-view") ||
      customElements.define("about-router-view", about);

    customElements.get("skill-router-view") ||
      customElements.define("skill-router-view", skill);

    router.lastChild.remove();
    router.lastChild.remove();
    router.lastChild.remove();
  }
};
