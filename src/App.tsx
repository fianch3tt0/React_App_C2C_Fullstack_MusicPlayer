import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

// Importing the required components from react-bootstrap library
// useState and useEffect hooks for state management in React
const Client_id = "06dcb8c987d5486f8c4c9d8aa162bb05";
const Client_secret = "1f08363b451a4ec591085da5c41ddb70";

function App() {
  // Setting the initial state for the search input
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])


  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search"
            type="input"
            // Event listener for when the user presses the enter key
            onKeyPress={event => {
              if (event.key === "Enter") {
                console.log('pressed enter');
              }
            }}
            // Event listener for when the user types in the input field
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={() => { console.log('clicked button') }}>
            Search
          </Button>

        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card.Img src='#' />
            <Card.Body>
              <Card.Title> Album Name Here </Card.Title>
            </Card.Body>
          </Card>

        </Row>

      </Container>
    </div>
  );
}

export default App;
