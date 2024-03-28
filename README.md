# React Components Using Props

This project is aimed at creating reusable React components utilizing props to customize their behavior and appearance. Props, short for properties, allow passing data from one component to another. Leveraging props effectively enables building flexible and dynamic user interfaces in React applications.

## Getting Started

Follow these steps to get the project up and running on your local machine:

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download and install them from [here](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/react-components-using-props.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-components-using-props
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the project.

### Example

Below is an example of how to use a simple React component `Button` with props:

```jsx
import React from 'react';
import Button from './Button';

function App() {
  return (
    <div>
      {/* Default button */}
      <Button />

      {/* Customized button */}
      <Button
        text="Click Me"
        color="blue"
        onClick={() => alert('Button clicked!')}
      />
    </div>
  );
}

export default App;
