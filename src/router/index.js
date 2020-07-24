import portfoilo from "../views/portfoilo";
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
      alert("아직 완성하지 않은 페이지 입니다.");
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
