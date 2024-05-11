import { execFile } from "child_process";
import fs from "fs";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(req: Request, res: Response) {
  try {
    // create a new directory called codebase if it doesn't exist
    await createCodeBase();

    // Return a response
    return NextResponse.json(
      {
        message: "Codebase directory created",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("new-proj error: ", error);
    return NextResponse.json(
      {
        message: "Error creating codebase directory",
      },
      {
        status: 500,
      }
    );
  }
}

async function createCodeBase() {
  // create the root dir
  if (fs.existsSync("codebase")) {
    console.log("Directory already exists");
  } else {
    fs.mkdirSync("codebase");
  }

  // create a directory that will be the id of the project
  const id = uuidv4();
  const projectDir = `codebase/${id}`;

  // create a new Next.js project
  await createNextApp(projectDir);

  // start the development server
  await startDevServer(projectDir);
}

async function createNextApp(projectDir: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const createNextAppCommand = "npx";
    const createNextAppArgs = [
      "create-next-app@latest",
      "--use-npm",
      "--yes",
      projectDir,
    ];

    const createNextAppProcess = execFile(
      createNextAppCommand,
      createNextAppArgs,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error creating Next.js app: ${error}`);
          reject(error);
        } else {
          console.log(`Next.js app created successfully in ${projectDir}`);
          resolve();
        }
      }
    );

    createNextAppProcess.stdout?.on("data", (data) => {
      console.log(`stdout: ${data.toString()}`);
    });

    createNextAppProcess.stderr?.on("data", (data) => {
      console.error(`stderr: ${data.toString()}`);
    });
  });
}

async function startDevServer(projectDir: string) {
  const devServerProcess = execFile(
    "npm",
    ["run", "dev", "--", "--port=3010"],
    {
      cwd: projectDir,
    }
  );

  devServerProcess?.stdout.on("data", (data) => {
    console.log(`stdout: ${data.toString()}`);
  });

  devServerProcess?.stderr.on("data", (data) => {
    console.error(`stderr: ${data.toString()}`);
  });

  devServerProcess.on("close", (code) => {
    if (code !== 0) {
      console.error(`Next.js app failed to start on port 3010`);
    }
  });
}
