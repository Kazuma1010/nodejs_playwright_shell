import fs from "fs"
import { execSync } from "child_process"
import { test, expect } from "@playwright/test"

test("sample", () => {
  expect("a").toEqual("a")
})

test("execute shell", () => { 
  const result = execSync("curl -h > curl_help.txt")
  console.log(result.toString())
})