import { Link } from "react-router-dom";
import articleImg from "../../assets/imgsHome/articleImg.jpg";
import { Fade } from "react-reveal";

const Article = () => {
  return (
    <div className="container cg pt-5">
      <Fade bottom duration={1000}>
        <div className="d-md-flex justify-content-md-between justify-content-center text-center  align-items-center">
          <h1 className="fontbold">Our Articles On Osteopathy</h1>

          <Link className="nav-link d-inline-block mt-4 fs-5    ps-0" to="">
            Our Blog<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
          </Link>
        </div>
      </Fade>

      <Fade bottom duration={2000}>
        <div className="row p-3">
          <div className="col-md-5 col-12 pb-0 ">
            <div className="overflow-hidden rounded-3">
              <img
                src={articleImg}
                alt="img"
                className="img-fluid h-30 w-100 imgArticle"
              />
            </div>

            <div className="align-items-center py-3">
              <h4 className=" fontbold artText">
                Osteopathy demystified: 20 essential information about this
                manual
              </h4>
              <Link
                className="  d-inline-block mt-2 fs-6 cy    ps-0 artLink"
                to=""
                aria-current="page"
              >
                <b>LEARN MORE</b>
                <i className="   fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-7 col-12 pb-0">
            <div className="row ">
              <div className="col-lg-5 col-12  py-3">
                <h4 className="display-5 artText fw-bold fs-5">
                  <b>When to consult an osteopath in Montreal? </b>
                </h4>
                <Link
                  className="  d-inline-block mt-2 fs-6 cy    ps-0 artLink"
                  to=""
                  aria-current="page"
                >
                  <b>LEARN MORE</b>
                  <i className="   fa fa-arrow-right"></i>
                </Link>
              </div>
              <div className="col-lg-7 col-12  py-3">
                <h4 className="display-5 artText fw-bold fs-5">
                  <b>
                    Osteopathy Montreal: an effective solution for the treatment
                    of tendinitis
                  </b>
                </h4>
                <Link
                  className="  d-inline-block mt-2 fs-6 cy    ps-0 artLink"
                  to=""
                  aria-current="page"
                >
                  <b>LEARN MORE</b>
                  <i className="   fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
      </Fade>
    </div>
  );
};

export default Article;
