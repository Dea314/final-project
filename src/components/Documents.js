import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import  CustomizedTables  from "./Attributes";

const Documents = () => {
  return (
    <div className="wrapper-all">
      <div>
        <ul>
          <li>
            <Link
              to="introduction"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              to="currentVersion"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Current Version
            </Link>
          </li>
          <li>
            <Link
              to="rate"
              spy={true}
              smooth={true}
              style={{
                textDecoration: "none",
              }}
            >
              Rate Limit
            </Link>
          </li>
          <li>
            <Link
              to="base"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Base URL
            </Link>
          </li>
          <li>
            <Link
              to="characters"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Characters
            </Link>
          </li>
          <li>
            <Link
              to="endpoints"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Character endpoints
            </Link>
          </li>
          <li>
            <Link
              to="get-all"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get all characters
            </Link>
          </li>
          <li>
            <Link
              to="single-index"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get a single character by index
            </Link>
          </li>
          <li>
            <Link
              to="single-name"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get a single character by name
            </Link>
          </li>
          <li>
            <Link
              to="single-category"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get single character by category
            </Link>
          </li>
          <li>
            <Link
              to="get-random"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get a random character
            </Link>
          </li>
          <li>
            <Link
              to="location"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              to="errors"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Errors
            </Link>
          </li>
          <li>
            <Link
              to="collaboration"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Collaboration
            </Link>
          </li>
        </ul>
      </div>
      <div className="wrapper-text">
        <h1>DOCUMENTATION ABOUT API</h1>

        <Typography variant="h3" align="center" className="title">
          <div id="introduction">Introduction</div>
        </Typography>
        <Typography align="center">
        This documentation should give you all the information to make your HTTP
        requests, making you familiar with what's available to you to develop your
         project.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="currentVersion">Current Version</div>
        </Typography>
        <Typography>
        The current version of the API is 1. The Game Characters API is an open 
        API, which means no authentication is required to query the data.
         Since no authentication is needed, there is only support for GET requests. 
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="rate">Rate limit</div>
        </Typography>
        <Typography>
        There is a rate limit of 60 requests per hour from each IP address to prevent
         harmful activity. If you reach that limit, you will receive a message and 
         regain access after an hour.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="base">Base URL</div>
        </Typography>
        <Typography align="center" className="routesURL">
        https://gamecharactersapi.herokuapp.com/playground   
        </Typography>
        <Typography variant="h3" align="center" className="title">
          <div id="characters">Characters</div>
        </Typography>
        <Typography>
          The database structure is inspired by the Final Fantasy
           games and all the amazing characters through out the series.
           The intention is to continue enlarging the database gradualy
           with new characters. If you are a big fan of the series and
           want to contribure to this project feel free to contact us.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="endpoints">Characters endpoints</div>
        </Typography>
        <Typography>
           <CustomizedTables/>
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="get-all">Get all characters</div>
        </Typography>
        <Typography>
          Gummi bears danish jelly beans tootsie roll carrot cake apple pie
          soufflé pie caramels. Marshmallow soufflé shortbread bear claw sweet
          cotton candy. Sesame snaps macaroon toffee dragée apple pie cotton
          candy macaroon topping. Sweet roll croissant sesame snaps jelly-o
          marshmallow cookie jelly-o. Toffee sweet sugar plum cookie cookie
          jujubes danish macaroon. Cheesecake ice cream danish ice cream jelly-o
          lemon drops candy canes apple pie. Chupa chups jelly-o sesame snaps
          sweet roll halvah toffee. Cotton candy sweet roll pie sesame snaps
          wafer. Topping marzipan brownie powder pie caramels halvah jujubes.
          Shortbread caramels danish donut oat cake soufflé. Sugar plum gummies
          chupa chups dragée candy pudding. Apple pie shortbread croissant
          gummies cheesecake topping gingerbread carrot cake icing. Cotton candy
          cookie icing apple pie cookie. Soufflé sesame snaps shortbread cookie
          jujubes cookie. Sweet fruitcake dragée sweet roll cake. Marzipan
          pudding jelly beans cake pastry. Gingerbread jelly beans caramels
          pastry gummies. Sweet candy canes caramels candy canes muffin
          liquorice cake cheesecake halvah. Brownie carrot cake dessert cake
          icing. Sesame snaps tiramisu ice cream candy canes danish toffee
          brownie lollipop cake. Pudding cake caramels candy canes cookie
          biscuit shortbread. Caramels candy canes biscuit dessert chocolate
          cake muffin gummi bears tootsie roll fruitcake. Liquorice sweet roll
          dragée chocolate cake marzipan. Croissant chupa chups cupcake pudding
          sugar plum sugar plum donut pastry cupcake.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="single-index">Get a single character by index</div>
        </Typography>
        <Typography>
          Biscuit cake lemon drops danish carrot cake sesame snaps pastry candy
          canes. Apple pie sweet roll danish ice cream cake cake cake dessert
          halvah. Jujubes carrot cake sweet lollipop sweet cake bonbon topping.
          Topping cupcake icing jujubes macaroon. Biscuit powder jujubes wafer
          tootsie roll chocolate cake. Oat cake liquorice cake croissant oat
          cake chocolate fruitcake cheesecake. Lemon drops sweet marzipan ice
          cream biscuit chocolate cake biscuit. Gummi bears sweet biscuit
          gummies jelly-o toffee macaroon pie apple pie. Fruitcake chupa chups
          fruitcake gingerbread oat cake lollipop lemon drops croissant bear
          claw. Shortbread apple pie pudding macaroon cookie liquorice dessert.
          Carrot cake cupcake sesame snaps cake macaroon sweet roll toffee
          chocolate cake sesame snaps. Cake jelly-o sesame snaps jujubes
          marzipan marzipan cheesecake. Topping tiramisu muffin jujubes
          chocolate bar lemon drops caramels shortbread toffee. Lollipop cupcake
          cotton candy croissant gingerbread. Soufflé jelly-o apple pie wafer
          tiramisu marzipan. Cake tart jelly-o danish dragée muffin. Cookie
          cookie bonbon chocolate sugar plum toffee icing. Brownie carrot cake
          bonbon sesame snaps jujubes wafer brownie. Lollipop croissant
          cheesecake gingerbread cheesecake soufflé tart chocolate fruitcake.
          Dessert bear claw candy canes oat cake jujubes cake candy sweet chupa
          chups. Icing pudding cupcake gingerbread toffee dessert. Pudding bear
          claw muffin marshmallow muffin oat cake. Marshmallow shortbread wafer
          marshmallow icing toffee. Candy canes caramels halvah chupa chups
          macaroon gummi bears jelly-o sugar plum. Donut pudding donut bear claw
          fruitcake marzipan powder bear claw ice cream. Lemon drops toffee
          candy cake marshmallow.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="single-name">Get a single character by name</div>
        </Typography>
        <Typography>
          Gummi bears danish jelly beans tootsie roll carrot cake apple pie
          soufflé pie caramels. Marshmallow soufflé shortbread bear claw sweet
          cotton candy. Sesame snaps macaroon toffee dragée apple pie cotton
          candy macaroon topping. Sweet roll croissant sesame snaps jelly-o
          marshmallow cookie jelly-o. Toffee sweet sugar plum cookie cookie
          jujubes danish macaroon. Cheesecake ice cream danish ice cream jelly-o
          lemon drops candy canes apple pie. Chupa chups jelly-o sesame snaps
          sweet roll halvah toffee. Cotton candy sweet roll pie sesame snaps
          wafer. Topping marzipan brownie powder pie caramels halvah jujubes.
          Shortbread caramels danish donut oat cake soufflé. Sugar plum gummies
          chupa chups dragée candy pudding. Apple pie shortbread croissant
          gummies cheesecake topping gingerbread carrot cake icing.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="single-category">Get single character by category</div>
        </Typography>
        <Typography>
          Jelly danish chocolate chocolate oat cake cake candy. Sweet cookie
          toffee lemon drops marzipan lollipop. Danish cake sugar plum cake oat
          cake gummi bears chocolate lemon drops gummies. Marzipan cake candy
          canes soufflé gummi bears gummi bears brownie oat cake candy. Pastry
          chocolate bar topping candy canes wafer chocolate cake croissant
          gummies jelly-o. Apple pie liquorice muffin apple pie pudding
          fruitcake. Dessert biscuit chocolate cake lemon drops pastry apple pie
          jelly beans sweet jelly-o. Jelly beans chocolate cake dragée cake
          carrot cake. Tiramisu dessert pudding pudding bear claw. Dessert
          danish cotton candy chocolate bar oat cake oat cake. Cake gingerbread
          chocolate cake sweet carrot cake chupa chups jelly wafer croissant.
          Halvah cake carrot cake jelly beans chocolate bar danish toffee wafer
          jelly. Biscuit cake lemon drops danish carrot cake sesame snaps pastry
          candy canes. Apple pie sweet roll danish ice cream cake cake cake
          dessert halvah. Jujubes carrot cake sweet lollipop sweet cake bonbon
          topping. Topping cupcake icing jujubes macaroon. Biscuit powder
          jujubes wafer tootsie roll chocolate cake. Oat cake liquorice cake
          croissant oat cake chocolate fruitcake cheesecake. Lemon drops sweet
          marzipan ice cream biscuit chocolate cake biscuit. Gummi bears sweet
          biscuit gummies jelly-o toffee macaroon pie apple pie. Fruitcake chupa
          chups fruitcake gingerbread oat cake lollipop lemon drops croissant
          bear claw. Shortbread apple pie pudding macaroon cookie liquorice
          dessert. Carrot cake cupcake sesame snaps cake macaroon sweet roll
          toffee chocolate cake sesame snaps. Cake jelly-o sesame snaps jujubes
          marzipan marzipan cheesecake. Topping tiramisu muffin jujubes
          chocolate bar lemon drops caramels shortbread toffee.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="get-random"> Get a random character</div>
        </Typography>
        <Typography>
          Gummi bears danish jelly beans tootsie roll carrot cake apple pie
          soufflé pie caramels. Marshmallow soufflé shortbread bear claw sweet
          cotton candy. Sesame snaps macaroon toffee dragée apple pie cotton
          candy macaroon topping. Sweet roll croissant sesame snaps jelly-o
          marshmallow cookie jelly-o. Toffee sweet sugar plum cookie cookie
          jujubes danish macaroon. Cheesecake ice cream danish ice cream jelly-o
          lemon drops candy canes apple pie. Chupa chups jelly-o sesame snaps
          sweet roll halvah toffee. Cotton candy sweet roll pie sesame snaps
          wafer. Topping marzipan brownie powder pie caramels halvah jujubes.
          Shortbread caramels danish donut oat cake soufflé. Sugar plum gummies
          chupa chups dragée candy pudding. Apple pie shortbread croissant
          gummies cheesecake topping gingerbread carrot cake icing.
        </Typography>
        <Typography variant="h3" align="center" className="title">
          <div id="location"> Location</div>
        </Typography>
        <Typography>
          Biscuit cake lemon drops danish carrot cake sesame snaps pastry candy
          canes. Apple pie sweet roll danish ice cream cake cake cake dessert
          halvah. Jujubes carrot cake sweet lollipop sweet cake bonbon topping.
          Topping cupcake icing jujubes macaroon. Biscuit powder jujubes wafer
          tootsie roll chocolate cake. Oat cake liquorice cake croissant oat
          cake chocolate fruitcake cheesecake. Lemon drops sweet marzipan ice
          cream biscuit chocolate cake biscuit. Gummi bears sweet biscuit
          gummies jelly-o toffee macaroon pie apple pie. Fruitcake chupa chups
          fruitcake gingerbread oat cake lollipop lemon drops croissant bear
          claw. Shortbread apple pie pudding macaroon cookie liquorice dessert.
          Carrot cake cupcake sesame snaps cake macaroon sweet roll toffee
          chocolate cake sesame snaps. Cake jelly-o sesame snaps jujubes
          marzipan marzipan cheesecake. Topping tiramisu muffin jujubes
          chocolate bar lemon drops caramels shortbread toffee. Lollipop cupcake
          cotton candy croissant gingerbread. Soufflé jelly-o apple pie wafer
          tiramisu marzipan. Cake tart jelly-o danish dragée muffin. Cookie
          cookie bonbon chocolate sugar plum toffee icing. Brownie carrot cake
          bonbon sesame snaps jujubes wafer brownie. Lollipop croissant
          cheesecake gingerbread cheesecake soufflé tart chocolate fruitcake.
          Dessert bear claw candy canes oat cake jujubes cake candy sweet chupa
          chups. Icing pudding cupcake gingerbread toffee dessert. Pudding bear
          claw muffin marshmallow muffin oat cake. Marshmallow shortbread wafer
          marshmallow icing toffee. Candy canes caramels halvah chupa chups
          macaroon gummi bears jelly-o sugar plum. Donut pudding donut bear claw
          fruitcake marzipan powder bear claw ice cream. Lemon drops toffee
          candy cake marshmallow.
        </Typography>
        <Typography variant="h3" align="center" className="title">
          <div id="errors"> Errors</div>
        </Typography>
        <Typography>
          Gummi bears danish jelly beans tootsie roll carrot cake apple pie
          soufflé pie caramels. Marshmallow soufflé shortbread bear claw sweet
          cotton candy. Sesame snaps macaroon toffee dragée apple pie cotton
          candy macaroon topping. Sweet roll croissant sesame snaps jelly-o
          marshmallow cookie jelly-o. Toffee sweet sugar plum cookie cookie
          jujubes danish macaroon. Cheesecake ice cream danish ice cream jelly-o
          lemon drops candy canes apple pie. Chupa chups jelly-o sesame snaps
          sweet roll halvah toffee. Cotton candy sweet roll pie sesame snaps
          wafer. Topping marzipan brownie powder pie caramels halvah jujubes.
          Shortbread caramels danish donut oat cake soufflé. Sugar plum gummies
          chupa chups dragée candy pudding. Apple pie shortbread croissant
          gummies cheesecake topping gingerbread carrot cake icing. Cotton candy
          cookie icing apple pie cookie. Soufflé sesame snaps shortbread cookie
          jujubes cookie. Sweet fruitcake dragée sweet roll cake. Marzipan
          pudding jelly beans cake pastry. Gingerbread jelly beans caramels
          pastry gummies. Sweet candy canes caramels candy canes muffin
          liquorice cake cheesecake halvah. Brownie carrot cake dessert cake
          icing. Sesame snaps tiramisu ice cream candy canes danish toffee
          brownie lollipop cake. Pudding cake caramels candy canes cookie
          biscuit shortbread. Caramels candy canes biscuit dessert chocolate
          cake muffin gummi bears tootsie roll fruitcake. Liquorice sweet roll
          dragée chocolate cake marzipan. Croissant chupa chups cupcake pudding
          sugar plum sugar plum donut pastry cupcake.
        </Typography>
        <Typography variant="h3" align="center" className="title">
          <div id="collaboration"> Collaboration</div>
        </Typography>
        <Typography>
          Biscuit cake lemon drops danish carrot cake sesame snaps pastry candy
          canes. Apple pie sweet roll danish ice cream cake cake cake dessert
          halvah. Jujubes carrot cake sweet lollipop sweet cake bonbon topping.
          Topping cupcake icing jujubes macaroon. Biscuit powder jujubes wafer
          tootsie roll chocolate cake. Oat cake liquorice cake croissant oat
          cake chocolate fruitcake cheesecake. Lemon drops sweet marzipan ice
          cream biscuit chocolate cake biscuit. Gummi bears sweet biscuit
          gummies jelly-o toffee macaroon pie apple pie. Fruitcake chupa chups
          fruitcake gingerbread oat cake lollipop lemon drops croissant bear
          claw. Shortbread apple pie pudding macaroon cookie liquorice dessert.
          Carrot cake cupcake sesame snaps cake macaroon sweet roll toffee
          chocolate cake sesame snaps. Cake jelly-o sesame snaps jujubes
          marzipan marzipan cheesecake. Topping tiramisu muffin jujubes
          chocolate bar lemon drops caramels shortbread toffee. Lollipop cupcake
          cotton candy croissant gingerbread. Soufflé jelly-o apple pie wafer
          tiramisu marzipan. Cake tart jelly-o danish dragée muffin. Cookie
          cookie bonbon chocolate sugar plum toffee icing. Brownie carrot cake
          bonbon sesame snaps jujubes wafer brownie. Lollipop croissant
          cheesecake gingerbread cheesecake soufflé tart chocolate fruitcake.
          Dessert bear claw candy canes oat cake jujubes cake candy sweet chupa
          chups. Icing pudding cupcake gingerbread toffee dessert. Pudding bear
          claw muffin marshmallow muffin oat cake. Marshmallow shortbread wafer
          marshmallow icing toffee. Candy canes caramels halvah chupa chups
          macaroon gummi bears jelly-o sugar plum. Donut pudding donut bear claw
          fruitcake marzipan powder bear claw ice cream. Lemon drops toffee
          candy cake marshmallow.
        </Typography>
      </div>
      <h2>Playground - Json</h2>
    </div>
  );
};

export default Documents;


