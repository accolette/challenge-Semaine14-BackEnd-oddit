import * as fs from "node:fs";

// ============ LOGGIN ERRORS ============
export function writeToLog(logMessage = "LOG") {
  const currentDate = new Date().toISOString();
  try {
    fs.appendFileSync("log", `[${currentDate}] ${logMessage}\n`);
  } catch (error) {
    console.error(error);
  }
}

// ============ 404 NOT FOUND MODEL ============
export const notFound = (msg = "Resource not found") => {
  writeToLog(`ERROR 404 : ${msg}`);
  const err = new Error(msg);
  err.status = 404;
  return err;
};
