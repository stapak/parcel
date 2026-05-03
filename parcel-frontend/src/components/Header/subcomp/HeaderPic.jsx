import ParcelLogo from "../../../assets/parcel logo.png";
import ParcelName from "../../../assets/parcel logo name.png";

function HeaderPic() {
  return (
    <div className="header-logo">
      <img src={ParcelLogo} alt="Parcel Logo" />
      <img src={ParcelName} alt="Parcel Name" />
    </div>
  );
}

export default HeaderPic;