# BK1031 Resume Bank

This is a simple repository that automates building and deploying resumes, allowing them to be easily acessible from anywhere. The goal was to be able to have a single place where I would always have up-to-date resumes. Any changes can be made by commiting to this repository will automatically be propogated wherever the resume link is used.

For example, my main resume would always be at https://resume.bk1031.dev/bharat_kathi_main.pdf.

## How it works

Resumes are any `.tex` files in the root directory of the repository. When a commit lands on the main branch, the `Build and Deploy workflow` is run. This workflow consists of the following two jobs.

### `Build LaTeX`

This job finds all `.tex` files in the root directory and builds them into PDFs using [`xu-cheng/latex-action@v3`](https://github.com/xu-cheng/latex-action).

### `Deploy Resumes`

This job takes the compiles PDF's from the previous job and copies them into the `public/` folder. This allows them to be publically accessible from the NextJS site. Then it builds the NextJS project into a static site and deploys it on Vercel.