import Slider from "react-slick";
import Head from 'next/head'
import img from '../roy.jpg'

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="team-next-btn"
      onClick={onClick}
    > {'>'} </div>

  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="team-prev-btn"
      onClick={onClick}
    > {'<'} </div>
  );
}
export default function Home() {

  const data = [
    {
      image: img,
      name: "Sid",
      degree: "lorem ipsum",
      subject: "something"
    },
    {
      image: img,
      name: "abid",
      degree: "lorem ipsum",
      subject: "something"
    },
    {
      image: img,
      name: "Sidsd",
      degree: "lorem ipsum",
      subject: "something"
    },
    {
      image: img,
      name: "Sid",
      degree: "lorem ipsum",
      subject: "something"
    },
    {
      image: img,
      name: "Sid",
      degree: "lorem ipsum",
      subject: "something"
    },
    {
      image: img,
      name: "Sid",
      degree: "lorem ipsum",
      subject: "something"
    } 
  ]

  const settings = {
    className:"team-slider",
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="container">
      <div className = "card-wrapper">
      <Head>
        <>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" type="text/css" href="http://kenwheeler.github.io/slick/slick/slick-theme.css"/>
        </>
      </Head>
     <h3>Meet our Teachers</h3>
     <p style ={{paddingBottom: '80px'}}>Expert teachers from top universities will guide you in all your academic needs</p>
      <Slider {...settings}>
        {
          (data || []).map((ele, key) => {
            return (
              <div className="team-card">
                <img className = 'img' src={ele.image} />
                <h2>{ele.name}</h2>
                <h3>{ele.degree}</h3>
                <p>{ele.subject}</p>
              </div>
            )
          })
        }
      </Slider>

    </div>
      <style jsx>{`
        .container{
          width: 100%;  
          display: flex;
          justify-content: center;
        }

        .card-wrapper{
          width: 100%;
          margin: 60px 0 100px;
          max-width: 800px;
          align-self: center;
          text-align: center;
        }
        .img{
            width : 50%;
            height : 50%;
            display : inherit;
            border-radius : 50%;
        }
        .team-card{
          opacity : 0.7;
          display: flex !important;
          transform: scale(0.66);
          align-items: center;
          flex-direction: column;
          justify-content: center;
          transition-duration: 0.5s;
        }
        .team-card h2 {
          color: #525F7F;
          margin: 30px 0 0 0;
          line-height: 25px;
        }
        .team-card h3 {
          color: #525F7F;
          margin: 8px 0px 0px 0px;
        }
        .team-card p {
          color: rgba(82, 95, 127, 0.497707);
          margin: 0;
          margin-top: 0px;
          font-size: 16px;
          margin-top: 10px;
          line-height: 19px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .slick-current + .slick-active .team-card{
          opacity: 1;
          transform: scale(1);
        }

        .team-card > img{
          width: 180px;
          height: 180px;
        }

        .slick-prev:before, .slick-next:before{
            color: red;
        }
        .team-slider{
          margin: 0px 20px;
        }

        .slick-initialized{
          display: flex;
          align-items: center;
        }

        .team-next-btn, .team-prev-btn {
          color: #33C9DC;
          width: 200px;
          //position: absolute;
          height: 40px;
          padding: 0;
          z-index: 4;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.169611);
          margin-top: -40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
      }

      // .team-prev-btn {
      //   top: 50%;
      //   translate: transformY(-50%);
      //   left: 20px;
      // }
      // .team-next-btn {
      //   top: 50%;
      //   translate: transformY(-50%);
      //   right: 20px;
      // }

      }
      `}</style>
    </div>
  )
}