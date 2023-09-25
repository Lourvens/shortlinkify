# URL Shortener Web Application

Welcome to the URL Shortener web application repository! This full-stack web app allows users to shorten long URLs while providing features like custom expiration dates, access codes, authentication for link management, and detailed analytics. Here's an overview of the application stack and its key features:

## Stack

- **Server**: Nest.js / Express
- **Database**: PostgreSQL
- **Client**: React
- **Language**: TypeScript
- **Tools**: Docker
  
## Features

1. **Shorten Long URLs**: Create a short link for any long URL. The creator of the short link can customize it with extra parameters, such as an expiration date and an access code.

2. **User Authentication**: Users can authenticate to have control over their links. Authenticated users can track how many times their links have been clicked and manage them effectively.

3. **Request Analytics**: The application logs request information every time a short link is accessed, including the IP address, user agent, and timestamp. This data is presented in an accessible format on the frontend, providing valuable insights into link performance.

4. **Security Measures**: Unauthenticated users cannot add access codes to their short links. Additionally, all short links created by unauthenticated users will automatically expire after 3 hours, ensuring security and link freshness.

## Additional Information

To set up and run this application locally, please follow the instructions in the respective `server` and `client` directories. You'll need to configure the database connection and any required environment variables.

Happy shortening!
