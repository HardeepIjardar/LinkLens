
# URL Validator & Block Checker

This project is a simple Node.js application that validates and checks URLs against a blocked URL list. It provides a command-line tool for users to input a URL, and the script will verify if it's valid and whether it is blocked based on a predefined list.

## Features

- **URL Validation**: Ensures the entered URL is in a valid format.
- **Blocked URL Check**: Checks if the URL is present in a predefined `BlockedURL.txt` file.
- **Log Valid URLs**: Appends valid URLs to a `url.txt` file.
- **Customizable Blocked List**: The blocked URLs are read from a `BlockedURL.txt` file that you can modify.

## Prerequisites

To run this project, ensure you have the following installed:

- **Node.js** (preferably v14 or above)
- **npm** (Node package manager)

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**:

   The project requires some external Node.js modules to function. Install them by running:

   ```bash
   npm install
   ```

3. **Create the `BlockedURL.txt` file**:

   In the project directory, create a file called `BlockedURL.txt` containing the URLs you want to block. For example:

   ```
   www.blockedsite.com
   malicious.com
   tiktok.com
   ```

4. **Create the `url.txt` file** (Optional):

   This file will store the validated URLs. You can manually create it or let the script generate it when URLs are validated.

## Usage

To run the script, use the following command from the terminal:

```bash
node main.js <url>
```

Where `<url>` is the URL you want to check. For example:

```bash
node main.js https://example.com
```

### Output

- If the URL is **valid** and **not blocked**, the script will append it to the `url.txt` file and print:

  ```
  URL is valid
  ```

- If the URL is **blocked**, the script will display:

  ```
  Blocked URL
  ```

- If the URL is **invalid**, the script will display:

  ```
  <url> is not a valid URL.
  ```

### Example

1. **Valid URL Example**:

   ```bash
   node main.js https://hashnode.com/
   ```

   Output:

   ```
   URL is valid
   ```

   The URL is appended to `url.txt`.

2. **Blocked URL Example**:

   ```bash
   node main.js https://malicious.com
   ```

   Output:

   ```
   Blocked URL
   ```

3. **Invalid URL Example**:

   ```bash
   node main.js example
   ```

   Output:

   ```
   example is not a valid URL.
   ```

## File Structure

- **main.js**: Main script that processes the URL validation and checking.
- **BlockedURL.txt**: A text file containing the list of blocked URLs.
- **url.txt**: A text file where valid URLs are logged (created automatically).
- **package.json**: Project metadata and dependencies.

## Dependencies

- `validator`: A library to validate URLs.
- `chalk`: A library for styled console output.
- `fs`: A built-in Node.js module for reading and writing files.
- `url`: A built-in Node.js module for URL parsing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
