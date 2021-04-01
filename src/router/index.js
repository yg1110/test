export default (path) => {
  switch (path) {
    case "2019 ~ 2020": {
      const router = document.querySelector(".router-view");
      console.log(router);
      const newRouter = document.createElement("portfoilo2020-router-view");
      router.firstElementChild.remove();
      router.appendChild(newRouter);
      break;
    }
    case "2021": {
      const router = document.querySelector(".router-view");
      console.log(router);
      const newRouter = document.createElement("portfoilo2021-router-view");
      router.firstElementChild.remove();
      router.appendChild(newRouter);
      break;
    }
    case "About": {
      const router = document.querySelector(".router-view");
      const newRouter = document.createElement(
        path.toLowerCase() + "-router-view"
      );
      router.firstElementChild.remove();
      router.appendChild(newRouter);
      break;
    }

    default: {
      const router = document.querySelector(".router-view");
      const newRouter = document.createElement(
        path.toLowerCase() + "-router-view"
      );
      router.firstElementChild.remove();
      router.appendChild(newRouter);
      break;
    }
  }
};
