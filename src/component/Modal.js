import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form} from 'reactstrap';
import {connect} from 'react-redux'
import {addmovie} from '../actions/actions'
class ModalExemple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      
    };

  }

  toggle=()=> {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeBackdrop=(e)=> {
    let value = e.target.value;
    if (value !== 'dynamic') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }
  handleChange=(e)=>{
    this.setState({
    [e.target.name]: e.target.value
    })

  }


  render() {
    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          {' '}
          <Button color="danger" onClick={this.toggle}>ADD MOVIE</Button>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>New movie...</ModalHeader>
          <ModalBody>
              <div className="form"><label>Title:</label><input name="title" type="text" onChange={(e)=>this.handleChange(e)}/></div>
              <div className="form"><label>Description:</label><input name="desc" type="text" onChange={(e)=>this.handleChange(e)}/></div>
              <div className="form"><label>Picture:</label><input name="image" type="text" onChange={(e)=>this.handleChange(e)}/></div>
              <div className="form"><label>Rating:</label><input name="rat" type="text" onChange={(e)=>this.handleChange(e)}/></div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" 
            onClick={()=>{
              this.toggle();
              this.props.addmovie( {title:this.state.title, desc:this.state.desc, image:this.state.image, rat:this.state.rat} );
            }}>ADD</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

  const mapDispatchToProps = dispatch => {
    return {
      addmovie: payload => dispatch(addmovie(payload))
    }
  }
  export default connect(
    null,
    mapDispatchToProps
  )(ModalExemple)
