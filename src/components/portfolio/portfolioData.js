import Image1 from "../../../public/assets/img/portfolio/project-1.jpg";
import reactMovieList from "../../../public/assets/img/portfolio/react-movie-list.png"
const PortfolioData = [
  /* {
    id: 1,
    type: "mockup project",
    image: Image1,
    tag: ["mockup"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Startup",
        language: "NextJS, TypeScript, I18next, Stripe, Redux toolkit, Redux thunk, Formik, Yup, Next auth, ChartJS, Admin, Instructor and User dashboards, Graphql, Hygraph, SSR, SEO, friendly, High Order Components, Layouts",
        preview: "edu-usm.vercel.app",
        link: "https://edu-usm.vercel.app",
      },
    ],
  }, */
  {
    id: 2,
    type: "mockup project",
    image: reactMovieList,
    width: 1901,
    height: 1079,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Startup",
        language: "ReactJS",
        preview: "react-movie-list-project.vercel.app",
        link: "https://react-movie-list-project.vercel.app/",
      },
    ],
  },
];

export default PortfolioData;
