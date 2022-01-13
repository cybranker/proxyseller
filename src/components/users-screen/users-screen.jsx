import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ModalAlbums from "../modal-albums/modal-albums";

class UsersScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userId: 0
    }
  }

  render() {
    const {userId} = this.state;
    const {users} = this.props;

    return (
      <div className="container">
        <h1 className="text-center m-1">List Users</h1>
        <table  className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Address</th>
              <th scope="col" colSpan="2">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((it, i) => <tr key={`user-${i}`}>
                <th className="align-middle" scope="row">{it.id}</th>
                <td className="align-middle">{it.name}</td>
                <td className="align-middle">{it.username}</td>
                <td className="align-middle">{it.email}</td>
                <td className="align-middle">{it.phone}</td>
                <td className="align-middle">{it.website}</td>
                <td className="align-middle">
                  {it.address.city},<br/>
                  {it.address.street} St.,<br/>
                  {it.address.suite},<br/>
                  {it.address.zipcode}
                </td>
                <td className="align-middle">
                  {it.company.name},<br/>
                  {it.company.catchPhrase},<br/>
                  {it.company.bs}
                </td>
                <td className="align-middle">
                  <Link to={`/posts/${it.id}`} className="btn btn-primary m-1" target="_blank" title="Posts">
                    <i className="bi bi-file-earmark-post"></i>
                  </Link>
                  <button type="button" className="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#albumsModal" title="Albums" onClick={() => this.setState({userId: it.id})}>
                    <i className="bi bi-journal-album"></i>
                  </button>
                </td>
              </tr>)}
          </tbody>
        </table>
        <ModalAlbums id={userId} />
      </div>
    );
  }
};

UsersScreen.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        geo: PropTypes.shape({
          lat: PropTypes.string.isRequired,
          lng: PropTypes.string.isRequired
        }).isRequired
      }).isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = (state) => ({
  users: state['DATA'].users,
});


export default connect(mapStateToProps)(UsersScreen);
