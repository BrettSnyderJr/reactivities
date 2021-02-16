import React, { ChangeEvent, FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import { Activity } from "../../../app/layout/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

const ActivityForm = ({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
}: Props) => {
  console.log(selectedActivity);
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    createOrEdit(activity);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Card className="p-2">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Group controlId="formActivity">
          <Form.Control
            type="text"
            placeholder="Title"
            value={activity.title}
            name="title"
            onChange={handleInputChange}
          />
          <br />
          <Form.Control
            as="textarea"
            rows={3}
            value={activity.description}
            name="description"
            onChange={handleInputChange}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Category"
            value={activity.category}
            name="category"
            onChange={handleInputChange}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Date"
            value={activity.date}
            name="date"
            onChange={handleInputChange}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="City"
            value={activity.city}
            name="city"
            onChange={handleInputChange}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Venue"
            value={activity.venue}
            name="venue"
            onChange={handleInputChange}
          />
          <br />
        </Form.Group>
        <ButtonGroup size="lg" className="w-100" aria-label="activity actions">
          <Button variant="outline-danger" onClick={closeForm}>
            Cancel
          </Button>
          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </ButtonGroup>
      </Form>
    </Card>
  );
};

export default ActivityForm;
