import React, { useState } from 'react';
import axios from 'axios';
import { Button, ButtonGroup } from 'react-bootstrap';
import ValidationErrors from './ValidationErrors';

export default function TestErrors() {
  const baseUrl = 'http://localhost:5000/api/';

  const [errors, setErrors] = useState(null);

  function handleNotFound() {
    axios.get(baseUrl + 'buggy/not-found').catch((err) => console.log(err.response));
  }

  function handleBadRequest() {
    axios.get(baseUrl + 'buggy/bad-request').catch((err) => console.log(err.response));
  }

  function handleServerError() {
    axios.get(baseUrl + 'buggy/server-error').catch((err) => console.log(err.response));
  }

  function handleUnauthorised() {
    axios.get(baseUrl + 'buggy/unauthorised').catch((err) => console.log(err.response));
  }

  function handleBadGuid() {
    axios.get(baseUrl + 'activities/notaguid').catch((err) => console.log(err.response));
  }

  function handleValidationError() {
    axios.post(baseUrl + 'activities', {}).catch((err) => setErrors(err));
  }

  return (
    <>
      <h1>Test Error component</h1>
      <ButtonGroup>
        <Button onClick={handleNotFound} variant='outline-secondary'>
          Not Found
        </Button>
        <Button onClick={handleBadRequest} variant='outline-secondary'>
          Bad Request
        </Button>
        <Button onClick={handleValidationError} variant='outline-secondary'>
          Validation Error
        </Button>
        <Button onClick={handleServerError} variant='outline-secondary'>
          Server Error
        </Button>
        <Button onClick={handleUnauthorised} variant='outline-secondary'>
          Unauthorised
        </Button>
        <Button onClick={handleBadGuid} variant='outline-secondary'>
          Bad Guid
        </Button>
      </ButtonGroup>
      {errors && <ValidationErrors errors={errors} />}
    </>
  );
}
