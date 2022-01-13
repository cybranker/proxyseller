import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ucFirst} from "../../utils";


const ModalAlbums = (props) => {
  const {id, albums} = props;

  return (
    <div className="modal fade" id="albumsModal" tabIndex="-1" aria-labelledby="modalAlbums" aria-hidden="true">
      <div className="modal-dialog  modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Albums User #{id}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {albums.map((it, i) => (it.userId === id && <div key={it.id}>
                <h4>{ucFirst(it.title)}</h4>
                <hr />
              </div>))}
          </div>
        </div>
      </div>
    </div>
  );
};

ModalAlbums.propTypes = {
  id: PropTypes.number.isRequired,
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = (state) => ({
  albums: state['DATA'].albums,
});


export default connect(mapStateToProps)(ModalAlbums);
