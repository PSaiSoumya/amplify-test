// aws-exports.js

const awsmobile = {
  "aws_project_region": "ap-south-1",
  "runtimeConfig": {
    "env": {
      "MAINTENANCE_MODE": process.env.REACT_APP_MAINTENANCE_MODE || 'false' // Set default value to 'false'
    }
  }
};

export default awsmobile;
