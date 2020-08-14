import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { FormLabel , Button} from "react-bootstrap";
import "./form.css"

function CreateProfileForm({onChange, profile, submitProfile}) {

  return (
    <Form>
      <Row className="formRow">
          <Col>
          <p className="formLabel">Profile Photo Url</p>
            <Form.Control placeholder="Profile Photo" name="photoUrl" onChange={onChange}/>
          </Col>
          <Col>
          <p className="formLabel" name="photoUpload">Upload photo</p>
          <Form.File />
          </Col>
          </Row>
        <Row className="formRow">
          <Col>
            <p className="formLabel">Full Name</p>
            <Form.Control placeholder="Michael" name="name" onChange={onChange} value={profile.name}/>
          </Col>
        </Row>
        <Row className="formRow">
          <Col>
          <p className="formLabel">LinkedIn Profile Url</p>
            <Form.Control placeholder="i.e. linkedIn.com/michael_scott" name="linkedIn" onChange={onChange} value={profile.linkedIn}/>
          </Col>
          </Row>
          <Row className="formRow">  
          <Col>
          <p className="formLabel">Phone Number
            </p>
            <Form.Control placeholder="202-555-0149" name="pNumber" onChange={onChange} value={profile.phoneNumber}/>
          </Col>
          </Row>
          <Row className="formRow">
          <Col>
          <p className="formLabel">Position
            </p>
            <Form.Control placeholder="Regional Manager" name="position" onChange={onChange} value={profile.position}/>
          </Col>
          <Col>
          <p className="formLabel">Company
            </p>
            <Form.Control placeholder="Dunder Mifflin" name="company" onChange={onChange} value={profile.company}/>
          </Col>
          
          
        </Row>
        
          <Row className="formRow">
          <Col>
          <p className="formLabel">Personal Bio
            </p>
            <Form.Control as="textarea" rows="3" placeholder="... tell us a little about yourself!" name="bio" onChange={onChange} value={profile.bio}/>
          </Col>
        </Row>
        <Button type="submit" onClick={submitProfile}>Save Profile Information</Button>
    </Form>
  );
}

export default CreateProfileForm;
