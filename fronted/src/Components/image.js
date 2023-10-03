import photo from "./photo.jpg";
import App from "../App";
function Image(){
  let s={
    width :"400px",
    height : "400px",
    borderRadius : "30px",
  }
  // .s:hover{
  // }
  return (
    <>
    <img src={photo} style={s} alt="oo"/>
    </>
  );
}
export default Image;