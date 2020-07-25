import portfoilo from "../views/portfoilo";
import skill from "../views/skill";

export default () => {
  const router = document.querySelector(".router-view");

  if (router !== null) {
    const homeRouter = document.createElement("home-router-view");
    const skillRouter = document.createElement("skill-router-view");

    router.appendChild(homeRouter);
    router.appendChild(skillRouter);

    customElements.get("home-router-view") ||
      customElements.define("home-router-view", portfoilo);

    customElements.get("skill-router-view") ||
      customElements.define("skill-router-view", skill);
    // router.lastChild.remove();
    router.firstChild.remove();
  }
};
