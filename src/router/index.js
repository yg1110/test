export default path => {
  switch (path) {
    case "Home": {
      const router = document.querySelector(".router-view");

      const newRouter = document.createElement(
        path.toLowerCase() + "-router-view"
      );

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
