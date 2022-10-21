import LocalisationSearch from "./../../components/Localisation/LocalisationSearch";

function Topbar() {
  //return <LocalisationSearch />;
  return(
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl">Home</a>
      <a className="btn btn-ghost normal-case text-xl">Pollution</a>
    </div>
  )
}

export default Topbar;
