import { useLocation, Outlet } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const realm = searchParams.get("realm");

  const getBackgroundImg = () => {
    if (location.pathname === "/Pomodoro") {
      switch (realm) {
        case "void":
          return {
            backgroundImage: 'url(src/assets/img/thevoid.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            minHeight: '100vh'
          };
        case "drakaria":
          return {
            backgroundImage: 'url(src/assets/img/drakaria.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            minHeight: '100vh'
          };
        case "citadel":
            return{
             backgroundImage: 'url(src/assets/img/urbanFantasy.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            minHeight: '100vh'
            };
        case "highlands":
            return{
                backgroundImage: 'url(src/assets/img/castlerealm.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
                minHeight: '100vh'
            }
        default:
          return {
            backgroundColor: 'black',
            minHeight: '100vh'
          };
      }
    }

    switch (location.pathname) {
      case "/":
        return {
          backgroundImage: 'url(src/assets/img/portal.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        };
      case "/ChooseRealm":
        return {
            backgroundImage: 'url(src/assets/img/paul-volkmer-_Apdet7E5yU-unsplash.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh'
        };
      default:
        return {
          backgroundColor: '#222',
          minHeight: '100vh'
        };
    }
  };

  return (
    <div style={getBackgroundImg()}>
      <Outlet />
    </div>
  );
}

export default Layout;
