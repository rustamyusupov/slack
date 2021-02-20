import React from 'react';
import PropTypes from 'prop-types';
import { Form as FormikForm, Field } from 'formik';
import { Form, InputGroup, Button } from 'react-bootstrap';

const MessageForm = React.forwardRef(({ disabled, errors }, ref) => (
  <FormikForm noValidate>
    <Form.Group>
      <InputGroup>
        <Field
          name="message"
          aria-label="message"
          className={`mr-2 form-control ${errors.message ? 'is-invalid' : ''}`}
          innerRef={ref}
          autoComplete="off"
        />
        <Button type="submit" disabled={disabled}>
          Submit
        </Button>
        <Form.Control.Feedback type="invalid">
          {errors.message}
&nbsp;
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  </FormikForm>
));

MessageForm.displayName = 'MessageForm';

MessageForm.propTypes = {
  disabled: PropTypes.bool,
  errors: PropTypes.shape({
    message: PropTypes.string,
  }),
};

MessageForm.defaultProps = {
  disabled: false,
  errors: {},
};

export default MessageForm;