# 42i Challenge

**Author**: Brian Aguirre

This document outlines the setup and usage instructions for the assigned challenge.

## Live version

**Access**: https://42i-challenge-one.vercel.app/

## Languages

- Javascript

## Technologies

- React (Vite)
- Vitest

## Folder structure

You can find the algorithms and tests in **/algorithms** and **/tests** respectively.

## Web application

Three options are provided to run the application: Docker, bash script (no Docker), and manual.

### Docker

1. **Check**: Docker should be properly installed. Run ``docker -v``.
2. **Build**: Run ``docker build . -t "42i-challenge:v1.0"`` on the root directory.
3. **Run**: Run ``docker run -p 5173:5173 42i-challenge:v1.0``.
4. **Access**: Open your browser and go to http://localhost:5173.

#### Automatic script setup (no Docker)

1. Run ``bash start.sh`` on the root directory.
2. **Access**: Open your browser and go to http://localhost:5173.

#### Manual install and run

1. **Cloning repository**: Clone this repository to your computer.
2. **Install dependencies**: Run ``npm i`` on the root directory.
3. **Start the app**: Run ``npm run dev`` on the root directory.
4. **Access**: Open your browser and go to http://localhost:5173.

## Algorithms testing
Run ``npm run test`` on the root directory.

## AI usage

AI has been used to check for possible algorithm's complexity improvements; it didn't suggest any major changes though, only the usage of a Set instead of an Object in the Two Number Sum function.

## Troubleshooting

- Check the terminal output for any errors during setup or startup.
- Review README.md and ensure all steps have been followed correctly.
- Refer to the documentation for each technology used for further assistance.